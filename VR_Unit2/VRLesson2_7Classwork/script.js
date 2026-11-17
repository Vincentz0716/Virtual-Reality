let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dude;
let dudes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  dude= new Dude(0,1,-5);
   for (let x = -10; x <= 10; x += 2) {
    for (let z = -10; z <= 10; z += 2) {
       dude = new Dude(x, 1, z);
      dudes.push(dude);
    }
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for( let dude of dudes){
     dude.jump();
  }

  window.requestAnimationFrame( loop );
}