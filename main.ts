const enum IrButton {
  //% block="任意"
  Any = -1,
  //% block="▲"
  Up = 0x62,
  //% block=" "
  Unused_2 = -2,
  //% block="◀"
  Left = 0x22,
  //% block="OK"
  Ok = 0x02,
  //% block="▶"
  Right = 0xc2,
  //% block=" "
  Unused_3 = -3,
  //% block="▼"
  Down = 0xa8,
  //% block=" "
  Unused_4 = -4,
  //% block="1"
  Number_1 = 0x68,
  //% block="2"
  Number_2 = 0x98,
  //% block="3"
  Number_3 = 0xb0,
  //% block="4"
  Number_4 = 0x30,
  //% block="5"
  Number_5 = 0x18,
  //% block="6"
  Number_6 = 0x7a,
  //% block="7"
  Number_7 = 0x10,
  //% block="8"
  Number_8 = 0x38,
  //% block="9"
  Number_9 = 0x5a,
  //% block="*"
  Star = 0x42,
  //% block="0"
  Number_0 = 0x4a,
  //% block="#"
  Hash = 0x52,
}

const enum IrButtonAction {
  //% block="按下"
  Pressed = 0,
  //% block="释放"
  Released = 1,
}

const enum IrProtocol {
  //% block="Keyestudio"
  Keyestudio = 0,
  //% block="NEC"
  NEC = 1,
}

//% color=#0fbc11 icon="\u272a" block="创之翼工具箱"
//% category="创之翼工具箱"
namespace makerbit {
  let irState: IrState;

  const MICROBIT_MAKERBIT_IR_NEC = 777;
  const MICROBIT_MAKERBIT_IR_DATAGRAM = 778;
  const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789;
  const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790;
  const IR_REPEAT = 256;
  const IR_INCOMPLETE = 257;
  const IR_DATAGRAM = 258;

  interface IrState {
    protocol: IrProtocol;
    hasNewDatagram: boolean;
    bitsReceived: uint8;
    addressSectionBits: uint16;
    commandSectionBits: uint16;
    hiword: uint16;
    loword: uint16;
  }

  function appendBitToDatagram(bit: number): number {
    irState.bitsReceived += 1;

    if (irState.bitsReceived <= 8) {
      irState.hiword = (irState.hiword << 1) + bit;
      if (irState.protocol === IrProtocol.Keyestudio && bit === 1) {
        // recover from missing message bits at the beginning
        // Keyestudio address is 0 and thus missing bits can be detected
        // by checking for the first inverse address bit (which is a 1)
        irState.bitsReceived = 9;
        irState.hiword = 1;
      }
    } else if (irState.bitsReceived <= 16) {
      irState.hiword = (irState.hiword << 1) + bit;
    } else if (irState.bitsReceived <= 32) {
      irState.loword = (irState.loword << 1) + bit;
    }

    if (irState.bitsReceived === 32) {
      irState.addressSectionBits = irState.hiword & 0xffff;
      irState.commandSectionBits = irState.loword & 0xffff;
      return IR_DATAGRAM;
    } else {
      return IR_INCOMPLETE;
    }
  }

  function decode(markAndSpace: number): number {
    if (markAndSpace < 1600) {
      // low bit
      return appendBitToDatagram(0);
    } else if (markAndSpace < 2700) {
      // high bit
      return appendBitToDatagram(1);
    }

    irState.bitsReceived = 0;

    if (markAndSpace < 12500) {
      // Repeat detected
      return IR_REPEAT;
    } else if (markAndSpace < 14500) {
      // Start detected
      return IR_INCOMPLETE;
    } else {
      return IR_INCOMPLETE;
    }
  }

