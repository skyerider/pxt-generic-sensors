enum PingUnit {
  //% block="厘米"
  Centimeters,
  //% block="英寸"
  Inches
}

enum RgbColors {
  //% block=红色
  Red = 0xFF0000,
  //% block=橙色
  Orange = 0xFFA500,
  //% block=黄色
  Yellow = 0xFFFF00,
  //% block=绿色
  Green = 0x00FF00,
  //% block=蓝色
  Blue = 0x0000FF,
  //% block=靛蓝色
  Indigo = 0x4b0082,
  //% block=紫罗兰色
  Violet = 0x8a2be2,
  //% block=紫色
  Purple = 0xFF00FF,
  //% block=白色
  White = 0xFFFFFF,
  //% block=熄灭
  Black = 0x000000
}

enum RgbUltrasonics {
  //% block=左
  Left = 0x00,
  //% block=右
  Right = 0x01,
  //% block=全部
  All = 0x02
}

enum ColorEffect {
  //% block=无
  None = 0x00,
  //% block=呼吸灯
  Breathing = 0x01,
  //% block=旋转灯
  Rotate = 0x02,
  //% block=闪烁
  Flash = 0x03
}

enum DHT11Type {
  //% block="温度(℃)" 
  DHT11_temperature_C = 0,
  //% block="湿度(0~100)"
  DHT11_humidity = 1,
}

enum _selectpin {
  //% block="A引脚"
  Apin = 0,
  //% block="B引脚"
  Bpin = 1,
  //% block="D引脚"
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
  //% block="X引脚"
  Xpin = 0,
  //% block="Y引脚"
  Ypin = 1
}

enum rotation_direction {
  //% block="无"
  none = 0,
  //% block="顺时针"
  clockwise = 1,
  //% block="逆时针"
  counterclockwise = 2,
  //% block="180度"
  one_eighty_degree = 3,
}

enum ledon_off {
  //% block="开启"
  _on = 1,
  //% block="关闭"
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

  //% block="向前"
  forward = 0,
  //% block="向后"
  reverse = 1,
}

enum LcdBacklight {
  //% block="打开"
  _on = 1,
  //% block="关闭"
  _off = 0,
}

enum Item {
  //% block="打开"
  _on = 1,
  //% block="关闭"
  _off = 2,
  //% block="清除"
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
  //% block="左"
  BUTOON_LEFT = 0,
  //% block="右" 
  BUTOON_RIGHT = 1,
  //% block="上"
  BUTOON_UP = 2, 
  //% block="下"
  BUTOON_DOWN = 3, 
  //% block="按下"
  JOYSTICK_BUTTON = 4,
}

enum key_status {
  //% block="按下"
  PRESS_DOWN = 0,   //按下
  //% block="释放"
  PRESS_UP = 1,    //释放
  //% block="单击"
  SINGLE_CLICK = 3,     //单击
  //% block="双击"
  DOUBLE_CLICK = 4,    //双击
  //% block="长按"
  LONG_PRESS_HOLD = 6,    //长按
  //% block="未按下"
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

//% color=#0fbc11 weight=10 icon="\u272a" block="创之翼工具箱"
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
  let emRGBLight: EMRGBLight.EmakefunRGBLight;
  let matBuf = pins.createBuffer(17);
  let distanceBuf = 0;

  /**
   * Get RUS04 distance
   * @param pin Microbit ultrasonic pin; eg: P2
  */
  //% blockId=Ultrasonic block="从引脚 %pin 上的RGB超声波模块获取距离(cm)"  group="RGB超声波"
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

  //% blockId="sensorbit_rus04" block="选择引脚%pin选择彩灯%index选择颜色%rgb选择效果%effect"
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
  //% blockId="sensor_ping" block="trig引脚 %trig|echo引脚 %echo|单位 %unit" group="普通超声波"
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

  //% blockId=actuator_buzzer0 block="有源蜂鸣器控制引脚 ：%pin|状态 %status"   group="有源蜂鸣器"
  //% weight=70
  //% subcategory="输出模块"
  export function actuator_buzzer0(pin: DigitalPin, status: on_off): void {
      pins.digitalWritePin(pin, status)
  }

  //% blockId=actuator_buzzer1 block="无源蜂鸣器控制引脚 ：%pin|频率 %freq"   group="无源蜂鸣器"
  //% weight=70
  //% subcategory="输出模块"
  export function actuator_buzzer1(pin: AnalogPin, freq: number): void {
      pins.analogWritePin(pin, freq)
  }

  //% blockId=actuator_relay block="继电器控制引脚 ：%pin|状态 %status"   group="继电器"
  //% weight=70
  //% subcategory="输出模块"
  export function actuator_relay(pin: DigitalPin, status: on_off): void {
      pins.digitalWritePin(pin, status)
  }

  //% blockId=actuator_motor_run block="微型直流电机转动 INA | %_INA | INB | %_INB | 方向 | %turn | 速度 %speed"  group="直流电机"
  //% weight=70
  //% inlineInputMode=inline
  //% speed.min=0 speed.max=255
  //% subcategory="输出模块"
  export function actuator_motor_run(_INA: AnalogPin, _INB: AnalogPin, turn: run_turn, speed: number): void {

    if (turn == 0) {
          pins.analogWritePin(_INA, 0)
          pins.analogWritePin(_INB, speed)

      } else if (turn == 1) {
          pins.analogWritePin(_INA, speed)
          pins.analogWritePin(_INB, 0)
    }

  }

  /**
   * 舵机
   */
  //% blockId=actuator_servo block="180度微型舵机 %pin|转到角度 %angle"  group="舵机"
  //% angle.min=0  angle.max=180
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="输出模块"
  export function actuator_servo(pin: AnalogPin, angle: number): void {

      let increment = 1
      pins.servoWritePin(pin, angle)
      angle = angle + increment
      if (angle == 0)
          increment = 1
      else if (angle == 180)
          increment = -1
      basic.pause(100)
  }  

  let _SDO = 0
  let _SCL = 0

  //% blockId=actuator_keyborad_pin block="触摸键盘初始化|SDA引脚 %SDO|SCL引脚 %SCL"   group="触摸键盘"
  //% weight=71
  //% subcategory="基础输入模块"
  export function actuator_keyborad_pin(SDA: DigitalPin, SCL: DigitalPin): void {

      _SDO = SDA
      _SCL = SCL
  }

  //% blockId=actuator_keyborad_read block="读取到的键盘值"   group="触摸键盘"
  //% weight=70
  //% subcategory="基础输入模块"
  export function actuator_keyborad_read(): string {
      let DATA = 0
      pins.digitalWritePin(_SDO, 1)
      control.waitMicros(93)

      pins.digitalWritePin(_SDO, 0)
      control.waitMicros(10)

      for (let i = 0; i < 16; i++) {
          pins.digitalWritePin(_SCL, 1)
          pins.digitalWritePin(_SCL, 0)
          DATA |= pins.digitalReadPin(_SDO) << i
      }
      control.waitMicros(2 * 1000)
      switch (DATA & 0xFFFF) {
          case 0xFFFE: return "1"
          case 0xFFFD: return "2"
          case 0xFFFB: return "3"
          case 0xFFEF: return "4"
          case 0xFFDF: return "5"
          case 0xFFBF: return "6"
          case 0xFEFF: return "7"
          case 0xFDFF: return "8"
          case 0xFBFF: return "9"
          case 0xDFFF: return "0"
          case 0xFFF7: return "A"
          case 0xFF7F: return "B"
          case 0xF7FF: return "C"
          case 0x7FFF: return "D"
          case 0xEFFF: return "*"
          case 0xBFFF: return "#"
          default: return " "
      }
  }

  //% blockId=setled block="设置LED灯引脚：%lpin|状态 %lstatus"   group="LED灯"
  //% weight=70
  //% subcategory="输出模块"
  export function setled(lpin: DigitalPin, lstatus: ledon_off): void {
      pins.digitalWritePin(lpin, lstatus)
  }
  let _Rpins = 0
  let _Gpins = 0
  let _Bpins = 0

  //% blockId=setrgbpin block="设置三色灯引脚|绿 %_GPin|蓝 %_BPin|红 %_RPin"   group="三色灯"
  //% weight=70
  //% subcategory="输出模块"
  export function setRGBpin(_GPin: DigitalPin, _BPin: DigitalPin, _RPin: DigitalPin): void {
      _Gpins = _GPin
      _Bpins = _BPin
      _Rpins = _RPin
  }

