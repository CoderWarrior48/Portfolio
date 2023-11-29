const newsFeed = require('./files/newsfeed');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/book', (req, res) => {
//   const book = req.body;

//   // Output the book to the console for debugging
//   console.log(pages);
//   books.push(pages);

//   res.send('Book is added to the database');
// });


data = [
  {
    path: '/projects',
    type: 'get',
    body: {
      accounts,
    },
  },
]

console.log('Initilizing paths');
data.map(Request);

function Request(field) {
  console.log(`\x1b[32m${field.path} is running as ${field.type}:`);
  console.log(`\x1b[90m\n${JSON.stringify(field.body)}`);

  switch (field.type) {
    case 'get':
      app.get(field.path, (req, res) => {
        res.json(field.body);
        console.log('GETting data...');
      });
    case 'post':
      app.post(field.path, (req, res) => {
        console.log('POSTing data...');
        console.log('Data: ', req.body);
        field.body.accounts.push(req.body);
        console.log('\nUpdated accounts:\n', field.body.accounts);
        console.log(
          "\nAccounts including 'd':\n",
          field.body.accounts.filter(function (user) {
            return user.username.includes('d');
          })
        );

        res.json(field.body.accounts);
      });
    case 'search':
      app.post(field.path, (req, res) => {
        console.log('SEARCHing data...');
        isAccount = field.body.accounts.some(function (user) {
          console.log(user.username == req.body.username);
          return user.username == req.body.username;
        });

        console.log(isAccount);

        if (isAccount != false) {
          isPassword = field.body.accounts.some(function (user) {
            return user.password == req.body.password;
          });

          if (isPassword != false) {
            console.log('Corrrect credentials');
            return true;
          } else {
            console.error('Incorrect password');
            return false;
          }
        } else {
          console.error('Username not found');
          return false;
        }
      });
  }
}

app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
