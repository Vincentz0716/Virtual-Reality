class House{
  constructor(x,z){
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("position","0 1 0");
    base.setAttribute("scale","2 2 2");
    base.setAttribute("color","tan");
    this.obj.append(base);

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("position","0 2.5 0");
    roof.setAttribute("color","brown");
    roof.setAttribute("radius","1.5");
    roof.setAttribute("height","3");
    roof.setAttribute("segments-radial","3");
    roof.setAttribute("rotation","270 0 0");
    this.obj.append(roof);

    this.obj.setAttribute("position",{x:x, y:0, z:z});
    scene.append(this.obj);
  }
}
