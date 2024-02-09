 // le models  de students 
const db = require('./db');

class Student {
  static getAllStudents() {
    return db.execute('SELECT * FROM students');
  }

  static getStudentById(studentId) {
    return db.execute('SELECT * FROM students WHERE id = ?', [studentId]);
  }

  static createStudent(name, age) {
    return db.execute('INSERT INTO students (name, age) VALUES (?, ?)', [name, age]);
  }

  static updateStudent(studentId, name, age) {
    return db.execute('UPDATE students SET name = ?, age = ? WHERE id = ?', [name, age, studentId]);
  }

  static deleteStudent(studentId) {
    return db.execute('DELETE FROM students WHERE id = ?', [studentId]);
  }
}

module.exports = Student;
