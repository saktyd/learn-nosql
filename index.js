const PouchDB = require('pouchdb');
const db = new PouchDB('my_database');

const addUser = name => {
  const newUser = {
    _id: '1',
    name: name
  };
  db.put(newUser);
};

const getUser = id => {
  db.get(id).then(user => {
    console.log(user);
  });
};

addUser('Sakti');
getUser('1');
