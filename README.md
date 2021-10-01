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
|`set dimention: '2d' \| '3d' = '2d'`
|`set metric: 'euclidean' \| 'manhattan' \| 'chebyshev' \| 'minkowski' = 'euclidean'`
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
const worley = new Worley(spots, '3d', 'manhattan');

worley.st(position);
```

[Live demo here](https://leodeslf.github.io/worley-noise/ "GitHub Pages") (3d, euclidean, nd - st).

## Author

[Leonardo de S.L.F](https://github.com/leodeslf "GitHub profile").

## License

MIT License.
