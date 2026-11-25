class Portal {
  constructor(x, y, z) {
    this.obj = document.createElement("a-torus");
    this.obj.setAttribute("radius", "0.22");
    this.obj.setAttribute("radius-tubular", "0.05");
    this.obj.setAttribute("color", "#9B5DE5");
    this.obj.setAttribute("position", `${x * 0.5} ${y * 0.5} ${z * 0.5}`);
  }

  addTo(parent) {
    parent.appendChild(this.obj);
  }
}