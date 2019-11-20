/*Use getPrototypeOf method to:

    A number

    A string
*/

Object.getPrototypeOf(98);
console.log(Object(98));

Object.getPrototypeOf('newObject');
console.log(Object('newObject'))

//Constructor functions
function Video (title, uploader, duration){
    this.title = title
    this.uploader = uploader
    this.duration = duration
}

let video1 = new Video("Holding Hands!", "Otters", 60)
Object.getPrototypeOf(video1);

Video.prototype.watch = function () {
    return `You watched all ${this.duration} seconds of ${this.uploader} ${this.title}`;
}

video1.watch()

console.log(video1.watch())

/* Create an object called shape that has the type property and a getType() method.

    Define a Triangle() constructor function whose prototype is shape. Objects created
    with Triangle() should have three own properties—a, b, and c, representing the 
    lengths of the sides of a triangle.

    Add a new method to the prototype called getPerimeter().
    To the constructor function above.Its return value should perimeter of the rectangle*/

    function Shape(type){
        this.type = type
    }

    Shape.prototype.getType = function (){
        return `this is a ${this.type}`
    }

    function Triangle(perimeter){
        Shape.call(this, perimeter);
    }
    
    Triangle.prototype = Object.create(Shape.prototype);

    Triangle.prototype.type = function(){
        console.log("Hey" + Shape.prototype.call(this))
    };