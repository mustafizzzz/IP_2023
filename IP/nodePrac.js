//file module

// const fs = require('fs');

//access

// fs.access('./test/text.txt', fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log('File not Found');

//   } else {
//     console.log('File  Found');

//   }
// })


//open file
// fs.open('./test/text.txt', 'r', (err, file) => {
//   if (err) {
//     throw err
//   } else {
//     console.log('Opened');
//   }
// })

//append text
// fs.appendFile('./test/text.txt', 'Example data file', (err) => {
//   if (err) throw err;
//   console.log('Appended');
// })

//read a file
// fs.readFile('./test/text.txt', 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data);
// })

//delete File
// fs.unlink('./test/text2.txt', (err) => {
//   if (err) throw err
//   console.log('Deleted');
// })

//rename
// fs.rename('./test/text.txt', './test/badalahua.txt', (err) => {
//   if (err) throw err
//   console.log('Rename');
// })

//copy
// fs.copyFile('./test/text.txt', './test/badalahua.txt', (err) => {
//   if (err) throw err
//   console.log('Copied');
// })

//cookies
// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser());

// // Set a cookie
// app.get('/setcookie', (req, res) => {
//   res.cookie('username', 'mustafiz'); // Expires in 15 minutes
//   res.send('Cookie has been set');
// });

// // Get a cookie
// app.get('/getcookie', (req, res) => {
//   const username = req.cookies.username;
//   if (username) {
//     res.send(`Username from cookie: ${username}`);
//   } else {
//     res.send('Cookie not found');
//   }
// });

// // Delete a cookie
// app.get('/deletecookie', (req, res) => {
//   res.clearCookie('username');
//   res.send('Cookie has been deleted');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

