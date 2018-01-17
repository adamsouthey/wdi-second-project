const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Dive = require('../models/dive');
const User = require('../models/user');

Dive.collection.drop();
User.collection.drop();


User
.create([{
  firstName: 'Mike',
  lastName: 'Southey',
  username: 'mikesouthey',
  email: 'mike.@ga.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  return Dive.create([{
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://flashwallpapers.com/wp-content/uploads/2015/10/Scuba-Dive.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }]);
})


.then((dives) => {
  console.log(`${dives.length} dive profiles created!`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});
