const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 32 * 32;
canvas.height = 32 * 18;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundfondo = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/Fondo-playa.png",
});

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },

  imageSrc: "./img/Level-1.png",
});
const player = new Player({
  collisionBlocks,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};
//let bottom = y + 100

function animate() {
  window.requestAnimationFrame(animate);
  backgroundfondo.draw();
  backgroundLevel1.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  player.velocity.x = 0;
  if (keys.d.pressed) player.velocity.x = 5;
  else if (keys.a.pressed) player.velocity.x = -5;

  player.draw();
  player.update();
}

animate();
