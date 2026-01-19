class User {
    firstName;
    lastName;
    grades;
    
    constructor(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
}

let users = [
    new User("Mari", "Doucet", [13, 12, 15]),
    new User("Hugues", "Froger", [14, 11, 17, 13]),
];

console.log(users);
console.log(User.grades.length);

