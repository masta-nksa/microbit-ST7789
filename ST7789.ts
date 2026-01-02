/**
 * Colors
 */
enum Color {
   //% block="Black"
   Black = 0x0000,
   //% block="Blue"
   Blue = 0x001F,
   //% block="Cyan"
   Cyan = 0x07FF,
   //% block="DarkCyan"
   DarkCyan = 0x03EF,
   //% block="DarkGreen"
   DarkGreen = 0x03E0,
   //% block="DarkGrey"
   DarkGrey = 0x7BEF,
   //% block="Green"
   Green = 0x07E0,
   //% block="GreenYellow"
   GreenYellow = 0xAFE5,
   //% block="LightGrey"
   LightGrey = 0xC618,
   //% block="Magenta"
   Magenta = 0xF81F,
   //% block="Maroon"
   Maroon = 0x7800,
   //% block="Navy"
   Navy = 0x000F,
   //% block="Olive"
   Olive = 0x7BE0,
   //% block="Orange"
   Orange = 0xFD20,
   //% block="Pink"
   Pink = 0xFE17,
   //% block="Purple"
   Purple = 0x780F,
   //% block="Red"
   Red = 0xF800,
   //% block="White"
   White = 0xFFFF,
   //% block="Yellow"
   Yellow = 0xFFE0
}

