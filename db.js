 
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Votre nom d'utilisateur MySQL
  password: '', // Votre mot de passe MySQL
  database: 'MonEtudiant', // Le nom de votre base de données MySQL
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// pour cree la table 
pool.query(`
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
  )
`, (err, results) => {
  if (err) {
    console.error("Erreur lors de la création de la table students :", err);
  } else {
    console.log("Table students créée avec succès !");
  }
});

module.exports = pool.promise();
