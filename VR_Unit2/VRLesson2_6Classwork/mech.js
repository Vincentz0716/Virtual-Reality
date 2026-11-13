class Mech {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.dy = (Math.random() * 0.02) + 0.01; 
    this.z = z;
    
    this.obj = mechTemplate.cloneNode(true);
    this.obj.removeAttribute('id');
    this.obj.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
    
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

  launch() {
    this.y += this.dy;
    if (this.y > 35) {
      this.y = 13;
    }
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}