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
    image: 'https://www.responsibletravel.com/imagesclient/L_139757.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0njD1bftVVhU2JKr90MwhJLpJjjR3KJSfQi47vCuo_U6RS0Gy',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.cubatravel.ie/images/cuba_diving_2/travelfinderss',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://booktocuba.com/media/catalog/product/c/a/cayo-blanco-snorkeling.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://www.cheapflightslab.com/wp-content/uploads/2016/08/bonaire-diving.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.casa-22.com/wp-content/uploads/2016/11/Snorkeling-Dominican-Republic.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://1.bp.blogspot.com/-OhpzzejbVm8/URR636k0UPI/AAAAAAAAEs8/uXrRdacW7AU/s1600/Diving+in+Varadero+Cuba.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://learnscubachicago.org/wp-content/uploads/2016/08/Cuba-Scuba-e1472174858771-1024x683.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://cubatours.online/wp-content/uploads/2016/12/diving-1-1024x687.jpg',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnsjtDBJdash8AcCznzjJf9CHMt_KwbKfdNdmmiVqimzoq6LKVQ',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2AvOC-2bo5r8k7Q2HdMxJpEirxTsBwV7upwQNe69D8dDrolS3g',
    stars: 5,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Barcelona',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.atlantisthepalm.com/-/media/kws-atp/images/marine-and-waterpark/dolphin-bay/dolphin-scuba-dive/hero/dolphinscubadive-hero-main.jpg?la=en-gb&v1',
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
