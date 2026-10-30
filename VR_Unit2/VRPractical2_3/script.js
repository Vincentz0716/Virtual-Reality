let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }

  new Cloud(-12,12,-10);
  new Cloud(-4,14,-18);
  new Cloud(6,11,-12);
  new Cloud(15,13,-19);
  new Cloud(13,10,1);

  new House(-12,-5);
  new House(-4,5);
  new House(8,-6);
  new House(14,8);
})
sdsds