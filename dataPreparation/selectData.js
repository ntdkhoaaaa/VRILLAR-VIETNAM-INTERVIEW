const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'f1_forinterview',
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server', err);
    return;
  }

  console.log('Connected to MySQL server');

  // Perform the SELECT query
  connection.query('SELECT id,grandPrix FROM race', (err, rows) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }

    // Convert the rows to a JSON array
    const jsonArray = JSON.stringify(rows);

    console.log(jsonArray);

    // Close the MySQL connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing connection', err);
        return;
      }

      console.log('MySQL connection closed');
    });
  });
});
