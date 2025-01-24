function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
  if (!this.hasOwnProperty('marks')) {
    return;
  }

  this.marks.push(...marks);
};

Student.prototype.getAverage = function() {
  let avg = 0;
  if (!this.hasOwnProperty('marks')) {
    return avg;
  }

  if (this.marks.length == 0) {
    return avg;
  }

  avg = this.marks.reduce((accum, val) => accum + val, 0) / this.marks.length;
  return avg;
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
