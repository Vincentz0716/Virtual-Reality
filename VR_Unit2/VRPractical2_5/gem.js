class Gem {
  constructor(x, y, z) {
    this.obj = document.createElement("a-dodecahedron");
    this.obj.setAttribute("radius", "0.18");
    this.obj.setAttribute("color", "#00F5D4");
    this.obj.setAttribute("position", `${x * 0.5} ${y * 0.5} ${z * 0.5}`);
  }

  addTo(parent) {
    parent.appendChild(this.obj);
  }
}