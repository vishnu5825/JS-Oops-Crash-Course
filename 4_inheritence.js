// //constructor

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

// // Magazine Constructor
// function Magazine(title,author,year,month){
//     Book.call(this,title,author,year);
//     this.month=month;
// }

// //inherit prototype
// Magazine.prototype=Object.create(Book.prototype);

// //instantaite magazine object
// const mag1=new Magazine('mag one','vishnu vikky','2019','jan');



// //console.log(mag1.getSummary());
// //console.log(mag1);

// //use magazine constructor
// Magazine.prototype.constructor=Magazine;

// console.log(mag1);

