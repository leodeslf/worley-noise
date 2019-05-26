# Worley.js

```txt

  \                      /
   \                    /
    \                  /
     \                /.
      \      /\      //
       \    //\\    //
        \  //  \\  //
         \//    \\//
          V      V/

```

## About

A tool to generate Worley Noise values using Chebyshev, Euclidian, Manhattan and Minkowski metrics.

## Usage

```JavaScript
import Spot from '/modules/Spot.js';
import WORLEY from '/modules/Worley.js';

// E.g
let spots = new Array;
let pos = new Vector(0, 0);
let worley_value = undefined;

// Let's suppose:
// width = myCanvas.width;
// height = myCanvas.height;

// Fill spots array
for (let i = 0; i < 10; i++) {
  spots[i] = new Spot(
    Math.random() * width,
    Math.random() * height
  );
}

// Loop pixel by pixel
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    pos.x = x;
    pos.y = y;
    worley_value = WORLEY.st(spots, pos);
    // Save each value to print it later on myCanvas
  }
}
```

## Features

`WORLEY` functions:

- First closest spot `st(spots, pos)`
- Second closest spot `nd(spots, pos)`
- Second minus first closest spot `ndMinusSt(spots, pos)`
- First closest spot (Manhattan metric) `manhattan(spots, pos)`
- First closest spot (Chebyshev metric) `chebyshev(spots, pos)`
- First closest spot (Minkowski metric) `minkowski(spots, pos, e)`

*See in-line docs for more info.*

It needs:

- Spot.js
- Vector.js

## Credits

[Leonardo de S.L.F](https://github.com/Wikarot "GitHub profile").