function Vehicle(name) { //  this a constructor function it is used to 
    this.name = name;
  }
  // parent method
  Vehicle.prototype.start = function() {
    return "Engine of " + this.name + " starting…";
  };
  
  // Car - child
  function Car(name) {
    Vehicle.call(this, name); // call super constructor.
  }
  // child extends parent
  Car.prototype = Object.create(Vehicle.prototype);
  // child method
  Car.prototype.start = function() {
    console.log("Gidday! " + Vehicle.prototype.start.call(this));
  };
  
  // instances of child
  var c1 = new Car("Infiniti G37");
  console.log(c1.start())