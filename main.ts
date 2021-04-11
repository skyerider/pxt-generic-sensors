enum PingUnit {
  //% block="cm"
  Centimeters,
  //% block="inches"
  Inches
}

enum RgbColors {
  //% block=red
  Red = 0xFF0000,
  //% block=orange
  Orange = 0xFFA500,
  //% block=yellow
  Yellow = 0xFFFF00,
  //% block=green
  Green = 0x00FF00,
  //% block=blue
  Blue = 0x0000FF,
  //% block=indigo
  Indigo = 0x4b0082,
  //% block=violet
  Violet = 0x8a2be2,
  //% block=purple
  Purple = 0xFF00FF,
  //% block=white
  White = 0xFFFFFF,
  //% block=black
  Black = 0x000000
}

enum RgbUltrasonics {
  //% block=left
  Left = 0x00,
  //% block=right
  Right = 0x01,
  //% block=all
  All = 0x02
}

enum ColorEffect {
  //% block=none
  None = 0x00,
  //% block=breathing
  Breathing = 0x01,
  //% block=rotate
  Rotate = 0x02,
  //% block=flash
  Flash = 0x03
}

enum DHT11Type {
  //% block="temperature(℃)" 
  DHT11_temperature_C = 0,
  //% block="humidity(0~100)"
  DHT11_humidity = 1,
}

enum _selectpin {
  //% block="Apin"
  Apin = 0,
  //% block="Bpin"
  Bpin = 1,
  //% block="Dpin"
  Dpin = 2,
}

// enum RemoteButton {
//     //% block=A
//     A = 0x45,
//     //% block=B
//     B = 0x46,
//     //% block=C
//     C = 0x47,
//     //% block=D
//     D = 0x44,
//     //% block=UP
//     UP = 0x40,
//     //% block=+
//     Add = 0x43,
//     //% block=LEFT
//     Left = 0x07,
//     //% block=OK
//     Ok = 0x15,
//     //% block=RIGHT
//     Right = 0x09,
//     //% block=DOWN
//     Down = 0x19,
//     //% block=-
//     EQ = 0x0d,
//     //% block=0
//     NUM0 = 0x16,
//     //% block=1
//     NUM1 = 0x0c,
//     //% block=2
//     NUM2 = 0x18,
//     //% block=3
//     NUM3 = 0x5e,
//     //% block=4
//     NUM4 = 0x8,
//     //% block=5
//     NUM5 = 0x1c,
//     //% block=6
//     NUM6 = 0x5a,
//     //% block=7
//     NUM7 = 0x42,
//     //% block=8
//     NUM8 = 0x52,
//     //% block=9
//     NUM9 = 0x4A,
// }


enum IrPins {
  P0 = 3,
  P1 = 2,
  P2 = 1,
  P3 = 4,
  P4 = 5,
  P5 = 17,
  P6 = 12,
  P7 = 11,
  P8 = 18,
  P9 = 10,
  P10 = 6,
  P11 = 26,
  P12 = 20,
  P13 = 23,
  P14 = 22,
  P15 = 21,
  P16 = 16,
  P19 = 0,
  P20 = 30,
}

enum _rockerpin {
  //% block="Xpin"
  Xpin = 0,
  //% block="Ypin"
  Ypin = 1
}

enum rotation_direction {
  //% block="none"
  none = 0,
  //% block="clockwise"
  clockwise = 1,
  //% block="counter-clockwise"
  counterclockwise = 2,
  //% block="180-degree"
  one_eighty_degree = 3,
}

enum ledon_off {
  //% block="on"
  _on = 1,
  //% block="off"
  _off = 0,
}

enum on_off {

  //% block="on"
  _on = 1,
  //% block="off"
  _off = 0,
}

enum _selectlight {
  //% block="_yellow"
  _yellow = 0,
  //% block="_red"
  _red = 1,
  //% block="_green"
  _green = 2,
}