  //% blockId=yledon block="设置颜色|红 %r_color|绿 %g_color|蓝 %b_color"   group="三色灯"
  //% r_color.min=0  r_color.max=255
  //% g_color.min=0  g_color.max=255
  //% b_color.min=0  b_color.max=255
  //% weight=70
  //% subcategory="输出模块"
  export function selectcolor(r_color: number,g_color: number,b_color: number): void {
      pins.analogWritePin(_Rpins,r_color)
      pins.analogWritePin(_Gpins,g_color)
      pins.analogWritePin(_Bpins,b_color)
  }

  
  let i2cAddr: number
  let BK: number
  let RS: number
  function setreg(d: number) {
      pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
      basic.pause(1)
  }

  function set(d: number) {
      d = d & 0xF0
      d = d + BK + RS
      setreg(d)
      setreg(d + 4)
      setreg(d)
  }

  function lcdcmd(d: number) {
      RS = 0
      set(d)
      set(d << 4)
  }

  function lcddat(d: number) {
      RS = 1
      set(d)
      set(d << 4)
  }

  //% block="LCD1602显示屏初始化,地址 $addr" addr.defl="39"  group="LCD1602显示屏"  
  //% subcategory="输出模块"
  //% weight=70
  export function i2cLcdInit(addr: number) {
      i2cAddr = addr
      BK = 8
      RS = 0
      lcdcmd(0x33)
      basic.pause(5)
      set(0x30)
      basic.pause(5)
      set(0x20)
      basic.pause(5)
      lcdcmd(0x28)
      lcdcmd(0x0C)
      lcdcmd(0x06)
      lcdcmd(0x01)
  }

  //% block="第$y行第$x列显示字符$ch"   group="LCD1602显示屏"  
  //% subcategory="输出模块"
  //% weight=69
  export function i2cLcdShowChar(y: number, x: number, ch: string): void {
      let a: number
      y = y - 1
      if (y > 0)
          a = 0xC0
      else
          a = 0x80
      x = x - 1
      a += x
      lcdcmd(a)
      lcddat(ch.charCodeAt(0))
  }

  //% block="第$y行第$x列显示数字$n"   group="LCD1602显示屏"  
  //% subcategory="输出模块"
  //% weight=68
  export function i2cLcdShowNumber(y: number, x: number, n: number): void {
      let s = n.toString()
      i2cLcdShowString(y, x, s)
  }

  //% block="第$y行第$x列显示字符串$s"   group="LCD1602显示屏"  
  //% subcategory="输出模块"
  //% weight=67
  export function i2cLcdShowString(y: number, x: number, s: string): void {
      let a: number
      y = y - 1
      if (y > 0)
          a = 0xC0
      else
          a = 0x80
      x = x - 1
      a += x
      lcdcmd(a)

      for (let i = 0; i < s.length; i++) {
          lcddat(s.charCodeAt(i))
      }
  }

  //% block="控制LCD1602显示屏 %item"   group="LCD1602显示屏"  
  //% subcategory="输出模块"
  //% weight=64
  export function i2cLcdDisplay_Control(item: Item): void {
      if (item == 1) {
          lcdcmd(0x0C)
      }
      if (item == 2) {
          lcdcmd(0x08)
      }
      if (item == 3) {
          lcdcmd(0x01)
      }
  }

  //% subcategory="输出模块"  block="设置LCD1602显示屏背景光 %backlight" group="LCD1602显示屏"
  //% blockId="seti2cLcdBacklight"
  //% weight=79
  export function seti2cLcdBacklight(backlight: LcdBacklight): void {
      if (backlight == 1) {
          BK = 8
          lcdcmd(0)
      }
      if (backlight == 0) {
          BK = 0
          lcdcmd(0)
      }
  }




