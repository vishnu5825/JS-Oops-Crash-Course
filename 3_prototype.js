//constructor

// function Book(title,author,year) {
//     this.title = title;
//     this.author =author;
//     this.year = year;
//     //console.log('Book Initialized....');

   

// }

// // getSummary

// Book.prototype.getSummary = function() {
//      return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //get Age

// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// };

// // Revice / change Year

// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised= true;
    
// }

// // Instatiate an object
// const book1 = new Book('Book one', 'vishnu vikky','2020');

// const book2 = new Book('Book two', 'panindra', '2018');

// //console.log(book1.getSummary());

// console.log(book2);
// book2.revise('2018');

// console.log(book2);