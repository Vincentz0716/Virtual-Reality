let scene,car,rocket; 
window.addEventListener("DOMContentLoaded",function() {

    scene = document.querySelector("a-scene"); //CSS Selector
    car = document.querySelector("#car");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    pokeball=document.querySelector("#pokemonball");
    sun=document.querySelector("#sun");
    car.x = 0;
    car.dx = 0.1;
    rocket.y = 0;
    rocket.dy = 0.1;
    dude.s = 1;
    dude.ds = 0.1;
    pokeball.r = 0;
    pokeball.dr = 1;
    sun.o = 0;
    sun.do = 1;
    loop();
})
function loop(){
car.setAttribute("position", {x: car.x, y: 0, z: 0});
car.x += car.dx;
rocket.setAttribute("position", {x: 0, y: rocket.y, z: -5});
rocket.y += rocket.dy;
dude.setAttribute("scale", {x: dude.s, y: dude.s, z: dude.s});
dude.s += dude.ds;
pokeball.setAttribute("rotation", {x: pokeball.r, y: 0, z: 0});
pokeball.r += pokeball.dr;
sun.setAttribute("opactity", sun.o + '0 0');
sun.o += sun.do;
window.requestAnimationFrame(loop);
}
