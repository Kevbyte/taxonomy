var Bee = function() {
  //using pseudoclassical
  Grub.apply(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

var bee = new Bee();
// bee.age 
// --> 5
  

