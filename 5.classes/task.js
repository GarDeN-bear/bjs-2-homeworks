class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state *= 1.5;
    if (this._state > 100) {
        this._state = 100;
    }
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
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
    let findResult = this.books.find(
        el => (el.hasOwnProperty(type) && (el[type] === value)));
    if (findResult !== undefined) {
      return findResult;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let findResult = this.books.find(el => el.name === bookName);
    let res = null;
    if (findResult !== undefined) {
      this.books = this.books.filter(el => el.name !== bookName);
      res = findResult;
    }
    return res;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if ((mark < 3) || (mark > 5)) {
      return;
    }

    if (this.marks.hasOwnProperty(subjectName)) {
      this.marks[subjectName].push(mark);
    } else {
      this.marks[subjectName] = [mark];
    }
  }

  getAverageBySubject(subjectName) {
    let avg = 0;
    if (this.marks.hasOwnProperty(subjectName)) {
      avg =
          (this.marks[subjectName].reduce((accum, el) => accum + el, 0) /
           this.marks[subjectName].length);
    }
    return avg;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    console.log(subjects);
    if (subjects.length === 0) {
      return 0;  // or handle the case where there are no marks at all
    }

    return subjects.reduce(
               (acc, subject) => {
                 const sum =
                     this.marks[subject].reduce((acc, mark) => acc + mark, 0);
                 return acc + sum;
               },
               0) /
        subjects.reduce((acc, subject) => acc + this.marks[subject].length, 0);
  }
}
