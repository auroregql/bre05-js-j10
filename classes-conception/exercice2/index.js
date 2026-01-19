class Book {
    title;
    author;
    dateOfPublication;
    numberOfPages;
    numberOfCopies;
    
    constructor(title, author, dateOfPublication, numberOfPages, numberOfCopies) {
        this.title = title;
        this.author = author;
        this.dateOfPublication = dateOfPublication;
        this.numberOfPages = numberOfPages;
        this.numberOfCopies = numberOfCopies;
    }
    
    availability () {
    if (this.numberOfCopies >= 1) {
        return"Available";
    }
    else { 
        return"Unavailable";
        
    }
    }
    
}

let miniAndCo = new Book("Mini and Co.", "Aurore GICQUEL", "8 avril 2025", 57, 10);
console.log(miniAndCo.availability());