enum _selectcolor {
  //% block="_blue"
  _blue = 0,
  //% block="_red"
  _red = 1,
  //% block="_green"
  _green = 2,
}

enum run_turn {

  //% block="forward"
  forward = 0,
  //% block="reverse"
  reverse = 1,
}

enum LcdBacklight {
  //% block="on"
  _on = 1,
  //% block="off"
  _off = 0,
}

enum Item {
  //% block="on"
  _on = 1,
  //% block="off"
  _off = 2,
  //% block="clear"
  _clear = 3,
}

enum Select {
  //% block="on"
  _on = 0,
  //% block="off"
  _off = 1,
  //% block="clear"
  _clear = 2,
}

enum Mode {
  //% block="LOOP"
  LOOP_MODE = 0,        // 循环模式
  //% block="BUTTON"
  BUTTON_MODE = 1,      // 按键模式
  //% block="KEYWORDS"
  KEYWORDS_MODE = 2,    // 关键字模式
  //% block="KEYWORDS_AND"
  KEYWORDS_AND_BUTTON = 3, //关键字加按键模式
}

enum barb_fitting {
  //% block="LEFT"
  BUTOON_LEFT = 0,
  //% block="RIGHT" 
  BUTOON_RIGHT = 1,
  //% block="UP"
  BUTOON_UP = 2, 
  //% block="DOWN"
  BUTOON_DOWN = 3, 
  //% block="BUTTON"
  JOYSTICK_BUTTON = 4,
}

enum key_status {
  //% block="DOWN"
  PRESS_DOWN = 0,   //按下
  //% block="UP"
  PRESS_UP = 1,    //释放
  //% block="CLICK1"
  SINGLE_CLICK = 3,     //单击
  //% block="CLICK2"
  DOUBLE_CLICK = 4,    //双击
  //% block="HOLD"
  LONG_PRESS_HOLD = 6,    //长按
  //% block="PRESS"
  NONE_PRESS = 8,      //未按
}

