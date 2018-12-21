// tap_lights 
// ifl chico 2018

#include <Adafruit_NeoPixel.h>

#define PIN 6
#define BUTTON 2
#define DELAY 30

Adafruit_NeoPixel strip = Adafruit_NeoPixel(16, PIN, NEO_GRB + NEO_KHZ800);

uint16_t color = 0;          // variable for current color wheel color
uint16_t fader = 0;          // variable for current fader level brightness
int buttonState = 0;         // variable for reading the pushbutton status
bool isOff = true;

void setup() {
  Serial.begin(115200);             // Start serial
  pinMode(BUTTON, INPUT);           // set pushbutton pin to input
  digitalWrite(BUTTON, HIGH);       // turn on pullup resistors
  
  strip.begin();
  strip.show();                     // Initialize all pixels to 'off'
  
  strip.fill(strip.Color(255, 0, 0), 0, strip.numPixels()); // Red
  strip.show();
  delay(DELAY*30);
  
  strip.fill(strip.Color(0, 255, 0), 0, strip.numPixels()); // Green
  strip.show();
  delay(DELAY*30);
  
  strip.fill(strip.Color(0, 0, 255), 0, strip.numPixels()); // Blue
  strip.show();
  delay(DELAY*30);
  
  rainbowCycle(DELAY/100);
  
  strip.clear();
  strip.show();
}

void loop() {
  buttonState = digitalRead(BUTTON); // read the state of the pushbutton value:
  if (buttonState == LOW) {          // if button pressed ...
    if(isOff) {
      strip.fill(strip.Color(255, 255, 255), 0, strip.numPixels()); // white
      strip.show();
      isOff = false;
      delay((DELAY*30)*2);
    } else {
      rainbow(DELAY);
    }
  }
}

void rainbow(uint8_t wait) {
  color++;
  
  if(color > 255) {
    color = 0;
    strip.clear();
    strip.show();
    isOff = true;
    delay((DELAY*30)*2);
    return;
  }
    
  for(uint16_t i=0; i<strip.numPixels(); i++) {
    //strip.setPixelColor(i, Wheel((i+color) & 255)); // dissolves colors over strip
    strip.setPixelColor(i, Wheel(color & 255));   // all same color ...
  }
  
  strip.show();
  if(color == 255)
    delay(wait*10);
  else
    delay(wait);
}

// Cycles the rainbow equally throughout strip
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}