  /**
   * TM1637
   */
  let TM1637_CMD1 = 0x40
  let TM1637_CMD2 = 0xC0
  let TM1637_CMD3 = 0x80
  let _SEGMENTS = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71]

  /**
   * TM1637 LED display
   */
  export class TM1637LEDs {
      buf: Buffer
      clk: DigitalPin
      dio: DigitalPin
      _ON: number
      brightness: number
      count: number   // number of LEDs

      /**
       * initial TM1637
       */
      init(): void {
          pins.digitalWritePin(this.clk, 0)
          pins.digitalWritePin(this.dio, 0)
          this._ON = 8
          this.buf = pins.createBuffer(this.count)
          this.clear()
      }

      /**
       * Start 
       */
      _start() {
          pins.digitalWritePin(this.dio, 0)
          pins.digitalWritePin(this.clk, 0)
      }

      /**
       * Stop
       */
      _stop() {
          pins.digitalWritePin(this.dio, 0)
          pins.digitalWritePin(this.clk, 1)
          pins.digitalWritePin(this.dio, 1)
      }

      /**
       * send command1
       */
      _write_data_cmd() {
          this._start()
          this._write_byte(TM1637_CMD1)
          this._stop()
      }

      /**
       * send command3
       */
      _write_dsp_ctrl() {
          this._start()
          this._write_byte(TM1637_CMD3 | this._ON | this.brightness)
          this._stop()
      }

      /**
       * send a byte to 2-wire interface
       */
      _write_byte(b: number) {
          for (let i = 0; i < 8; i++) {
              pins.digitalWritePin(this.dio, (b >> i) & 1)
              pins.digitalWritePin(this.clk, 1)
              pins.digitalWritePin(this.clk, 0)
          }
          pins.digitalWritePin(this.clk, 1)
          pins.digitalWritePin(this.clk, 0)
      }

      /**
       * set TM1637 intensity, range is [0-8], 0 is off.
       * @param val the brightness of the TM1637, eg: 7
       */
      //% blockId="TM1637_set_intensity" block="%tm| 设置亮度 %val"  group="TM1637数码管"
      //% weight=88 
      //% parts="TM1637"
      //% subcategory="输出模块"
      //% val.max=8 val.min=0
      intensity(val: number) {
          if (val < 1) {
              this.off()
              return
          }
          if (val > 8) val = 8
          this._ON = 8
          this.brightness = val - 1
          this._write_data_cmd()
          this._write_dsp_ctrl()
      }

      /**
       * set data to TM1637, with given bit
       */
      _dat(bit: number, dat: number) {
          this._write_data_cmd()
          this._start()
          this._write_byte(TM1637_CMD2 | (bit % this.count))
          this._write_byte(dat)
          this._stop()
          this._write_dsp_ctrl()
      }

      /**
       * show a number in given position. 
       * @param bit the position of the LED, eg: 0
       * @param num number will show, eg: 5
       * 
       */
      //% blockId="TM1637_showbit" block="%tm第 %bit 位显示数字 %num"  group="TM1637数码管"
      //% weight=90 blockGap=8
      //% parts="TM1637"
      //% bit.max=3 bit.min=0
      //% subcategory="输出模块"
      showbit(bit: number, num: number) {
          this.buf[bit % this.count] = _SEGMENTS[num % 16]
          this._dat(bit, _SEGMENTS[num % 16])
      }

      /**
        * show a number. 
        * @param num is a number, eg: 0
        */
      //% blockId="TM1637_shownum" block="%tm显示数字 %num"  group="TM1637数码管"
      //% weight=91 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      showNumber(num: number) {
          if (num < 0) {
              this._dat(0, 0x40) // '-'
              num = -num
          }
          else
              this.showbit(0, (num / 1000) % 10)
          this.showbit(3, num % 10)
          this.showbit(2, (num / 10) % 10)
          this.showbit(1, (num / 100) % 10)
      }

      /**
        * show a hex number. 
        * @param num is a hex number, eg: 0
        */
      //% blockId="TM1637_showhex" block="%tm显示十六进制数字%num"   group="TM1637数码管"
      //% weight=90 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      showHex(num: number) {
          if (num < 0) {
              this._dat(0, 0x40) // '-'
              num = -num
          }
          else
              this.showbit(0, (num >> 12) % 16)
          this.showbit(3, num % 16)
          this.showbit(2, (num >> 4) % 16)
          this.showbit(1, (num >> 8) % 16)
      }

      /**
       * show or hide dot point. 
       * @param bit is the position,eg: 0
       * 
       */
      //% blockId="TM1637_showDP" block="%tm| 点%bit|显示 %_status"  group="TM1637数码管"
      //% weight=70 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      //% bit.max=3 bit.min=0
      showDP(_status: ledon_off, bit: number) {
          bit = bit % this.count
          let show = _status == 1 ? true : false;
          if (show) this._dat(bit, this.buf[bit] | 0x80)
          else this._dat(bit, this.buf[bit] & 0x7F)
      }

      //% blockId="TM1637_clear" block="%tm清除显示"  group="TM1637数码管"
      //% weight=80 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      clear() {
          for (let i = 0; i < this.count; i++) {
              this._dat(i, 0)
              this.buf[i] = 0
          }
      }

      //% blockId="TM1637_on" block="%tm打开显示"  group="TM1637数码管"
      //% weight=86 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      on() {
          this._ON = 8
          this._write_data_cmd()
          this._write_dsp_ctrl()
      }

      //% blockId="TM1637_off" block="%tm关闭显示"  group="TM1637数码管"
      //% weight=85 blockGap=8
      //% parts="TM1637"
      //% subcategory="输出模块"
      off() {
          this._ON = 0
          this._write_data_cmd()
          this._write_dsp_ctrl()
      }
  }

  //% weight=99 
  //% blockId="TM1637_create" block="TM1637初始化CLK引脚%clk DIO引脚%dio亮度%intensityLED数量(1到4)%count"  group="TM1637数码管"
  //% inlineInputMode=inline
  //% subcategory="输出模块"
  //% intensity.max=8 intensity.min=0
  //% bit.max=4 bit.min=1
  export function TMcreate(clk: DigitalPin, dio: DigitalPin, intensity: number, count: number): TM1637LEDs {
      let tm = new TM1637LEDs()
      tm.clk = clk
      tm.dio = dio
      if ((count < 1) || (count > 5)) count = 4
      tm.count = count
      tm.brightness = intensity
      tm.init()
      return tm
  }

  let COMMAND_I2C_ADDRESS = 0x24
  let DISPLAY_I2C_ADDRESS = 0x34
  let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71]

  let _intensity = 3
  let dbuf = [0, 0, 0, 0]

  function cmd(c: number) {
      pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, c, NumberFormat.Int8BE)
  }

  function dat(bit: number, d: number) {
      pins.i2cWriteNumber(DISPLAY_I2C_ADDRESS + (bit % 4), d, NumberFormat.Int8BE)
  }

  //% blockId="TM650_Control" block="%option显示" group="TM1650数码管"
  //% weight=40 blockGap=8
  //% subcategory="输出模块"
  export function TM650_Control(option: Select) {
      if (option == 0) {
          cmd(_intensity * 16 + 1)
      }
      if (option == 1) {
          _intensity = 0
          cmd(0)
      }
      if (option == 2) {
          dat(0, 0)
          dat(1, 0)
          dat(2, 0)
          dat(3, 0)
          dbuf = [0, 0, 0, 0]
      }
  }

  //% blockId="TM650_DIGIT" block="第%bit位显示数据%num"  group="TM1650数码管"
  //% weight=80 blockGap=8
  //% num.max=15 num.min=0
  //% subcategory="输出模块"
  //% bit.max=3 bit.min=0
  export function digit(num: number, bit: number) {
      dbuf[bit % 4] = _SEG[num % 16]
      dat(bit, _SEG[num % 16])
  }

  //% blockId="TM650_SHOW_NUMBER" block="显示数据%num"  group="TM1650数码管"
  //% weight=100 blockGap=8
  //% subcategory="输出模块"
  export function showNumber(num: number) {
      if (num < 0) {
          dat(0, 0x40) // '-'
          num = -num
      }
      else
          digit(Math.idiv(num, 1000) % 10, 0)
      digit(num % 10, 3)
      digit(Math.idiv(num, 10) % 10, 2)
      digit(Math.idiv(num, 100) % 10, 1)
  }

  //% blockId="TM650_SHOW_HEX_NUMBER" block="显示十六进制数据%num"  group="TM1650数码管"
  //% weight=90 blockGap=8
  //% subcategory="输出模块"
  export function showHex(num: number) {
      if (num < 0) {
          dat(0, 0x40) // '-'
          num = -num
      }
      else
          digit((num >> 12) % 16, 0)
      digit(num % 16, 3)
      digit((num >> 4) % 16, 2)
      digit((num >> 8) % 16, 1)
  }

  //% blockId="TM650_SHOW_DP" block="设置点 %bit|show %status" group="TM1650数码管"
  //% weight=80 blockGap=8
  //% subcategory="输出模块"
  //% bit.max=3 bit.min=0
  export function showDpAt(status: ledon_off, bit: number) {
      let show = status == 1 ? true : false;
      if (show) dat(bit, dbuf[bit % 4] | 0x80)
      else dat(bit, dbuf[bit % 4] & 0x7F)
  }

  //% blockId="TM650_INTENSITY" block="设置亮度 %dat" group="TM1650数码管"
  //% weight=70 blockGap=8
  //% subcategory="输出模块"
  //% dat.max=7 dat.min=0
  export function setIntensity(dat: number) {
      if ((dat < 0) || (dat > 8)) {
          return
      }
      if (dat == 0) {
          _intensity = 0
          cmd(0)
      }
      else {
          _intensity = dat
          cmd((dat << 4) | 0x01)
      }
  }

  //% blockId=touchbutton block="引脚%pin检测到触摸？"   group="触摸按键"
  //% weight=70
  //% subcategory="基础输入模块"
  export function touchButton(pin: DigitalPin): boolean {
     // pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return true;
      } else {
          return false;
      }
  }

  //% blockId=button block="引脚%pin检测到按键被按下？"   group="按键开关"
  //% weight=70
  //% subcategory="基础输入模块"
  export function Button(pin: DigitalPin): boolean {
   //   pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  //% blockId=crashbutton block="引脚%pin检测到碰撞？"   group="碰撞开关"
  //% weight=70
  //% subcategory="基础输入模块"
  export function crashButton(pin: DigitalPin): boolean {
     // pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  //% blockId=slideRheostat block="引脚%pin获取滑动变阻器的模拟值"   group="滑动变阻器"
  //% weight=70
  //% subcategory="基础输入模块"
  export function slideRheostat(pin: AnalogPin): number {
      let row = pins.analogReadPin(pin)
      return row
  }

  //% blockId=rotaryPotentiometer block="引脚%pin获取旋转电位器的模拟值" group="旋转电位器"
  //% weight=70
  //% subcategory="基础输入模块"
  export function rotaryPotentiometer(pin: AnalogPin): number {
      let row = pins.analogReadPin(pin)
      return row
  }

  let Xpin = 0
  let Ypin = 0
  let Bpin = 0

  //% blockId=rockerPin block="摇杆初始化引脚X%pinx引脚Y%piny引脚B%pinb" group="摇杆模块"
  //% weight=70
  //% subcategory="基础输入模块"
  export function rockerPin(pinx: AnalogPin, piny: AnalogPin, pinb: DigitalPin): void {
      Xpin = pinx
      Ypin = piny
      Bpin = pinb
  }

  //% blockId=_analogRead block=" %selectpin获取模拟值" group="摇杆模块"
  //% weight=69
  //% subcategory="基础输入模块"
  export function _analogRead(selectpin: _rockerpin): number {
      let a
      if (selectpin == 0)
          a = Xpin
      else if (selectpin == 1)
          a = Ypin
      return pins.analogReadPin(a)
  }

  //% blockId=_digitalRead block="摇杆模块按键被按下？" group="摇杆模块"
  //% weight=68
  //% subcategory="基础输入模块"
  export function _digitalRead(): boolean {
     // pins.digitalWritePin(Bpin, 0)
      if (pins.digitalReadPin(Bpin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  let _DIO = 0
  let _CLK = 0

  //% blockId=basic_piano_pin block="钢琴模块初始化引脚 DIO %DIO CLK %CLK"   group="钢琴模块"
  //% weight=70
  //% subcategory="基础输入模块"
  export function basic_piano_pin(DIO: DigitalPin, CLK: DigitalPin): void {

      _DIO = DIO
      _CLK = CLK
  }

  //% blockId=basic_piano_play block="弹奏钢琴"   group="钢琴模块"
  //% weight=69
  //% subcategory="基础输入模块"
  export function basic_piano_play(): void {

      if (0 == pins.digitalReadPin(_DIO)) {
          let list: number[] = []
          for (let index = 0; index <= 15; index++) {
              for (let index2 = 0; index2 < 4; index2++) {
                  pins.digitalWritePin(_CLK, 0)
              }
              for (let index2 = 0; index2 < 4; index2++) {
                  pins.digitalWritePin(_CLK, 1)
              }
              list[index] = pins.digitalReadPin(_DIO)
          }
          if (!(list[0])) {
              music.playTone(262, music.beat(BeatFraction.Half))
          } else if (!(list[1])) {
              music.playTone(294, music.beat(BeatFraction.Half))
          } else if (!(list[2])) {
              music.playTone(330, music.beat(BeatFraction.Half))
          } else if (!(list[3])) {
              music.playTone(349, music.beat(BeatFraction.Half))
          } else if (!(list[4])) {
              music.playTone(392, music.beat(BeatFraction.Half))
          } else if (!(list[5])) {
              music.playTone(440, music.beat(BeatFraction.Half))
          } else if (!(list[6])) {
              music.playTone(494, music.beat(BeatFraction.Half))
          } else if (!(list[7])) {
              music.playTone(523, music.beat(BeatFraction.Half))
          }
      }
  }

  //% blockId=sensor_temperature block="引脚%pin获取环境温度"  group="LM35温度传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_temperature(pin: AnalogPin): number {
      let temp = (pins.analogReadPin(pin) / 1023) * 3.3 * 100;
      return temp

  }

  //% blockId=sensor_flame block="引脚%pin检测到火焰？" group="火焰传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_flame(pin: DigitalPin): boolean {
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  //% blockId=sensor_flame_analog block="引脚%pin读取火焰的模拟值" group="火焰传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_flame_analog(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  //% blockId=sensor_infraredTracking block="引脚%pin检测到黑线？" group="红外寻迹传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_infraredTracking(pin: DigitalPin): boolean {
      if (pins.digitalReadPin(pin) == 0) {
          return true;
      } else {
          return false;
      }
  }

  //% blockId=sensor_incline block="引脚%pin检测到倾斜？" group="倾斜传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_incline(pin: DigitalPin): boolean {
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }

  }

  /**
   * 光敏传感器
   */

  //% blockId=sensor_illumination block="引脚%pin获取光照强度模拟值" group="光敏传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_illumination(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 热敏传感器
   */

  //% blockId=sensor_thermosensitive block="引脚%pin获取热度模拟值" group="热敏传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_thermosensitive(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 水位传感器
   */

  //% blockId=sensor_waterLevel block="引脚%pin获取水位模拟值" group="水位传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_waterLevel(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 土壤湿度传感器
   */

  //% blockId=sensor_soilMoisture block="引脚%pin获取湿度模拟值"  group="土壤湿度传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_soilMoisture(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 避障传感器
   */

  //% blockId=sensor_obstacleAvoid block="引脚%pin检测到前方有障碍物？" group="避障传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_obstacleAvoid(pin: DigitalPin): boolean {
     // pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
      // return pins.digitalReadPin(pin)   
  }

  /**
   * 磁簧开关传感器
   */

  //% blockId=sensor_reedSwitch block="引脚%pin检测到磁场？" group="磁簧开关传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_reedSwitch(pin: DigitalPin): boolean {
     // pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  /**
   * 人体热释电传感器
   */

  //% blockId=sensor_humanBody block="引脚%pin检测到人体热源？" group="人体热释电传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_humanBody(pin: DigitalPin): boolean {
   //   pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return true;
      } else {
          return false;
      }
  }

  /**
   * 震动传感器
   */

  //% blockId=sensor_quake block="引脚%pin检测到震动？" group="震动传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_quake(pin: DigitalPin): boolean {
   //   pins.digitalWritePin(pin, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  /**
   * 震动传感器
   */

  //% blockId=sensor_quake_analog block="引脚%pin获取震动模拟值" group="震动传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_quake_analog(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 灰度传感器
   */

  //% blockId=sensor_grayLevel block="引脚%pin获取颜色模拟值" group="灰度传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_grayLevel(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  /**
   * 声音传感器
   */
  //% blockId=sensor_sound_analogread  block="引脚%pin获取声音的模拟值" group="声音传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_sound_analogread(pin: AnalogPin): number {
      return pins.analogReadPin(pin)

  }

  //% blockId=sensor_sound_digitalread  block="引脚%pin检测到声音？" group="声音传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_sound_digitalread(pin: DigitalPin): boolean {
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  /**
   * 雨滴传感器
   */
  //% blockId=sensor_rain_analogread  block="引脚%pin获取雨滴的模拟值"  group="雨滴传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_rain_analogread(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  //% blockId=sensor_rain_digitalread  block="引脚%pin雨滴传感器检测到雨滴?"   group="雨滴传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_rain_digitalread(pin: DigitalPin): boolean {
    //  pins.digitalWritePin(_DR, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return false;
      } else {
          return true;
      }
  }

  /**
   * 气体传感器
   */
  //% blockId=sensor_gas_analogread  block="引脚%pin获取到气体的模拟值"  group="气体传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_gas_analogread(pin: AnalogPin): number {
      return pins.analogReadPin(pin)
  }

  //% blockId=sensor_gas_digitalread  block="引脚%pin检测到气体？"  group="气体传感器"
  //% weight=70
  //% inlineInputMode=inline
  //% subcategory="传感器"
  export function sensor_gas_digitalread(pin: DigitalPin): boolean {
    //  pins.digitalWritePin(_DG, 0)
      if (pins.digitalReadPin(pin) == 1) {
          return true;
      } else {
          return false;
      }
  }

  //% blockId="readdht11" block="引脚 %dht11pin 获取温湿度传感器的 %dht11type"  group="温湿度传感器"
  //% subcategory="传感器"
  //% inlineInputMode=inline
  export function dht11value(dht11pin: DigitalPin, dht11type: DHT11Type): number {
      pins.digitalWritePin(dht11pin, 0)
      basic.pause(18)
      let i = pins.digitalReadPin(dht11pin)
      pins.setPull(dht11pin, PinPullMode.PullUp);
      switch (dht11type) {
          case 0:
              let dhtvalue1 = 0;
              let dhtcounter1 = 0;
              while (pins.digitalReadPin(dht11pin) == 1);
              while (pins.digitalReadPin(dht11pin) == 0);
              while (pins.digitalReadPin(dht11pin) == 1);
              for (let i = 0; i <= 32 - 1; i++) {
                  while (pins.digitalReadPin(dht11pin) == 0);
                  dhtcounter1 = 0
                  while (pins.digitalReadPin(dht11pin) == 1) {
                      dhtcounter1 += 1;
                  }
                  if (i > 15) {
                      if (dhtcounter1 > 2) {
                          dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                      }
                  }
              }
              return ((dhtvalue1 & 0x0000ff00) >> 8);
              break;

          case 1:
              while (pins.digitalReadPin(dht11pin) == 1);
              while (pins.digitalReadPin(dht11pin) == 0);
              while (pins.digitalReadPin(dht11pin) == 1);

              let value = 0;
              let counter = 0;

              for (let i = 0; i <= 8 - 1; i++) {
                  while (pins.digitalReadPin(dht11pin) == 0);
                  counter = 0
                  while (pins.digitalReadPin(dht11pin) == 1) {
                      counter += 1;
                  }
                  if (counter > 3) {
                      value = value + (1 << (7 - i));
                  }
              }
              return value;
          default:
              return 0;
      }
  }


