class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        return this._state = 0;
      } else if (newState > 100) {
        return this._state = 100;
      } else {
        return (this._state = newState);
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state);
      this.author = author;
      this.type = 'book';
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'novel';
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'fantastic';
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'detective';
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let indexBook;
  
      if ((indexBook = this.books.findIndex(book => book[type] === value)) === -1) {
        return null;
      } else {
        return this.books[indexBook];
      }
    }
  
    giveBookByName(bookName) {
      let indexBook;
  
      if ((indexBook = this.books.findIndex(book => book.name === bookName)) === -1) {
        return null;
      } else {
        return (this.books.splice(indexBook, 1))[0];
      }
    }
  }



  class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.journal = [];
      }
  
    addMark(mark, subjectName) {
      let index = this.journal.findIndex(item => item.subject === subjectName);
  
      if(mark > 0 && mark < 6) {
        if(this.journal.length === 0 || index === -1){
          return this.journal.push({subject: subjectName, mark: [mark]});
        } else {
          return this.journal[index].mark.push(mark);
        }
      } else {
        return 'Ошибка, оценка должна быть числом от 1 до 5';
      }
    }
  
    getAverageBySubject(subjectName) {
      let index = this.journal.findIndex(item => item.subject === subjectName);
    
      if(index === -1){
        return "Несуществующий предмет";
      } else {
        return this.journal[index].mark.reduce((a,b) => (a + b) / this.journal[index].mark.length);
      }
    }
  
    getAverage(){
      let sum = 0;
      let average = 0;
      
      for(let i = 0; i < this.journal.length; i++){
        sum += this.journal[i].mark.reduce((a,b) => (a + b) / this.journal[i].mark.length)
      }
      return average += sum / this.journal.length;
    }
  
    exclude(reason) {
      delete this.journal;
      return this.excluded = reason;
    }
  }