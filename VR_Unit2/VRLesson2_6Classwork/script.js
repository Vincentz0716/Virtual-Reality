let scene;
let mechTemplate;
let army = [];

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  mechTemplate = document.getElementById("mech-1");

  for (let x = -30; x <= 30; x += 15) {
    for (let z = -30; z <= 30; z += 15) {
      let m = new Mech(x, 13, z);
      army.push(m);
    }
  }

  loop();
});

function loop() {
  for (let i = 0; i < army.length; i++) {
    army[i].launch();
  }

  window.requestAnimationFrame(loop);
}