  function enableIrMarkSpaceDetection(pin: DigitalPin) {
    pins.setPull(pin, PinPullMode.PullNone);

    let mark = 0;
    let space = 0;

    pins.onPulsed(pin, PulseValue.Low, () => {
      // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
      mark = pins.pulseDuration();
    });

    pins.onPulsed(pin, PulseValue.High, () => {
      // LOW
      space = pins.pulseDuration();
      const status = decode(mark + space);

      if (status !== IR_INCOMPLETE) {
        control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, status);
      }
    });
  }

  /**
   * Connects to the 红外接收模块 module at the specified pin and configures the IR protocol.
   * @param pin 红外接收模块 pin, eg: DigitalPin.P0
   * @param protocol IR protocol, eg: IrProtocol.Keyestudio
   */
  //% subcategory="红外接收模块"
  //% blockId="makerbit_infrared_connect_receiver"
  //% block="连接红外接收模块到引脚 %pin 解码方式 %protocol"
  //% pin.fieldEditor="gridpicker"
  //% pin.fieldOptions.columns=4
  //% pin.fieldOptions.tooltips="false"
  //% weight=90
  export function connectIrReceiver(
    pin: DigitalPin,
    protocol: IrProtocol
  ): void {
    if (irState) {
      return;
    }

    irState = {
      protocol: protocol,
      bitsReceived: 0,
      hasNewDatagram: false,
      addressSectionBits: 0,
      commandSectionBits: 0,
      hiword: 0, // TODO replace with uint32
      loword: 0,
    };

    enableIrMarkSpaceDetection(pin);

    let activeCommand = -1;
    let repeatTimeout = 0;
    const REPEAT_TIMEOUT_MS = 120;

    control.onEvent(
      MICROBIT_MAKERBIT_IR_NEC,
      EventBusValue.MICROBIT_EVT_ANY,
      () => {
        const irEvent = control.eventValue();

        // Refresh repeat timer
        if (irEvent === IR_DATAGRAM || irEvent === IR_REPEAT) {
          repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
        }

        if (irEvent === IR_DATAGRAM) {
          irState.hasNewDatagram = true;
          control.raiseEvent(MICROBIT_MAKERBIT_IR_DATAGRAM, 0);

          const newCommand = irState.commandSectionBits >> 8;

          // Process a new command
          if (newCommand !== activeCommand) {
            if (activeCommand >= 0) {
              control.raiseEvent(
                MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                activeCommand
              );
            }

            activeCommand = newCommand;
            control.raiseEvent(
              MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID,
              newCommand
            );
          }
        }
      }
    );

    control.inBackground(() => {
      while (true) {
        if (activeCommand === -1) {
          // sleep to save CPU cylces
          basic.pause(2 * REPEAT_TIMEOUT_MS);
        } else {
          const now = input.runningTime();
          if (now > repeatTimeout) {
            // repeat timed out
            control.raiseEvent(
              MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
              activeCommand
            );
            activeCommand = -1;
          } else {
            basic.pause(REPEAT_TIMEOUT_MS);
          }
        }
      }
    });
  }

  /**
   * Do something when a specific button is pressed or released on the remote control.
   * @param button the button to be checked
   * @param action the trigger action
   * @param handler body code to run when the event is raised
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_on_ir_button
  //% block="当红外接收模块按钮 | %button | %action"
  //% button.fieldEditor="gridpicker"
  //% button.fieldOptions.columns=3
  //% button.fieldOptions.tooltips="false"
  //% weight=50
  export function onIrButton(
    button: IrButton,
    action: IrButtonAction,
    handler: () => void
  ) {
    control.onEvent(
      action === IrButtonAction.Pressed
        ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
        : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
      button === IrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
      () => {
        handler();
      }
    );
  }

  /**
   * Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_ir_button_pressed
  //% block="红外接收模块按钮"
  //% weight=70
  export function irButton(): number {
    basic.pause(0); // Yield to support background processing when called in tight loops
    if (!irState) {
      return IrButton.Any;
    }
    return irState.commandSectionBits >> 8;
  }

  /**
   * Do something when an IR datagram is received.
   * @param handler body code to run when the event is raised
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_on_ir_datagram
  //% block="当红外接收模块收到数据包"
  //% weight=40
  export function onIrDatagram(handler: () => void) {
    control.onEvent(
      MICROBIT_MAKERBIT_IR_DATAGRAM,
      EventBusValue.MICROBIT_EVT_ANY,
      () => {
        handler();
      }
    );
  }

  /**
   * Returns the IR datagram as 32-bit hexadecimal string.
   * The last received datagram is returned or "0x00000000" if no data has been received yet.
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_ir_datagram
  //% block="红外接收模块数据包"
  //% weight=30
  export function irDatagram(): string {
    basic.pause(0); // Yield to support background processing when called in tight loops
    if (!irState) {
      return "0x00000000";
    }
    return (
      "0x" +
      ir_rec_to16BitHex(irState.addressSectionBits) +
      ir_rec_to16BitHex(irState.commandSectionBits)
    );
  }

  /**
   * Returns true if any IR data was received since the last call of this function. False otherwise.
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_was_any_ir_datagram_received
  //% block="红外接收模块收到数据"
  //% weight=80
  export function wasIrDataReceived(): boolean {
    basic.pause(0); // Yield to support background processing when called in tight loops
    if (!irState) {
      return false;
    }
    if (irState.hasNewDatagram) {
      irState.hasNewDatagram = false;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns the command code of a specific IR button.
   * @param button the button
   */
  //% subcategory="红外接收模块"
  //% blockId=makerbit_infrared_button_code
  //% button.fieldEditor="gridpicker"
  //% button.fieldOptions.columns=3
  //% button.fieldOptions.tooltips="false"
  //% block="红外接收模块按钮代码 %button"
  //% weight=60
  export function irButtonCode(button: IrButton): number {
    basic.pause(0); // Yield to support background processing when called in tight loops
    return button as number;
  }

  function ir_rec_to16BitHex(value: number): string {
    let hex = "";
    for (let pos = 0; pos < 4; pos++) {
      let remainder = value % 16;
      if (remainder < 10) {
        hex = remainder.toString() + hex;
      } else {
        hex = String.fromCharCode(55 + remainder) + hex;
      }
      value = Math.idiv(value, 16);
    }
    return hex;
  }


}