enum Shaft{
  //% block="X"
  X_Shaft = 0,
  //% block="Y"
  Y_Shaft = 1,
}



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

  let initialized = false
  //let neoStrip: neopixel.Strip;
  let emRGBLight: EMRGBLight.EmakefunRGBLight;
  let matBuf = pins.createBuffer(17);
  let distanceBuf = 0;


    /**
     * Get RUS04 distance
     * @param pin Microbit ultrasonic pin; eg: P2
    */
    //% blockId=Ultrasonic block="Read RgbUltrasonic Distance at pin %pin(cm)"  group="RGB超声波"
    //% weight=76
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function Ultrasonic(pin: DigitalPin): number {
      pins.setPull(pin, PinPullMode.PullNone);
      pins.digitalWritePin(pin, 0);
      control.waitMicros(2);
      pins.digitalWritePin(pin, 1);
      control.waitMicros(50);
      pins.digitalWritePin(pin, 0);
      control.waitMicros(1000);
      while(!pins.digitalReadPin(pin));
      // read pulse
      let d = pins.pulseIn(pin, PulseValue.High, 25000);
      let ret = d;
      // filter timeout spikes
      if (ret == 0 && distanceBuf != 0) {
          ret = distanceBuf;
      }
      distanceBuf = d;
      //return d;
      return Math.floor(ret * 9 / 6 / 58);
      //return Math.floor(ret / 40 + (ret / 800));
      // Correction

  }

  function RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
      for (let i = indexstart; i <= indexend; i++) {
          emRGBLight.setPixelColor(i, rgb);
      }
      emRGBLight.show();
  }

  export function rus04_rgb(pin: DigitalPin, offset: number, index: number, rgb: number, effect: number): void {
      let start = 0, end = 0;
      if (!emRGBLight) {
          emRGBLight = EMRGBLight.create(pin, offset+6, EMRGBPixelMode.RGB)
      }
      if(offset>=4){
          if (index == RgbUltrasonics.Left) {
              start = 0;
              end = 2;
          } else if (index == RgbUltrasonics.Right) {
              start = 3;
              end = 5;
          } else if (index == RgbUltrasonics.All) {
              start = 0;
              end = 5;
          }
      }
      start += offset;
      end += offset;
      switch (effect) {
          case ColorEffect.None:
              RgbDisplay(start, end, rgb);
              break;
          case ColorEffect.Breathing:
              for (let i = 0; i < 255; i += 2) {
                  emRGBLight.setBrightness(i);
                  RgbDisplay(start, end, rgb);
                  //basic.pause((255 - i)/2);
                  basic.pause((i < 20) ? 80 : (255 / i));
              }
              for (let i = 255; i > 0; i -= 2) {
                  emRGBLight.setBrightness(i);
                  RgbDisplay(start, end, rgb);
                  basic.pause((i < 20) ? 80 : (255 / i));
              }
              break;
          case ColorEffect.Rotate:
              for (let i = 0; i < 4; i++) {
                  emRGBLight.setPixelColor(start, rgb);
                  emRGBLight.setPixelColor(start + 1, 0);
                  emRGBLight.setPixelColor(start + 2, 0);
                  if (index == RgbUltrasonics.All) {
                      emRGBLight.setPixelColor(end - 2, rgb);
                      emRGBLight.setPixelColor(end - 1, 0);
                      emRGBLight.setPixelColor(end, 0);
                  }
                  emRGBLight.show();
                  basic.pause(150);
                  emRGBLight.setPixelColor(start, 0);
                  emRGBLight.setPixelColor(start + 1, rgb);
                  emRGBLight.setPixelColor(start + 2, 0);
                  if (index == RgbUltrasonics.All) {
                      emRGBLight.setPixelColor(end - 2, 0);
                      emRGBLight.setPixelColor(end - 1, rgb);
                      emRGBLight.setPixelColor(end, 0);
                  }
                  emRGBLight.show();
                  basic.pause(150);
                  emRGBLight.setPixelColor(start, 0);
                  emRGBLight.setPixelColor(start + 1, 0);
                  emRGBLight.setPixelColor(start + 2, rgb);
                  if (index == RgbUltrasonics.All) {
                      emRGBLight.setPixelColor(end - 2, 0);
                      emRGBLight.setPixelColor(end - 1, 0);
                      emRGBLight.setPixelColor(end, rgb);
                  }
                  emRGBLight.show();
                  basic.pause(150);
              }
              RgbDisplay(4, 9, 0);
              break;
          case ColorEffect.Flash:
              for (let i = 0; i < 6; i++) {
                  RgbDisplay(start, end, rgb);
                  basic.pause(150);
                  RgbDisplay(start, end, 0);
                  basic.pause(150);
              }
              break;
      }
  }

  //% blockId="sensorbit_rus04" block="part %index show color %rgb effect %effect rgbpin %pin"  group="RGB超声波"
  //% weight=75
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensorbit_rus04(pin: DigitalPin, index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
      rus04_rgb(pin, 0, index, rgb, effect);
  }

  /**
   * Send a ping and get the echo time (in microseconds) as a result
   * @param trig tigger pin
   * @param echo echo pin
   * @param unit desired conversion unit
   * @param maxCmDistance maximum distance in centimeters (default is 500)
   */
  //% blockId="sensor_ping" block="ping trig %trig|echo %echo|unit %unit" group="普通超声波"
  //% weight=75
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
      // send pulse
      pins.setPull(trig, PinPullMode.PullNone);
      pins.digitalWritePin(trig, 0);
      control.waitMicros(2);
      pins.digitalWritePin(trig, 1);
      control.waitMicros(10);
      pins.digitalWritePin(trig, 0);

      // read pulse
      const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

      switch (unit) {
          case PingUnit.Centimeters: return Math.idiv(d, 58);
          case PingUnit.Inches: return Math.idiv(d, 148);
          default: return d;
      }
  }

}
