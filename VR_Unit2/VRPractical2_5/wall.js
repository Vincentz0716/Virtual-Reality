class Wall {
  constructor(x, y, z) {
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("width", 0.5);
    this.obj.setAttribute("height", 0.5);
    this.obj.setAttribute("depth", 0.5);
    this.obj.setAttribute("color", "white");
    this.obj.setAttribute("position", `${x * 0.5} ${y * 0.5} ${z * 0.5}`);
  }

  addTo(parent) {
    parent.appendChild(this.obj);
  }
}