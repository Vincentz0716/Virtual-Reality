class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let leftPuff = document.createElement("a-sphere");
    leftPuff.setAttribute("color","white");
    leftPuff.setAttribute("position","-1 0 0");
    leftPuff.setAttribute("radius","0.75");
    this.obj.append(leftPuff);

    let middlePuff = document.createElement("a-sphere");
    middlePuff.setAttribute("color","white");
    middlePuff.setAttribute("position","0 0.3 0");
    middlePuff.setAttribute("radius","0.75");
    this.obj.append(middlePuff);

    let rightPuff = document.createElement("a-sphere");
    rightPuff.setAttribute("color","white");
    rightPuff.setAttribute("position","1 0 0");
    rightPuff.setAttribute("radius","0.75");
    this.obj.append(rightPuff);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }
}
