 //le controller de student
const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  try {
    const [rows, fields] = await Student.getAllStudents();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const [rows, fields] = await Student.getStudentById(req.params.studentId);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'pas detudiant' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStudent = async (req, res) => {
  const { name, age } = req.body;
  try {
    const [result] = await Student.createStudent(name, age);
    res.json({ id: result.insertId, name, age });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  const { name, age } = req.body;
  try {
    const [result] = await Student.updateStudent(req.params.studentId, name, age);
    if (result.affectedRows > 0) {
      res.json({ id: req.params.studentId, name, age });
    } else {
      res.status(404).json({ message: 'pas detudiants' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const [result] = await Student.deleteStudent(req.params.studentId);
    if (result.affectedRows > 0) {
      res.json({ message: ' etudiant suprimer avec succes', deletedStudentId: req.params.studentId });
    } else {
      res.status(404).json({ message: ' pas detudiants' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
