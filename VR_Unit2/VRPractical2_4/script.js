let rnd = (min, max) => Math.random() * (max - min) + min;
let scene;
let rockets = [];
let ufos = [];

class Rocket {
  constructor(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
    this.speed = rnd(0.01, 0.05);
    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0.4 0");
    body.setAttribute("radius", "0.15");
    body.setAttribute("height", "0.8");
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let nose = document.createElement("a-cone");
    nose.setAttribute("position", "0 0.95 0");
    nose.setAttribute("radius-bottom", "0.2");
    nose.setAttribute("height", "0.3");
    nose.setAttribute("color", "red");
    this.obj.append(nose);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

launch() {
  this.y += this.speed;
  this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
}
}

class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = rnd(0.01, 0.04);
    this.obj = document.createElement("a-entity");

    let saucer = document.createElement("a-cylinder");
    saucer.setAttribute("radius", "0.8");
    saucer.setAttribute("height", "0.2");
    saucer.setAttribute("color", "silver");
    this.obj.append(saucer);

    let dome = document.createElement("a-sphere");
    dome.setAttribute("position", "0 0.2 0");
    dome.setAttribute("radius", "0.4");
    dome.setAttribute("scale", "1 0.5 1");
    dome.setAttribute("color", "lightblue");
    this.obj.append(dome);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

  invade() {
    if (this.y > 0.2) {
      this.y -= this.speed;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
  }
}

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");

for (let i = 0; i < 100; i++) {
  let x = rnd(-20, 20);
  let z = rnd(-20, 20);
  let y = rnd(-4, -0.5);
  let rocket = new Rocket(x, y, z);
  rockets.push(rocket);
}

for (let i = 0; i < 20; i++) {
  let x = rnd(-20, 20);
  let z = rnd(-20, 20);
  let y = rnd(10, 25);
  let ufo = new UFO(x, y, z);
  ufos.push(ufo);
}

  loop();
});

function loop() {
  for (let rocket of rockets) {
    rocket.launch();
  }

  for (let ufo of ufos) {
    ufo.invade();
  }

  window.requestAnimationFrame(loop);
}