/**
  * ST7789 Block
  */
  //% color="#275C6B" icon="\uf26c" weight=95 block="ST7789"
 namespace ST7789 {
     // Display commands & constants
     let TFTWIDTH = 240
     let TFTHEIGHT = 240

     /**
      * TFT Commands
      */
      enum TFTCommands {
          NOP = 0x00,
          SWRESET = 0x01,
          SLPOUT = 0x11,
          NORON = 0x13,
          INVOFF = 0x20,
          INVON = 0x21,
          DISPOFF = 0x28,
          DISPON = 0x29,
          CASET = 0x2A,
          RASET = 0x2B,
          RAMWR = 0x2C,
          MADCTL = 0x36,
          COLMOD = 0x3A,
          FRMCTR1 = 0xB1,
          FRMCTR2 = 0xB2,
          FRMCTR3 = 0xB3,
          INVCTR = 0xB4,
          PWCTR1 = 0xC0,
          PWCTR2 = 0xC1,
          PWCTR3 = 0xC2,
          PWCTR4 = 0xC3,
          PWCTR5 = 0xC4,
          VMCTR1 = 0xC5,
          GMCTRP1 = 0xE0,
          GMCTRN1 = 0xE1,
          DELAY = 0xFFFF,

          ST77XX_MADCTL_MY = 0x80,
          ST77XX_MADCTL_MX = 0x40,
          ST77XX_MADCTL_MV = 0x20,
          ST77XX_MADCTL_ML = 0x10,
          ST77XX_MADCTL_RGB = 0x00,          
      }

      /**
       * Unicode representation
       * The unicode table is split into seven parts because of memory size and array size limitations of the microbit
       */
      let fontOne: number[] = [0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
      0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
      0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422]
      let fontTwo: number[] = [0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422,
      0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x0022d422, 0x00000000, 0x000002e0,
      0x00018060, 0x00afabea, 0x00aed6ea, 0x01991133, 0x010556aa, 0x00000060]
      let fontThree: number[] = [0x000045c0, 0x00003a20, 0x00051140, 0x00023880, 0x00002200, 0x00021080,
      0x00000100, 0x00111110, 0x0007462e, 0x00087e40, 0x000956b9, 0x0005d629, 0x008fa54c, 0x009ad6b7,
      0x008ada88, 0x00119531, 0x00aad6aa, 0x0022b6a2, 0x00000140, 0x00002a00]
      let fontFour: number[] = [0x0008a880, 0x00052940, 0x00022a20, 0x0022d422, 0x00e4d62e, 0x000f14be,
      0x000556bf, 0x0008c62e, 0x0007463f, 0x0008d6bf, 0x000094bf, 0x00cac62e, 0x000f909f, 0x000047f1,
      0x0017c629, 0x0008a89f, 0x0008421f, 0x01f1105f, 0x01f4105f, 0x0007462e]
      let fontFive: number[] = [0x000114bf, 0x000b6526, 0x010514bf, 0x0004d6b2, 0x0010fc21, 0x0007c20f,
      0x00744107, 0x01f4111f, 0x000d909b, 0x00117041, 0x0008ceb9, 0x0008c7e0, 0x01041041, 0x000fc620,
      0x00010440, 0x01084210, 0x00000820, 0x010f4a4c, 0x0004529f, 0x00094a4c]
      let fontSix: number[] = [0x000fd288, 0x000956ae, 0x000097c4, 0x0007d6a2, 0x000c109f, 0x000003a0,
      0x0006c200, 0x0008289f, 0x000841e0, 0x01e1105e, 0x000e085e, 0x00064a4c, 0x0002295e, 0x000f2944,
      0x0001085c, 0x00012a90, 0x010a51e0, 0x010f420e, 0x00644106, 0x01e8221e]
      let fontSeven: number[] = [0x00093192, 0x00222292, 0x00095b52, 0x0008fc80, 0x000003e0, 0x000013f1,
      0x00841080, 0x0022d422];


     /*
      * Send command to display
      */
     function send(command: TFTCommands, parameter: Array<number>, waitMs: number = 0): void {
         // set TFT to command-receive mode
         pins.digitalWritePin(DigitalPin.P1, 0)
         // select TFT controller
         pins.digitalWritePin(DigitalPin.P16, 0)
         // Send command
         pins.spiWrite(command)

         // set TFT back to data-receive mode
         pins.digitalWritePin(DigitalPin.P1, 1)
         for (let item of parameter) {
             pins.spiWrite(item)
         }
         // deselect TFT controller
         pins.digitalWritePin(DigitalPin.P16, 1)
         if (waitMs > 0) {
            control.waitMicros(waitMs)
         }
     }

     /*
      * Set pixel address window - minimum and maximum pixel bounds
      */
     function setWindow(x0: number, y0: number, x1: number, y1: number): void {
         send(TFTCommands.CASET, [0x00, x0, 0x00, x1], 10)
         send(TFTCommands.RASET, [0x00, y0, 0x00, y1], 10)         
     }

     /*
      * Data-Mode to transfer data to TFT for further processing
      */
     function enterDataMode(): void {
         // Activate command mode
         pins.digitalWritePin(DigitalPin.P1, 0)
         // select TFT as SPI-target
         pins.digitalWritePin(DigitalPin.P16, 0)
         pins.spiWrite(TFTCommands.RAMWR)
         // Activate data mode
         pins.digitalWritePin(DigitalPin.P1, 1)
     }

     /*
      * Finish data-mode and set back to command-mode
      */
     function exitDataMode(): void {
         pins.digitalWritePin(DigitalPin.P16, 1) // de-elect the TFT as SPI target
         pins.digitalWritePin(DigitalPin.P1, 0) // command/data = command
         control.waitMicros(10)
     }

     /*
      * Initial TFT setup
      */
     //% block="Initialize TFT Display with width %width and height %height"
     //% width.min=100 width.defl=240
     //% height.min=100 height.defl=240
     //% weight=100

   
// === SPI + Pin-Setup: an deine Verdrahtung anpassen ===
// MOSI = P15, SCK = P13, (MISO ungenutzt)
const __PIN_MOSI = DigitalPin.P15;
const __PIN_MISO = DigitalPin.P14;  // ungenutzt, aber für spiPins erforderlich
const __PIN_SCK  = DigitalPin.P13;

// DC/CS wie verkabelt:
const __PIN_DC   = DigitalPin.P1;
const __PIN_CS   = DigitalPin.P16;

let __spiReady = false;

function __ensureSPI() {
    if (__spiReady) return;
    pins.spiPins(__PIN_MOSI, __PIN_MISO, __PIN_SCK); // MOSI, MISO, SCK
    pins.spiFrequency(8000000);                      // 8 MHz; bei Bedarf 4 MHz probieren
    pins.digitalWritePin(__PIN_CS, 1);               // CS idle high
    pins.digitalWritePin(__PIN_DC, 1);               // DC default data
    __spiReady = true;
}

// --- Hilfsfunktionen analog zu deinen Platzhaltern ---
function pause(ms: number) { basic.pause(ms); }

function cmd(c: number) {          // send command byte
    __ensureSPI();
    pins.digitalWritePin(__PIN_DC, 0);  // Command
    pins.digitalWritePin(__PIN_CS, 0);  // CS low
    pins.spiWrite(c & 0xFF);
    pins.digitalWritePin(__PIN_CS, 1);  // CS high
}

function dat(b: number) {          // send one data byte
    __ensureSPI();
    pins.digitalWritePin(__PIN_DC, 1);  // Data
    pins.digitalWritePin(__PIN_CS, 0);
    pins.spiWrite(b & 0xFF);
    pins.digitalWritePin(__PIN_CS, 1);
}

function dats(a: number[]) {       // send array of data bytes
    __ensureSPI();
    pins.digitalWritePin(__PIN_DC, 1);
    pins.digitalWritePin(__PIN_CS, 0);
    for (let v of a) pins.spiWrite(v & 0xFF);
    pins.digitalWritePin(__PIN_CS, 1);
}

// ---------- PATCH: ST7789V Init für 240 x 320 (Portrait) ----------
// Hilfsfunktionen ggf. an Lib-Namen anpassen:
function cmd(c: number) { /* send command byte */ }
function dat(b: number) { /* send one data byte */ }
function dats(a: number[]) { for (let v of a) dat(v); }
function pause(ms: number) { control.waitMicros(ms * 1000); } // oder basic.pause(ms)

// Diese Funktion in der Datei anstelle der bisherigen Init-Logik nutzen.
// Wenn deine Lib eine init(width,height) hat, ruf diese Funktion darin auf
// oder ersetze deren Inhalt 1:1 durch diesen Block.
export function init240x320Portrait(): void {
    // Software Reset
    cmd(0x01);                  // SWRESET
    pause(150);

    // Sleep Out
    cmd(0x11);                  // SLPOUT
    pause(120);

    // Pixel-Format: 16-bit (RGB565)
    cmd(0x3A);                  // COLMOD
    dat(0x55);

    // Memory Access Control (Rotation/Farbreihenfolge)
    // Erst RGB probieren (0x00). Wenn Farben "falsch" wirken -> 0x08 (BGR)
    cmd(0x36);                  // MADCTL
    dat(0x00);                  // Portrait, RGB
    // dat(0x08);               // Portrait, BGR (Alternative, falls Farben invertiert)

    // Volles Adressfenster setzen (CASET/RASET) für 240 x 320
    // X (Spalten): 0..239 => 0x0000 .. 0x00EF
    cmd(0x2A);                  // CASET
    dats([0x00, 0x00, 0x00, 0xEF]);

    // Y (Zeilen): 0..319 => 0x0000 .. 0x013F
    cmd(0x2B);                  // RASET
    dats([0x00, 0x00, 0x01, 0x3F]);

    // (Optional) Invertierung nach Bedarf:
    // cmd(0x20);               // INVOFF
    // cmd(0x21);               // INVON

    // Display ON
    cmd(0x29);                  // DISPON
    pause(20);

    // Startschwarzen „Clear“ vermeiden – wir zeichnen gleich sichtbar Farbe.
}
// ---------- ENDE PATCH ----------


     /*
      * Draw single pixel
      */
     //% block="Draw single pixel at x %x|y %y with %color"
     //% x.min=1 x.max=130 x.defl=1
     //% y.min=1 y.max=162 y.defl=1
     //% weight=90
     //% inlineInputMode=inline
     //% color.shadow=ST7789_colors
     //% color.defl=Color.Red
     export function drawPixel(x: number = 1, y: number = 1, color: number = Color.Red): void {
         setWindow(x, y, x+1, y+1)
         send(TFTCommands.RAMWR, [color >> 8, color])
     }

     /*
      * Draw a straight line from one point to another
      */
     //% block="Draw line from x0 %x0 y0 %y0 to|x1 %x1 y %y1|with %color"
     //% x0.min=1 x0.max=130 x0.defl=1
     //% y0.min=1 y0.max=162 y0.defl=1
     //% x1.min=1 x1.max=130 x1.defl=20
     //% y1.min=1 y1.max=162 y1.defl=20
     //% weight=85
     //% inlineInputMode=inline
     //% color.shadow=ST7789_colors
     //% color.defl=Color.Yellow
     export function drawLine(x0: number = 1, y0: number = 1, x1: number = 20, y1: number = 20, color: number = Color.Yellow): void {
         let xDelta = x1 - x0
         let yDelta = y1 - y0

         if (Math.abs(yDelta) > Math.abs(xDelta)) {
             let ySteps = Math.abs(yDelta)
             let xIncrement = xDelta == 0 ? 0 : xDelta / ySteps
             let yIncrement = yDelta > 0 ? 1 : -1

             let x = x0
             let y = y0
             for (let steps = 0 ; steps <= ySteps ; steps++) {
                 drawPixel(x, y, color)
             }
         }
         else {
             let xSteps = Math.abs(xDelta)
             let yIncrement = yDelta == 0 ? 0 : yDelta / xSteps
             let xIncrement = xDelta > 0 ? 1 : -1

             let y = y0
             let x = x0
             for (let steps = 0 ; steps <= xSteps ; steps++) {
                 drawPixel(x, y, color)
                 y = y + yIncrement
                 x = x + xIncrement
             }
         }
     }

     /*
      * Draw rectangle with a given color
      */
     //% block="Draw rectangle at x %x|y %y with width %width|height %height|and %color"
     //% x.min=1 x.max=130 x.defl=1
     //% y.min=1 y.max=162 y.defl=1
     //% height.min=1 height.defl=30
     //% width.min=1 width.defl=30
     //% weight=80
     //% inlineInputMode=inline
     //% color.shadow=ST7789_colors
     //% color.defl=Color.Red
     export function drawRectangle(x: number = 1, y: number = 1, width: number = 30, height: number = 30, color: number = Color.Red): void {

         // Convert color
         let hiColor = (color >> 8) % 256
         let loColor = color % 256

         setWindow(x, y, x + width - 1, y + height - 1)
         enterDataMode()

         // Draw rectangle
         for(let indexY = height ; indexY > 0 ; indexY--) {
             for(let indexX = width ; indexX > 0 ; indexX--) {
                 pins.spiWrite(hiColor);
                 pins.spiWrite(loColor);
             }
         }

         exitDataMode()
     }

     /*
      * Draw circle with a given radius
      */
     //% block="Draw circle at x %x y %y with radius %radius and %color"
     //% x.min=1 x.max=130 x.defl=1
     //% y.min=1 y.max=162 y.defl=1
     //% radius.min=1 radius.defl=20
     //% weight=75
     //% inlineInputMode=inline
     //% color.shadow=ST7789_colors
     //% color.defl=Color.Green
     export function drawCircle(x: number = 20, y: number = 20, radius: number = 20, color: number = Color.Green): void {
        for(let y1 = -radius ; y1 <= 0 ; y1++) {
            for(let x1 = -radius ; x1 <= 0 ; x1++) {
                if((x1 * x1 + y1 * y1) <= (radius * radius)) {
                    drawPixel(x+x1, y+y1, color)
                    drawPixel(x+x1, y-y1, color)
                    drawPixel(x-x1, y+y1, color)
                    drawPixel(x-x1, y-y1, color)
                }
            }
        }
     }

     /*
      * Display string at given coordinates
      */
      //% block="Show string %string|at x %x|and y %y|with size %zoom and text %color and background %bgcolor"
      //% weight=70
      //% x.min=1 x.defl=1
      //% y.min=1 y.defl=1
      //% zoom.min=1 zoom.max=5 zoom.defl=1
      //% color.shadow=ST7789_colors
      //% bgcolor.shadow=ST7789_colors
      //% color.defl=Color.Yellow
      //% bgcolor.defl=Color.Black
      export function showString(text: string, x: number = 1, y: number = 1, zoom: number = 1, color: number = Color.Yellow, bgColor: number = Color.Black): void {
          let hiColor = (color >> 8) % 256
          let loColor = color % 256
          let bgHiColor = (bgColor >> 8) % 256
          let bgLoColor = bgColor % 256
          let zoomFactor = zoom
          let index = 0
          let colsel = 0
          let unicode = 0
          let charIndex = 0

          for (let stringPos = 0 ; stringPos < text.length ; stringPos++) {
            // Get character at current string position and find the corresponding unicode representation
            charIndex = text.charCodeAt(stringPos)
            if (charIndex < 20) {
                unicode = fontOne[charIndex]
            }
            else if (charIndex < 40) {
                unicode = fontTwo[charIndex - 20]
            }
            else if (charIndex < 60) {
                unicode = fontThree[charIndex - 40]
            }
            else if (charIndex < 80) {
                unicode = fontFour[charIndex - 60]
            }
            else if (charIndex < 100) {
                unicode = fontFive[charIndex - 80]
            }
            else if (charIndex < 120) {
                unicode = fontSix[charIndex - 100]
            }
            else if (charIndex < 140) {
                unicode = fontSeven[charIndex - 120]
            }

            // Set position and go into data mode
            setWindow (x + stringPos * 5 * zoomFactor, y, x + stringPos * 5 * zoomFactor + 5 * zoomFactor - 1, y + 5 * zoomFactor -1)
            enterDataMode()

            // write character to display
            for (let indexY = 0 ; indexY < 5 ; indexY++) {
                for (let a = 0 ; a < zoomFactor ; a++) {
                    for (let indexX = 0 ; indexX < 5 ; indexX++) {
                        index = indexY + indexX * 5
                        colsel = (unicode & (1 << index))
                        for (let b = 0 ; b < zoomFactor ; b++) {
                            if (colsel) {
                                pins.spiWrite(hiColor);
                                pins.spiWrite(loColor);
                            }
                            else {
                                pins.spiWrite(bgHiColor);
                                pins.spiWrite(bgLoColor);
                            }
                        }
                    }
                }
            }

            exitDataMode();
          }
      }

     //% block="Clear screen"
     //% weight=65
     export function clearScreen(): void {
         drawRectangle(0, 0, TFTWIDTH, TFTHEIGHT, Color.Black)
     }

     //% block="Turn display off"
     //% weight=60
     //% advanced=true
     export function turnOff(): void {
         send(TFTCommands.DISPOFF, [])
     }

     //% block="Turn display on"
     //% weight=55
     //% advanced=true
     export function turnOn(): void {
         send(TFTCommands.DISPON, [])
     }

     //% block="Rotate display|rotation %rotation"
     //% rotation.min=0 rotation.max=3 rotation.defl=2
     //% weight=50
     //% advanced=true
     export function rotate(rotation: number = 2): void {
        let madctl = 0

        switch (rotation) {
        case 0:
            madctl = TFTCommands.ST77XX_MADCTL_MX | TFTCommands.ST77XX_MADCTL_MY | TFTCommands.ST77XX_MADCTL_RGB;
            break;
        case 1:
            madctl = TFTCommands.ST77XX_MADCTL_MY | TFTCommands.ST77XX_MADCTL_MV | TFTCommands.ST77XX_MADCTL_RGB;
            break;
        case 2:
            madctl = TFTCommands.ST77XX_MADCTL_RGB;
            break;
        case 3:
            madctl = TFTCommands.ST77XX_MADCTL_MX | TFTCommands.ST77XX_MADCTL_MV | TFTCommands.ST77XX_MADCTL_RGB;
            break;
        }

        send(TFTCommands.MADCTL, [ madctl ], 25)
     }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=95 blockGap=8
    //% blockId="ST7789_colors" block="color %color"
    //% color=#f38d28
    export function colors(color: Color = Color.Red): number {
        return color;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=96
    //% blockId="ST7789_rgb" block="red %red|green %green|blue %blue"
    //% color=#f38d28
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    export function rgb(red: number = 255, green: number = 0, blue: number = 0): number {
        return converToRGB565(packRGB(red, green, blue));
    }    

    //% block="color $color"
    //% color.shadow="colorNumberPicker"
    //% color=#f38d28
    //% weight=97
    export function showColor(color: number): number {
        return converToRGB565(color);
    }

    function converToRGB565(color: number) {
        return(((color&0xf80000)>>8)|((color&0xfc00)>>5)|((color&0xf8)>>3));
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
 }

