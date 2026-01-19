class Student {
    firstName;
    lastName;
    mathGrades;
    frenchGrades;
    englishGrades;
    
    constructor(firstName, lastName, mathGrades, frenchGrades, englishGrades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mathGrades = mathGrades;
        this.frenchGrades = frenchGrades;
        this.englishGrades = englishGrades;
    }
    
    getMathAverage () {
        let sum = 0;
        let totalCount = 0;
        
        for (let i = 0; i < this.mathGrades.length; i++) {
            sum += this.mathGrades[i];
            totalCount++;
        }
        
        return sum / totalCount;
    }
    
     getFrenchAverage () {
        let sum = 0;
        let totalCount = 0;
        
        for (let i = 0; i < this.frenchGrades.length; i++) {
            sum += this.frenchGrades[i];
            totalCount++;
        }
        
        return sum / totalCount;
    }
    
     getEnglishAverage () {
        let sum = 0;
        let totalCount = 0;
        
        for (let i = 0; i < this.englishGrades.length; i++) {
            sum += this.englishGrades[i];
            totalCount++;
        }
        
        return sum / totalCount;
    }
    
    getAverage () {
        
        return ((this.getMathAverage()) + (this.getFrenchAverage()) + (this.getEnglishAverage())) / 3;
    }
    
    bestSubject() {
    const math = this.getMathAverage();
    const french = this.getFrenchAverage();
    const english = this.getEnglishAverage();

    if (math >= french && math >= english) {
        return "Math";
    } else if (french >= math && french >= english) {
        return "French";
    } else {
        return "English";
    }
}
}

let aurore = new Student("Aurore", "Gicquel", [11,14], [15,13], [10,13]);
console.log(aurore.getMathAverage());
console.log(aurore.getFrenchAverage());
console.log(aurore.getEnglishAverage());
console.log(aurore.getAverage());
console.log(aurore.bestSubject());