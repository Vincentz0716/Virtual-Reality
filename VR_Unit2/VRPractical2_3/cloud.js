class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    for(let position of ["-1 0 0", "0 0.3 0", "1 0 0"]){
      let puff = document.createElement("a-sphere");
      puff.setAttribute("color","white");
      puff.setAttribute("position",position);
      puff.setAttribute("radius","0.75");
      this.obj.append(puff);
    }

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }
}
