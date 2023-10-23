function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.excluded) return undefined;

  if (this.marks.length == 0 && !this.excluded) {
    this.marks = marks;
  } else if (this.marks.length != 0 && !this.excluded) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.excluded || this.marks.length == 0) return 0;

  const avg = this.marks.reduce((sum, cur) => sum + cur, 0) / this.marks.length;
  return +avg.toFixed(1);
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks, this.subject;
};
