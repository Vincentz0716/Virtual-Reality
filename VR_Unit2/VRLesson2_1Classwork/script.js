window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  const scene = document.querySelector("a-scene");


  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  const dodecahedron = document.createElement("a-dodecahedron");

  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dodecahedron.setAttribute("position", "0 1.5 -4");
  dodecahedron.setAttribute("radius", "1");
  dodecahedron.setAttribute("color", "#39a9db");


  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.appendChild(dodecahedron);


  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  for (let i = 0; i < 30; i++) {
    const randomDodecahedron = document.createElement("a-dodecahedron");
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 5 + 0.5;
    const z = Math.random() * -10 - 3;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    randomDodecahedron.setAttribute("position", `${x} ${y} ${z}`);
    randomDodecahedron.setAttribute("radius", "0.5");
    randomDodecahedron.setAttribute("color", `rgb(${red}, ${green}, ${blue})`);
    scene.appendChild(randomDodecahedron);
  }
  
})