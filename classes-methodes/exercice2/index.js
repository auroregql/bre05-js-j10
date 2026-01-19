class User {
    constructor(firstName, lastName, frenchGrades, mathGrades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frenchGrades = frenchGrades;
        this.mathGrades = mathGrades;
    }

    getAverage() {
        let sum = 0;
        let totalCount = 0;

        for (let i = 0; i < this.frenchGrades.length; i++) {
            sum += this.frenchGrades[i];
            totalCount++;
        }

        for (let i = 0; i < this.mathGrades.length; i++) {
            sum += this.mathGrades[i];
            totalCount++;
        }

        return sum / totalCount;
    }
}
let mari = new User("Mari", "Doucet", [11, 17], [9, 7]);
console.log(mari.getAverage());
