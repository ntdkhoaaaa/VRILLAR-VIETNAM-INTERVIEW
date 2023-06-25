
// const fetch = require('node-fetch');
// const mysql = require('mysql');

// function downloadImage(url) {
//   return fetch(url).then(response => response.buffer());
// }

// function insertImage(connection, tableName, imageData) {
//   const sql = `INSERT INTO ${tableName} (image) VALUES (${imageData}) WHERE id=10`;
//   return new Promise((resolve, reject) => {
//     connection.query(sql, [imageData], (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }

// // MySQL connection configuration
// const connection = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root',
//   password: '',
//   database: 'f1_forinterview',
// });

// // Image URL
// const imageUrl = 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg';

// // Table name and column for the image
// const tableName = 'team';
// const imageColumn = 'image';

// // Download the image
// downloadImage(imageUrl)
//   .then(imageData => {
//     // Connect to MySQL
//     connection.connect();

//     // Insert the image into the database
//     return insertImage(connection, tableName, imageData);
//   })
//   .then(() => {
//     console.log('Image inserted successfully.');
//     // Close the connection
//     connection.end();
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Close the connection
//     connection.end();
//   });
// const axios = require('axios');
// const mysql = require('mysql');

// async function downloadImage(url) {
//   const response = await axios.get(url, {
//     responseType: 'arraybuffer'
//   });
//   return Buffer.from(response.data, 'binary');
// }

// function insertImage(connection, tableName, imageData) {
//   const sql = `INSERT INTO ${tableName} (image) VALUES (?) where id=10`;
//   return new Promise((resolve, reject) => {
//     connection.query(sql, [imageData], (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }

// // MySQL connection configuration
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'f1_forinterview',
// });

// // Image URL
// const imageUrl = 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg';

// // Table name and column for the image
// const tableName = 'team';
// const imageColumn = 'image';
// const rowId = 1;
// // Download the image
// downloadImage(imageUrl)
//   .then(imageData => {
//     // Connect to MySQL
//     connection.connect();

//     // Insert the image into the database
//     return insertImage(connection, tableName, imageData);
//   })
//   .then(() => {
//     console.log('Image inserted successfully.');
//     // Close the connection
//     connection.end();
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Close the connection
//     connection.end();
//   });
const fs = require('fs');
const mysql = require('mysql');
const axios = require('axios');
// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'f1_forinterview',
});

// Table name and column for the image
const tableName = 'team';
const imageColumn = 'image';

// Row ID of the record to update

// Image file path
const imageUrl = 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alphatauri.jpg';
const rowId = 20;


// const imageUrl = 'https://example.com/image.jpg';

// Download the image
axios
  .get(imageUrl, {
    responseType: 'arraybuffer',
  })
  .then(response => {
    // Get the image data
    const imageData = Buffer.from(response.data, 'binary');

    // SQL query to update the image in the table
    const sql = `UPDATE ${tableName} SET ${imageColumn} = ? WHERE id = ?`;

    // Connect to MySQL
    connection.connect();

    // Execute the query
    connection.query(sql, [imageData, rowId], (error, results) => {
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Image updated successfully.');
      }

      // Close the connection
      connection.end();
    });
  })
  .catch(error => {
    console.error('Error:', error);
    // Close the connection
    connection.end();
  });