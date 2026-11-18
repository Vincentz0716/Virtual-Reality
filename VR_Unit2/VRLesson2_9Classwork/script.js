let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "x--------------------x",
  "x------o-------o-----x",
  "x------o-------o-----x",
  "x------o-------o-----x",
  "x--------------------x",
  "x--------------------x",
  "x----T-----------T---x",
  "x-----T---------T----x",
  "x------T-------T-----x",
  "x-------TTTTTTT------x",
  "xxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})