/**
   * 循迹传感器
   */
  //% blockId=sensor_tracking block="引脚 %pin 检测到黑线？"  group="循迹传感器"
  //% weight=74
  //% subcategory="传感器"
  //% inlineInputMode=inline
  export function sensor_tracking(pin: DigitalPin): boolean {
      //pins.digitalWritePin(pin, 0)
         if (pins.digitalReadPin(pin) == 1) {
            return false;
        }else {
            return true;
        }
    }
    
    let outPin1 = 0;
    let outPin2 = 0;
    let outPin3 = 0;
    let outPin4 = 0;
    /**
     * 四路循迹传感器初始化
     */
    //% blockId=four_sensor_tracking block="四路循迹初始化引脚OUT0|%pin1|引脚OUT1|%pin2|引脚OUT2|%pin3|引脚OUT3|%pin4"  group="循迹传感器"
    //% inlineInputMode=inline
    //% weight=73
    //% subcategory="传感器"
    export function four_sensor_tracking(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, pin4: DigitalPin): void {
      outPin1 = pin1;
      outPin2 = pin2;
      outPin3 = pin3;
      outPin4 = pin4;
    }
    
    //% blockId=four_sensor_trackingValue block="四路循迹传感器获取的值"  group="循迹传感器"
    //% inlineInputMode=inline
    //% weight=72
    //% subcategory="传感器"
    export function four_sensor_trackingValue(): number {
      let result = 0;
//         pins.digitalWritePin(outPin1, 0)
//         pins.digitalWritePin(outPin2, 0)
//         pins.digitalWritePin(outPin3, 0)
//         pins.digitalWritePin(outPin4, 0)
      if (pins.digitalReadPin(outPin1) == 1) {
        result = 1 | result;
      }else {
        result = 0 | result;
      }
      if (pins.digitalReadPin(outPin2) == 1) {
        result = 2 | result;
      }else {
        result = 0 | result;
      }
      if (pins.digitalReadPin(outPin3) == 1) {
        result = 4 | result;
      }else {
        result = 0 | result;
      }
       if (pins.digitalReadPin(outPin4) == 1) {
        result = 8 | result;
      }else {
        result = 0 | result;
      }
      return result;
    }

          //% blockId="dht11value_v2" block="引脚 %dht11pin 获取温湿度传感器的 %dht11type"  group="温湿度传感器"
  //% subcategory="micro:bit(V2)"
  //% inlineInputMode=inline
  export function dht11value_v2(dht11pin: DigitalPin, dht11type: DHT11Type): number {
      pins.digitalWritePin(dht11pin, 0)
      basic.pause(18)
      let i = pins.digitalReadPin(dht11pin)
      pins.setPull(dht11pin, PinPullMode.PullUp);
      switch (dht11type) {
          case 0:
              let dhtvalue1 = 0;
              let dhtcounter1 = 0;
              while (pins.digitalReadPin(dht11pin) == 1);
              while (pins.digitalReadPin(dht11pin) == 0);
              while (pins.digitalReadPin(dht11pin) == 1);
              for (let i = 0; i <= 32 - 1; i++) {
                  while (pins.digitalReadPin(dht11pin) == 0);
                  dhtcounter1 = 0
                  while (pins.digitalReadPin(dht11pin) == 1) {
                      dhtcounter1 += 1;
                  }
                  if (i > 15) {
                      if (dhtcounter1 > 10) {
                          dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                      }
                  }
              }
              return ((dhtvalue1 & 0x0000ffff)>> 8);
              break;

          case 1:
              while (pins.digitalReadPin(dht11pin) == 1);
              while (pins.digitalReadPin(dht11pin) == 0);
              while (pins.digitalReadPin(dht11pin) == 1);

              let value = 0;
              let counter = 0;

              for (let i = 0; i <= 8 - 1; i++) {
                  while (pins.digitalReadPin(dht11pin) == 0);
                  counter = 0
                  while (pins.digitalReadPin(dht11pin) == 1) {
                      counter += 1;
                  }
                  if (counter > 10) {
                      value = value + (1 << (7 - i));
                  }
              }
              return value;
          default:
              return 0;
      }
  }



}

