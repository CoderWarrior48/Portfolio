const projects = require('./files/projects');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { updateLanguageServiceSourceFile } = require('typescript');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


data = [
  {
    path: '/',
    type: 'get',
    body: 'Welcome to the app backend!'
    

  },
  {
    path: '/projects',
    type: 'get',
    body: {
      projects: projects
    },
  },
  {
    path:'/search-projects',
    type:'search',
    dataset: projects
  }
]

console.log('Initilizing paths');
data.map(Request);


function search(query) {
  return function(element) {
    for(var i in query) {
      if(query[i] != element[i]) {
        return false;
      }
    }
    return true;
  }
}

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
      app.get(field.path, function(req, res, next) {
        return res.json({ data: projects.projects.filter(search(req.query)) });
      });

  }
}


app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
