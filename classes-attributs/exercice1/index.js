class Cat {
    name;
    age;
    color;
    
    constructor(name, age, color)
    {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

let garfield = new Cat("Garfield", "10", "orange");
let felix = new Cat ("Félix", "5", "Noir et blanc");

console.log(garfield);
console.log(felix);