//% color="#794044" weight=10 icon="\uf108" block="8X8点阵屏"
//% category="8X8点阵屏"
namespace max7219{     
  /**
   * MAX7219  
   */
const _NOOP = 0 // no-op (do nothing, doesn't change current status)
const _DIGIT = [1, 2, 3, 4, 5, 6, 7, 8] // digit (LED column)
const _DECODEMODE = 9 // decode mode (1=on, 0-off  for 7-segment display on MAX7219, no usage here)
const _INTENSITY = 10 // intensity (LED brightness level, 0-15)
const _SCANLIMIT = 11 // scan limit (number of scanned digits)
const _SHUTDOWN = 12 // turn on (1) or off (0)
const _DISPLAYTEST = 15 // force all LEDs light up, no usage here

let _pinCS = DigitalPin.P16 // LOAD pin, 0=ready to receive command, 1=command take effect
let _matrixNum = 1 // number of MAX7219 matrix linked in the chain
let _displayArray: number[] = [] // display array to show accross all matrixs
let _rotation = 0 // rotate matrixs display for 4-in-1 modules
let _reversed = false // reverse matrixs display order for 4-in-1 modules

/**
  * Setup/reset MAX7219s. If you are using 4-in-1 module you'll need to set rotation as true. If your chain are consisted of single modules set it as false (default).
  */
  //% block="初始化MAX7219:|矩阵数 $num|CS(LOAD)引脚 = $cs |MOSI(DIN)引脚 = $mosi |SCK(CLK)引脚 = $sck"
  //% num.min=1 num.defl=1 cs.defl=DigitalPin.P16 mosi.defl=DigitalPin.P15  sck.defl=DigitalPin.P13 rotate.defl=false group="8X8点阵屏"
  //% weight=99
  export function setup(num: number, cs: DigitalPin, mosi: DigitalPin, sck: DigitalPin) {
      // set internal variables        
      _pinCS = cs
      _matrixNum = num
      // prepare display array (for displaying texts  add extra 8 columns at each side as buffers)
      for (let i = 0; i < (num + 2) * 8; i++)  _displayArray.push(0)
      // set micro:bit SPI
      pins.spiPins(mosi, DigitalPin.P14, sck)
      pins.spiFormat(8, 3)
      pins.spiFrequency(1000000)
      // initialize MAX7219s
      _registerAll(_SHUTDOWN, 0) // turn off
      _registerAll(_DISPLAYTEST, 0) // test mode off
      _registerAll(_DECODEMODE, 0) // decode mode off
      _registerAll(_SCANLIMIT, 7) // set scan limit to 7 (column 0-7)
      _registerAll(_INTENSITY, 15) // set brightness to 15
      _registerAll(_SHUTDOWN, 1) // turn on
      clearAll() // clear screen on all MAX7219s
  }

  /**
  * Rotation/reverse order options for 4-in-1 MAX7219 modules
  */
  //% block="旋转显示 $rotation|反转显示顺序 $reversed" rotation.defl=rotation_direction.none group="8X8点阵屏"  advanced=true
//% weight=98
  export function for_4_in_1_modules(rotation: rotation_direction, reversed: boolean) {
      _rotation = rotation
      _reversed = reversed
  }

  /**
  * (internal function) write command and data to all MAX7219s
  */
  function _registerAll(addressCode: number, data: number) {
      pins.digitalWritePin(_pinCS, 0) // LOAD=LOW, start to receive commands
      for (let i = 0; i < _matrixNum; i++) {
          // when a MAX7219 received a new command/data set
          // the previous one would be pushed to the next matrix along the chain via DOUT
          pins.spiWrite(addressCode) // command (8 bits)
          pins.spiWrite(data) //data (8 bits)
      }
      pins.digitalWritePin(_pinCS, 1) // LOAD=HIGH, commands take effect
  }

  /**
  * (internal function) write command and data to a specific MAX7219 (index 0=farthest on the chain)
  */
  function _registerForOne(addressCode: number, data: number, matrixIndex: number) {
      if (matrixIndex <= _matrixNum - 1) {
          pins.digitalWritePin(_pinCS, 0) // LOAD=LOW, start to receive commands
          for (let i = 0; i < _matrixNum; i++) {
              // when a MAX7219 received a new command/data set
              // the previous one would be pushed to the next matrix along the chain via DOUT
              if (i == matrixIndex) { // send change to target
                  pins.spiWrite(addressCode) // command (8 bits)
                  pins.spiWrite(data) //data (8 bits)
              } else { // do nothing to non-targets
                  pins.spiWrite(_NOOP)
                  pins.spiWrite(0)
              }
          }
          pins.digitalWritePin(_pinCS, 1) // LOAD=HIGH, commands take effect
      }
  }

  /**
  * (internal function) rotate matrix
  */
  function _rotateMatrix(matrix: number[][]): number[][] {
      let tmp = 0
      for (let i = 0; i < 4; i++) {
          for (let j = i; j < 7 - i; j++) {
              tmp = matrix[i][j]
              if (_rotation == rotation_direction.clockwise) { // clockwise
                  matrix[i][j] = matrix[j][7 - i]
                  matrix[j][7 - i] = matrix[7 - i][7 - j]
                  matrix[7 - i][7 - j] = matrix[7 - j][i]
                  matrix[7 - j][i] = tmp
              } else if (_rotation == rotation_direction.counterclockwise) { // counter-clockwise
                  matrix[i][j] = matrix[7 - j][i]
                  matrix[7 - j][i] = matrix[7 - i][7 - j]
                  matrix[7 - i][7 - j] = matrix[j][7 - i]
                  matrix[j][7 - i] = tmp
              } else if (_rotation == rotation_direction.one_eighty_degree) { // 180 degree
                  matrix[i][j] = matrix[7 - i][7 - j]
                  matrix[7 - i][7 - j] = tmp
                  tmp = matrix[7 - j][i]
                  matrix[7 - j][i] = matrix[j][7 - i]
                  matrix[j][7 - i] = tmp
              }
          }
      }
      return matrix
  }

  /**
  * (internal function) get 8x8 matrix from a column array
  */
  function _getMatrixFromColumns(columns: number[]): number[][] {
      let matrix: number[][] = getEmptyMatrix()
      for (let i = 0 ; i < 8 ; i++) {
          for (let j = 7; j >= 0;j--) {
              if (columns[i] >= 2 ** j) {
                  columns[i] -= 2 ** j
                  matrix[i][j] = 1
              } else if (columns[i] == 0) {
                  break
              }
          }
      }
      return matrix
  }

