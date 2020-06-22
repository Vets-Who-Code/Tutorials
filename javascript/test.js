const KEY = Symbol(); // create new Symbol
let object = {}; // create empty object
object[KEY] = "lol"; // add Symbol to object
console.log(object[KEY]); // "lol"
console.log(object); // {Symbol(): "lol"}