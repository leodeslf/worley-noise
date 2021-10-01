# Worley Noise

```txt

     ____________    ____________ 
    /___________/\  / ________  /\
    \  ________ \ \/ /\______/ / /
     \ \ \     \ \ \/ /     / / /
      \ \ \     \ \ \/     / / /
       \ \ \    /\ \ \    / / /
        \ \ \  / /\ \ \  / / /
         \ \ \/ / /\ \ \/ / /
          \ \ \/ /  \ \ \/ /
           \_\__/    \_\__/

```

## About

A Worley Noise library for JavaScript.

## Features

### Methods

|`Worley`
|---
|`spots: Vec2[] \| Vec3[]`
|`set dimention: '2d' \| '3d'`
|`set metric: 'euclidean' \| 'manhattan' \| 'chebyshev' \| 'minkowski'`
|`st(position: Vec2 \| Vec3, e?: number = 3): number` (1st closest)
|`nd(position: Vec2 \| Vec3, e?: number = 3): number[]` (1st and 2nd closest)

## Install

```bash
npm i @leodeslf/worley-noise
```

## Import

```javascript
import Worley from '@leodeslf/worley-noise';
```

## Usage

```javascript
const worley = new Worley(
  spots,
  '3d',       // Default '2d' (optional).
  'manhattan' // Default 'euclidean' (optional).
);

worley.st(position);

/**
 * Notice Worley makes use of Vec.js to compute distances.
 * 
 * Anyway, both the spots and the position will work by just having the
 * shape of { x: number, y: number, z?: number } instead of being a Vec.
 */
```

## Author

[Leonardo de S.L.F](https://github.com/leodeslf "GitHub profile").

## License

MIT License.
