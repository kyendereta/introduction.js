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