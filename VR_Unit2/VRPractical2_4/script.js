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

    // Main Body
    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0.4 0");
    body.setAttribute("radius", "0.15");
    body.setAttribute("height", "0.8");
    body.setAttribute("color", "silver");
    this.obj.append(body);

    // Rocket Nose 
    let nose = document.createElement("a-cone");
    nose.setAttribute("position", "0 0.95 0");
    nose.setAttribute("radius-bottom", "0.2");
    nose.setAttribute("height", "0.3");
    nose.setAttribute("color", "red");
    this.obj.append(nose);

    //  Stripe 
    let stripe = document.createElement("a-cylinder");
    stripe.setAttribute("position", "0 0.5 0");
    stripe.setAttribute("radius", "0.155");
    stripe.setAttribute("height", "0.1");
    stripe.setAttribute("color", "darkblue");
    this.obj.append(stripe);

    // Window 
    let windowGlass = document.createElement("a-sphere");
    windowGlass.setAttribute("position", "0 0.65 0.13");
    windowGlass.setAttribute("radius", "0.04");
    windowGlass.setAttribute("color", "cyan");
    this.obj.append(windowGlass);

    // Fin 1 (Left)
    let fin1 = document.createElement("a-box");
    fin1.setAttribute("position", "0.18 0.15 0");
    fin1.setAttribute("width", "0.03");
    fin1.setAttribute("height", "0.3");
    fin1.setAttribute("depth", "0.2");
    fin1.setAttribute("rotation", "0 0 -15");
    fin1.setAttribute("color", "darkred");
    this.obj.append(fin1);

    // : Fin 2 (Right)
    let fin2 = document.createElement("a-box");
    fin2.setAttribute("position", "-0.18 0.15 0");
    fin2.setAttribute("width", "0.03");
    fin2.setAttribute("height", "0.3");
    fin2.setAttribute("depth", "0.2");
    fin2.setAttribute("rotation", "0 0 15");
    fin2.setAttribute("color", "darkred");
    this.obj.append(fin2);

    // Detail: Exhaust Engine Nozzle (Dark Gray)
    let nozzle = document.createElement("a-cone");
    nozzle.setAttribute("position", "0 -0.05 0");
    nozzle.setAttribute("radius-bottom", "0.12");
    nozzle.setAttribute("radius-top", "0.15");
    nozzle.setAttribute("height", "0.15");
    nozzle.setAttribute("rotation", "180 0 0");
    nozzle.setAttribute("color", "#333");
    this.obj.append(nozzle);

    // Detail: Flame Exhaust (Orange glow)
    let flame = document.createElement("a-cone");
    flame.setAttribute("position", "0 -0.25 0");
    flame.setAttribute("radius-bottom", "0.1");
    flame.setAttribute("height", "0.3");
    flame.setAttribute("rotation", "180 0 0");
    flame.setAttribute("color", "orange");
    flame.setAttribute("opacity", "0.8");
    this.obj.append(flame);

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

    //  Saucer 
    let saucer = document.createElement("a-cylinder");
    saucer.setAttribute("radius", "0.8");
    saucer.setAttribute("height", "0.15");
    saucer.setAttribute("color", "silver");
    this.obj.append(saucer);

    //  Rim 
    let rim = document.createElement("a-cylinder");
    rim.setAttribute("radius", "1");
    rim.setAttribute("height", "0.03");
    rim.setAttribute("color", "#444");
    this.obj.append(rim);

    //  Dome
    let dome = document.createElement("a-sphere");
    dome.setAttribute("position", "0 0.2 0");
    dome.setAttribute("radius", "0.4");
    dome.setAttribute("scale", "1 0.5 1");
    dome.setAttribute("color", "lightblue");
    dome.setAttribute("opacity", "0.7");
    this.obj.append(dome);

    // Alien 
    let alien = document.createElement("a-sphere");
    alien.setAttribute("position", "0 0.2 0");
    alien.setAttribute("radius", "0.12");
    alien.setAttribute("color", "lightgreen");
    this.obj.append(alien);

    let core = document.createElement("a-cylinder");
    core.setAttribute("position", "0 -0.12 0");
    core.setAttribute("radius", "0.3");
    core.setAttribute("height", "0.1");
    core.setAttribute("color", "#9900cc");
    this.obj.append(core);


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