  /**
  * Scroll a text accross all MAX7219 matrixs for once
  */
  //% block="滚动显示字符 $text| 延迟(ms) $delay| 最后停留时间 (ms) $endDelay" text.defl="Hello world!" delay.min=0 delay.defl=75 endDelay.min=0 endDelay.defl=500 group="8X8点阵屏" 
  //% weight=97
export function scrollText(text: string, delay: number, endDelay: number) {
      let printPosition = _displayArray.length - 8
      let characters_index: number[] = []
      let currentChrIndex = 0
      let currentFontArray: number[] = []
      let nextChrCountdown = 1
      let chrCountdown: number[] = []
      let totalScrollTime = 0
      // clear screen and array
      for (let i = 0; i < _displayArray.length;  i++) _displayArray[i] = 0
      clearAll()
      // get font index of every characters and total scroll time needed
      for (let i = 0; i < text.length; i++) {
          let index = font.indexOf(text.substr(i, 1))
          if (index >= 0) {
              characters_index.push(index)
              chrCountdown.push(font_matrix[index].length)
              totalScrollTime += font_matrix[index].length
          }
      }
      totalScrollTime += _matrixNum * 8
      // print characters into array and scroll the array
      for (let i = 0; i < totalScrollTime; i++) {
          nextChrCountdown -= 1
          if (currentChrIndex < characters_index.length && nextChrCountdown == 0) {
              // print a character just "outside" visible area
              currentFontArray = font_matrix[characters_index[currentChrIndex]]
              if (currentFontArray != null)
                  for (let j = 0; j < currentFontArray.length; j++)
                      _displayArray[printPosition + j] = currentFontArray[j]
              // wait until current character scrolled into visible area
              nextChrCountdown = chrCountdown[currentChrIndex]
              currentChrIndex += 1
          }
          // scroll array (copy all columns to the one before it)
          for (let j = 0; j < _displayArray.length - 1;  j++) {
              _displayArray[j] = _displayArray[j + 1]
          }
          _displayArray[_displayArray.length - 1] = 0
          // write every 8 columns of display array (visible area) to each MAX7219s
          let matrixCountdown = _matrixNum - 1
          let actualMatrixIndex = 0
          for (let j = 8; j < _displayArray.length - 8; j += 8) {
              if (matrixCountdown < 0) break
              if (!_reversed) actualMatrixIndex = matrixCountdown
              else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
              if (_rotation == rotation_direction.none) {
                  for (let k = j; k < j + 8; k++)
                      _registerForOne(_DIGIT[k - j], _displayArray[k], actualMatrixIndex)
              } else { // rotate matrix if needed
                  let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
                  let l = 0
                  for (let k = j; k <j + 8; k++) tmpColumns[l++] = _displayArray[k]
                  displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
              }
              matrixCountdown--
          }
          basic.pause(delay)
      }
      basic.pause(endDelay)
  }

  /**
  * Print a text accross the chain of MAX7219 matrixs at a specific spot. Offset value -8 ~ last column of matrixs. You can choose to clear the screen or not (if not it can be used to print multiple string on the MAX7219 chain).
  */
  //% block="显示字符串 $text|偏移 $offset|显示前清空屏幕 $clear" text.defl="Hi!" offset.min=-8 clear.defl=true group="8X8点阵屏"  advanced=true
//% weight=95
  export function displayText(text: string, offset: number, clear: boolean) {
      // clear screen and array if needed
      if (clear) {
          for (let i = 0; i < _displayArray.length; i++) _displayArray[i] = 0
          clearAll()
      }
      let printPosition = Math.constrain(offset, -8, _displayArray.length - 9) + 8
      let currentPosition = printPosition
      let characters_index: number[] = []
      let currentChrIndex = 0
      let currentFontArray: number[] = []
      // get font index of every characters
      for (let i = 0; i < text.length; i++) {
          let index = font.indexOf(text.substr(i, 1))
          if (index >= 0) characters_index.push(index)
      }
      // print characters into array from offset position
      while (currentPosition < _displayArray.length - 8) {
          currentFontArray = font_matrix[characters_index[currentChrIndex]]
          if (currentFontArray != null)
              for (let j = 0; j < currentFontArray.length; j++)
                  _displayArray[printPosition++] = currentFontArray[j]
          currentChrIndex += 1
          if (currentChrIndex == characters_index.length) break
      }
      // write every 8 columns of display array (visible area) to each MAX7219s
      let matrixCountdown = _matrixNum - 1
      let actualMatrixIndex = 0
      for (let i = 8; i < _displayArray.length - 8; i += 8) {
          if (matrixCountdown < 0) break
          if (!_reversed) actualMatrixIndex = matrixCountdown
          else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
          if (_rotation == rotation_direction.none) {
              for (let j = i ; j < i + 8 ; j++)
                  _registerForOne(_DIGIT[j - i], _displayArray[j], actualMatrixIndex)
          } else { // rotate matrix and reverse order if needed
              let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
              let l = 0
              for (let j = i ; j < i + 8 ; j++)  tmpColumns[l++] = _displayArray[j]
              displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
          }
          matrixCountdown--
      }
  }

  /**
  * Print a custom character from a number array on the chain of MAX7219 matrixs at a specific spot. Each number in the array is 0-255, the decimal version of column's byte number. Offset value -8 ~ last column of matrixs. You can choose to clear the screen or not (if not it can be used to print multiple string on the MAX7219 chain).
  */
  //% block="从数字数组 $customCharArray|显示自定义字符，偏移 $offset|显示前清空屏幕 $clear" offset.min=-8 clear.defl=true group="8X8点阵屏"  advanced=true
  //% weight=94
export function displayCustomCharacter(customCharArray: number[], offset: number, clear: boolean) {
      // clear screen and array if needed
      if (clear) {
          for (let i = 0; i < _displayArray.length;i++) _displayArray[i] = 0
          clearAll()
      }
      let printPosition: number = Math.constrain(offset, -8, _displayArray.length - 9) + 8
      if (customCharArray != null) {
          // print column data to display array
          for (let i = 0; i < customCharArray.length; i++)
              _displayArray[printPosition + i] = customCharArray[i]
          // write every 8 columns of display array (visible area) to each MAX7219s
          let matrixCountdown = _matrixNum - 1
          let actualMatrixIndex = 0
          for (let i = 8; i < _displayArray.length - 8; i += 8) {
              if (matrixCountdown < 0) break
              if (!_reversed) actualMatrixIndex = matrixCountdown
              else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
              if (_rotation == rotation_direction.none) {
                  for (let j = i ; j < i + 8 ; j++)
                      _registerForOne(_DIGIT[j - i], _displayArray[j], actualMatrixIndex)
              } else { // rotate matrix and reverse order if needed
                  let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
                  let l = 0
                  for (let j = i ; j < i + 8 ; j++) tmpColumns[l++] = _displayArray[j]
                  displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
              }
              matrixCountdown--
          }
      }
  }

  /**
  * Return a number array calculated from a 8x8 LED byte array (example: B00100000,B01000000,B10000110,B10000000,B10000000,B10000110,B01000000,B00100000)
  */
  //% block="把字节数组字符串 $text| 转化为自定义字符的数字数组" text.defl="B00100000,B01000000,B10000110,B10000000,B10000000,B10000110,B01000000,B00100000" group="8X8点阵屏"  advanced=true
  //% weight=92
export function getCustomCharacterArray(text: string) {
      let tempTextArray: string[] = []
      let resultNumberArray: number[] = []
      let currentIndex = 0
      let currentChr = ""
      let currentNum = 0
      let columnNum = 0
      if (text != null && text.length >= 0) {
          // seperate each byte number to a string
          while (currentIndex < text.length) {
              tempTextArray.push(text.substr(currentIndex + 1, 8))
              currentIndex += 10
          }
          for (let i = 0; i < tempTextArray.length; i++) {
              columnNum = 0
              // read each bit and calculate the decimal sum
              for (let j = tempTextArray[i].length - 1; j >= 0; j--) {
                  currentChr = tempTextArray[i].substr(j, 1)
                  if (currentChr == "1" || currentChr == "0")
                      currentNum = parseInt(currentChr)
                  else
                      currentNum = 0
                  columnNum += (2 ** (tempTextArray[i].length - j - 1)) * currentNum
              }
              // generate new decimal array
              resultNumberArray.push(columnNum)
          }
          return resultNumberArray
      } else {
          return null
      }
  }

