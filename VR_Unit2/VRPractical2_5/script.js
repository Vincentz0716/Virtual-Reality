/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

// 'x' = Wall, 'g' = Gem, 'P' = Portal
let maze = [
  "xPxxxxxxxxxxxxxxxxxxxx",
  "x   x  g    x     x gx",
  "x x x xxxxx x xxx x  x",
  "x x   x   x     x   xx",
  "x xxx x x xxxxx x xxxx",
  "x     x x  g  x x    x",
  "xxxxx x xxxxx x xxxx x",
  "x     x     x   x    x",
  "x xxxxxxxxx x xxxxxx x",
  "x  g      x x        x",
  "x xxxxxxx x xxxxxxxx x",
  "xxxxxxxxxxxxxxxxxxxxPx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and 
   position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation 
   of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");
  for (let r = 0; r < maze.length; r++) {
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */
    let row = maze[r];
    let cols = row.split("");

    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    for (let c = 0; c < cols.length; c++) {
      if (cols[c] == "x") {
        let w = new Wall(c, 1, r);
        w.addTo(scene);
      } else if (cols[c] == "g") {
        let g = new Gem(c, 1, r);
        g.addTo(scene);
      } else if (cols[c] == "P") {
        let p = new Portal(c, 1, r);
        p.addTo(scene);
      }
    }
  }
});