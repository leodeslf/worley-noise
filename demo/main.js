import Worley from '../worley.js';
import { Vec3 } from '@leodeslf/vec.js';

let ctx;

window.addEventListener('load', () => {
  ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillStyle = 'red';
  draw();
});

const SIDE = 300;
const HALF_SIDE = SIDE * .5;
const CENTER = new Vec3(HALF_SIDE, HALF_SIDE, HALF_SIDE);
const SPOTS_N = 20;
const SPOTS = [];
for (let i = 0; i < SPOTS_N; i++) {
  SPOTS[i] = Vec3.random();
  SPOTS[i].scale(HALF_SIDE);
  SPOTS[i].add(CENTER);
}
const WORLEY = new Worley(SPOTS, '3d');
const IMAGE_DATA = new ImageData(SIDE, SIDE);

function draw() {
  for (let v = 0; v < SIDE; v++) {
    for (let u = 0; u < SIDE; u++) {
      const values = WORLEY.nd(new Vec3(u, v, 0));
      const value = (values[1] - values[0]) * 2;
      const index = (v * SIDE + u) * 4;
      for (let rgb = 0; rgb < 3; rgb++) {
        IMAGE_DATA.data[index + rgb] = value;
      }
      IMAGE_DATA.data[index + 3] = 255;
    }
  }
  ctx.clearRect(0, 0, SIDE, SIDE);
  ctx.putImageData(IMAGE_DATA, 0, 0);
  update();
  requestAnimationFrame(draw)
}

function update() {
  for (let i = 0; i < SPOTS_N; i++) {
    SPOTS[i].subtract(CENTER);
    SPOTS[i].rotateAxisY(.0003 * (i + 1));
    SPOTS[i].add(CENTER);
  }
}