  /**
  * Add a custom character from a number array at the end of the extension's font library.
  * Each number in the array is 0-255, the decimal version of column's byte number.
  */
  //% block="在扩展字体库中添加自定义字符 $chr|对应的数字数组是$customCharArray"
  //% chr.defl=""
  //% 
  //% group="8X8点阵屏"
  //% advanced=true
  export function addCustomChr(chr: string, customCharArray: number[]) {
      if (chr != null && chr.length == 1 && customCharArray != null) {
          // add new character
          font.push(chr)
          font_matrix.push(customCharArray)
      }
  }

  /**
  * Display all fonts in the extension font library
  */
  //% block="以延迟 $delay| 速度显示所有字符" delay.min=0 delay.defl=200 group="8X8点阵屏" advanced=true
  export function fontDemo(delay: number) {
      let offsetIndex = 0
      clearAll()
      // print all characters on all matrixs
      for (let i = 1; i < font_matrix.length; i++) {
          // print two blank spaces to "reset" a matrix
          displayCustomCharacter(font_matrix[0], offsetIndex * 8, false)
          displayCustomCharacter(font_matrix[0], offsetIndex * 8 + 4, false)
          // print a character
          displayCustomCharacter(font_matrix[i], offsetIndex * 8, false)
          if (offsetIndex == _matrixNum - 1) offsetIndex = 0
          else offsetIndex += 1
          basic.pause(delay)
      }
      basic.pause(delay)
      clearAll()
  }

  /**
  * Turn on or off all MAX7219s
  */
  //% block="打开所有8X8点阵屏 $status" status.defl=true group="8X8点阵屏" advanced=true
  export function togglePower(status: boolean) {
      if (status) _registerAll(_SHUTDOWN, 1)
      else _registerAll(_SHUTDOWN, 0)
  }

  /**
  * Set brightness level of LEDs on all MAX7219s
  */
  //% block="设置所有8X8点阵屏的亮度 $level" level.min=0 level.max=15 level.defl=15 group="8X8点阵屏"
  export function brightnessAll(level: number) {
      _registerAll(_INTENSITY, level)
  }

  /**
  * Set brightness level of LEDs on a specific MAX7219s (index 0=farthest on the chain)
  */
  //% block="将索引号为 $index| 的8X8点阵屏的亮度设置为 $level " level.min=0 level.max=15 level.defl=15 index.min=0 group="8X8点阵屏" advanced=true
  export function brightnessForOne(level: number, index: number) {
      _registerForOne(_INTENSITY, level, index)
  }

  /**
  * Turn on all LEDs on all MAX7219s
  */
  //% block="点亮全部8X8点阵屏" group="8X8点阵屏"
//% weight=90
  export function fillAll() {
      for (let i = 0; i < 8; i++) _registerAll(_DIGIT[i], 255)
  }

  /**
  * Turn on LEDs on a specific MAX7219
  */
  //% block="点亮索引号为 $index| 的8X8点阵屏" index.min=0 group="8X8点阵屏" advanced=true
  export function fillForOne(index: number) {
      for (let i = 0; i < 8; i++) _registerForOne(_DIGIT[i], 255, index)
  }

  /**
  * Turn off LEDs on all MAX7219s
  */
  //% block="关闭全部8X8点阵屏" group="8X8点阵屏"
//% weight=88
  export function clearAll() {
      for (let i = 0 ; i < 8 ; i++) _registerAll(_DIGIT[i], 0)
  }

  /**
  * Turn off LEDs on a specific MAX7219 (index 0=farthest on the chain)
  */
  //% block="关闭索引号为 $index|的8X8点阵屏" index.min=0 group="8X8点阵屏" advanced=true
  export function clearForOne(index: number) {
      for (let i = 0 ; i < 8 ; i++) _registerForOne(_DIGIT[i], 0, index)
  }

  /**
  * Turn on LEDs randomly on all MAX7219s
  */
  //% block="随机点亮8X8点阵屏" index.min=0 group="8X8点阵屏"
//% weight=85
  export function randomizeAll() {
      for (let i = 0 ; i < 8 ; i++) _registerAll(_DIGIT[i], Math.randomRange(0, 255))
  }

  /**
  * Turn on LEDs randomly on a specific MAX7219 (index 0=farthest on the chain)
  */
  //% block="随机点亮索引号为 $index|的8X8点阵屏" index.min=0 group="8X8点阵屏" advanced=true
  export function randomizeForOne(index: number) {
      for (let i = 0 ; i < 8 ; i++) _registerForOne(_DIGIT[i], Math.randomRange(0, 255), index)
  }

  /**
  * Set LEDs of all MAX7219s to a pattern from a 8x8 matrix variable (index 0=farthest on the chain)
  */
  //% block="在所有8X8点阵屏上显示图案 $newMatrix" group="8X8点阵屏" advanced=true
  export function displayLEDsToAll(newMatrix: number[][]) {
      let columnValue = 0
      if (newMatrix != null) {
          if (_rotation != rotation_direction.none) newMatrix = _rotateMatrix(newMatrix) // rotate matrix if needed
          for (let i = 0 ; i < 8 ; i++) {
              if (newMatrix[i] != null) {
                  columnValue = 0
                  for (let j = 0 ; j < 8 ; j++) {
                      if (newMatrix[i][j]) {
                          // combine row 0-7 status into a byte number (0-255)
                          columnValue += 2 ** j
                      }
                  }
                  _registerAll(_DIGIT[i], columnValue)
              }
          }
      }
  }

  /**
  * Set LEDs of a specific MAX7219s to a pattern from a 8x8 number matrix variable (index 0=farthest on the chain)
  */
  //% block="在索引号为 $index| 的8X8点阵屏上显示图案 $newMatrix" index.min=0  group="8X8点阵屏" advanced=true
  export function displayLEDsForOne(newMatrix: number[][], index: number) {
      let columnValue = 0
      if (newMatrix != null) {
          if (_rotation != rotation_direction.none) newMatrix = _rotateMatrix(newMatrix) // rotate matrix if needed
          for (let i = 0 ; i < 8 ; i++) {
              if (newMatrix[i] != null) {
                  columnValue = 0
                  for (let j = 0 ; j < 8 ; j++) {
                      if (newMatrix[i][j]) {
                          // combine row 0-7 status into a byte number (0-255)
                          columnValue += 2 ** j
                      }
                  }
                  _registerForOne(_DIGIT[i], columnValue, index)
              }
          }
      }
  }

  /**
  * Return a empty 8x8 number matrix variable
  */
  //% block="清空8x8点阵屏" group="8X8点阵屏" advanced=true
  export function getEmptyMatrix() {
      return [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
      ]
  }

  /**
  * Return a full 8x8 number matrix variable
  */
  //% block="填满8x8点阵屏" group="8X8点阵屏" advanced=true
  export function getFullMatrix() {
      return [
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
      ]
  }

  /**
  * Return a specific value from a 8x8 number matrix variable
  */
  //% block="从8x8图案 %matrix|获取值，x = $x y = $y" x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
  export function getValueFromMatrix(matrix: number[][], x: number, y: number) {
      return matrix[x][y]
  }

  /**
  * Set a specific value in a 8x8 number matrix variable
  */
  //% block="设置8x8图案 %matrix|x = $x y = $y value to $value" value.min=0 value.max=1 x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
  export function setValueInMatrix(matrix: number[][], x: number, y: number, value: number) {
      matrix[x][y] = value
  }

  /**
  * Toggle (between 0/1) a specific value in a 8x8 number matrix variable
  */
  //% block="切换8x8图案 %matrix|x = $x y = $y" x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
  export function toogleValueInMatrix(matrix: number[][], x: number, y: number) {
      if (matrix[x][y] == 1) matrix[x][y] = 0
      else if (matrix[x][y] == 0) matrix[x][y] = 1
  }


  let font = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")",
      "*", "+", ",", "-", ".", "/",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      ":", " ", "<", "=", ">", "?", "@",
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
      "[", "\\", "]", "_", "`",
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
      "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      "{", "|", "}", "~", "^"]

  let font_matrix = [
      [0b00000000,
          0b00000000,
          0b00000000,
          0b00000000],
      [0b01011111,
          0b00000000],
      [0b00000011,
          0b00000000,
          0b00000011,
          0b00000000],
      [0b00010100,
          0b00111110,
          0b00010100,
          0b00111110,
          0b00010100,
          0b00000000],
      [0b00100100,
          0b01101010,
          0b00101011,
          0b00010010,
          0b00000000],
      [0b01100011,
          0b00010011,
          0b00001000,
          0b01100100,
          0b01100011,
          0b00000000],
      [0b00110110,
          0b01001001,
          0b01010110,
          0b00100000,
          0b01010000,
          0b00000000],
      [0b00000011,
          0b00000000],
      [0b00011100,
          0b00100010,
          0b01000001,
          0b00000000],
      [0b01000001,
          0b00100010,
          0b00011100,
          0b00000000],
      [0b00101000,
          0b00011000,
          0b00001110,
          0b00011000,
          0b00101000,
          0b00000000],
      [0b00001000,
          0b00001000,
          0b00111110,
          0b00001000,
          0b00001000,
          0b00000000],
      [0b10110000,
          0b01110000,
          0b00000000],
      [0b00001000,
          0b00001000,
          0b00001000],
      [0b01100000,
          0b01100000,
          0b00000000],
      [0b01100000,
          0b00011000,
          0b00000110,
          0b00000001,
          0b00000000],
      [0b00111110,
          0b01000001,
          0b01000001,
          0b00111110,
          0b00000000],
      [0b01000010,
          0b01111111,
          0b01000000,
          0b00000000],
      [0b01100010,
          0b01010001,
          0b01001001,
          0b01000110,
          0b00000000],
      [0b00100010,
          0b01000001,
          0b01001001,
          0b00110110,
          0b00000000],
      [0b00011000,
          0b00010100,
          0b00010010,
          0b01111111,
          0b00000000],
      [0b00100111,
          0b01000101,
          0b01000101,
          0b00111001,
          0b00000000],
      [0b00111110,
          0b01001001,
          0b01001001,
          0b00110000,
          0b00000000],
      [0b01100001,
          0b00010001,
          0b00001001,
          0b00000111,
          0b00000000],
      [0b00110110,
          0b01001001,
          0b01001001,
          0b00110110,
          0b00000000],
      [0b00000110,
          0b01001001,
          0b01001001,
          0b00111110,
          0b00000000],
      [0b00010100,
          0b00000000],
      [0b00100000,
          0b00010100,
          0b00000000],
      [0b00001000,
          0b00010100,
          0b00100010,
          0b00000000],
      [0b00010100,
          0b00010100,
          0b00010100,
          0b00000000],
      [0b00100010,
          0b00010100,
          0b00001000,
          0b00000000],
      [0b00000010,
          0b01011001,
          0b00001001,
          0b00000110,
          0b00000000],
      [0b00111110,
          0b01001001,
          0b01010101,
          0b01011101,
          0b00001110,
          0b00000000],
      [0b01111110,
          0b00010001,
          0b00010001,
          0b01111110,
          0b00000000],
      [0b01111111,
          0b01001001,
          0b01001001,
          0b00110110,
          0b00000000],
      [0b00111110,
          0b01000001,
          0b01000001,
          0b00100010,
          0b00000000],
      [0b01111111,
          0b01000001,
          0b01000001,
          0b00111110,
          0b00000000],
      [0b01111111,
          0b01001001,
          0b01001001,
          0b01000001,
          0b00000000],
      [0b01111111,
          0b00001001,
          0b00001001,
          0b00000001,
          0b00000000],
      [0b00111110,
          0b01000001,
          0b01001001,
          0b01111010,
          0b00000000],
      [0b01111111,
          0b00001000,
          0b00001000,
          0b01111111,
          0b00000000],
      [0b01000001,
          0b01111111,
          0b01000001,
          0b00000000],
      [0b00110000,
          0b01000000,
          0b01000001,
          0b00111111,
          0b00000000],
      [0b01111111,
          0b00001000,
          0b00010100,
          0b01100011,
          0b00000000],
      [0b01111111,
          0b01000000,
          0b01000000,
          0b01000000,
          0b00000000],
      [0b01111111,
          0b00000010,
          0b00001100,
          0b00000010,
          0b01111111,
          0b00000000],
      [0b01111111,
          0b00000100,
          0b00001000,
          0b00010000,
          0b01111111,
          0b00000000],
      [0b00111110,
          0b01000001,
          0b01000001,
          0b00111110,
          0b00000000],
      [0b01111111,
          0b00001001,
          0b00001001,
          0b00000110,
          0b00000000],
      [0b00111110,
          0b01000001,
          0b01000001,
          0b10111110,
          0b00000000],
      [0b01111111,
          0b00001001,
          0b00001001,
          0b01110110,
          0b00000000],
      [0b01000110,
          0b01001001,
          0b01001001,
          0b00110010,
          0b00000000],
      [0b00000001,
          0b00000001,
          0b01111111,
          0b00000001,
          0b00000001,
          0b00000000],
      [0b00111111,
          0b01000000,
          0b01000000,
          0b00111111,
          0b00000000],
      [0b00001111,
          0b00110000,
          0b01000000,
          0b00110000,
          0b00001111,
          0b00000000],
      [0b00111111,
          0b01000000,
          0b00111000,
          0b01000000,
          0b00111111,
          0b00000000],
      [0b01100011,
          0b00010100,
          0b00001000,
          0b00010100,
          0b01100011,
          0b00000000],
      [0b00000111,
          0b00001000,
          0b01110000,
          0b00001000,
          0b00000111,
          0b00000000],
      [0b01100001,
          0b01010001,
          0b01001001,
          0b01000111,
          0b00000000],
      [0b01111111,
          0b01000001,
          0b00000000],
      [0b00000001,
          0b00000110,
          0b00011000,
          0b01100000,
          0b00000000],
      [0b01000001,
          0b01111111,
          0b00000000],
      [0b01000000,
          0b01000000,
          0b01000000,
          0b01000000,
          0b00000000],
      [0b00000001,
          0b00000010,
          0b00000000],
      [0b00100000,
          0b01010100,
          0b01010100,
          0b01111000,
          0b00000000],
      [0b01111111,
          0b01000100,
          0b01000100,
          0b00111000,
          0b00000000],
      [0b00111000,
          0b01000100,
          0b01000100,
          0b00101000,
          0b00000000],
      [0b00111000,
          0b01000100,
          0b01000100,
          0b01111111,
          0b00000000],
      [0b00111000,
          0b01010100,
          0b01010100,
          0b00011000,
          0b00000000],
      [0b00000100,
          0b01111110,
          0b00000101,
          0b00000000],
      [0b10011000,
          0b10100100,
          0b10100100,
          0b01111000,
          0b00000000],
      [0b01111111,
          0b00000100,
          0b00000100,
          0b01111000,
          0b00000000],
      [0b01000100,
          0b01111101,
          0b01000000,
          0b00000000],
      [0b01000000,
          0b10000000,
          0b10000100,
          0b01111101,
          0b00000000],
      [0b01111111,
          0b00010000,
          0b00101000,
          0b01000100,
          0b00000000],
      [0b01000001,
          0b01111111,
          0b01000000,
          0b00000000],
      [0b01111100,
          0b00000100,
          0b01111100,
          0b00000100,
          0b01111000,
          0b00000000],
      [0b01111100,
          0b00000100,
          0b00000100,
          0b01111000,
          0b00000000],
      [0b00111000,
          0b01000100,
          0b01000100,
          0b00111000,
          0b00000000],
      [0b11111100,
          0b00100100,
          0b00100100,
          0b00011000,
          0b00000000],
      [0b00011000,
          0b00100100,
          0b00100100,
          0b11111100,
          0b00000000],
      [0b01111100,
          0b00001000,
          0b00000100,
          0b00000100,
          0b00000000],
      [0b01001000,
          0b01010100,
          0b01010100,
          0b00100100,
          0b00000000],
      [0b00000100,
          0b00111111,
          0b01000100,
          0b00000000],
      [0b00111100,
          0b01000000,
          0b01000000,
          0b01111100,
          0b00000000],
      [0b00011100,
          0b00100000,
          0b01000000,
          0b00100000,
          0b00011100,
          0b00000000],
      [0b00111100,
          0b01000000,
          0b00111100,
          0b01000000,
          0b00111100,
          0b00000000],
      [0b01000100,
          0b00101000,
          0b00010000,
          0b00101000,
          0b01000100,
          0b00000000],
      [0b10011100,
          0b10100000,
          0b10100000,
          0b01111100,
          0b00000000],
      [0b01100100,
          0b01010100,
          0b01001100,
          0b00000000],
      [0b00001000,
          0b00110110,
          0b01000001,
          0b00000000],
      [0b01111111,
          0b00000000],
      [0b01000001,
          0b00110110,
          0b00001000,
          0b00000000],
      [0b00001000,
          0b00000100,
          0b00001000,
          0b00000100,
          0b00000000],
      [0b00000010,
          0b00000001,
          0b00000010,
          0b00000000]]

}


