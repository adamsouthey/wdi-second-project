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
  firstName: 'Adam',
  lastName: 'Southey',
  username: 'AdamSouthey',
  email: 'adamjsouthey@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  return Dive.create([{
    location: 'Makena Landing',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg',
    stars: 5,
    latitude: '20.654321270',
    longitude: '156.4408171'
  }, {
    location: 'Sea Tiger',
    createdBy: users[0],
    difficulty: 'Easy',
    visibility: 'Clear',
    diveMonth: 'March',
    image: 'http://xtremegapyear.co.uk/wp-content/uploads/2014/11/Diving-in-Belize-4.jpg',
    stars: 5,
    latitude: '21.16792',
    longitude: '157.597'
  }, {
    location: 'Corsair',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'December',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0njD1bftVVhU2JKr90MwhJLpJjjR3KJSfQi47vCuo_U6RS0Gy',
    stars: 4,
    latitude: '41.3851',
    longitude: '2.1734'
  }, {
    location: 'Tahanea',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/07/04/14/hombre20en20llamas20-20one20of20the20solitary20statues.jpg',
    stars: 3,
    latitude: '16.50',
    longitude: '144.42'
  }, {
    location: 'Fakarava',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://booktocuba.com/media/catalog/product/c/a/cayo-blanco-snorkeling.jpg',
    stars: 1,
    latitude: '16.311',
    longitude: '145.27'
  }, {
    location: 'Tahiti',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://www.cheapflightslab.com/wp-content/uploads/2016/08/bonaire-diving.jpg',
    stars: 3,
    latitude: '17.338',
    longitude: '149.377'
  }, {
    location: 'Canyons',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://www.casa-22.com/wp-content/uploads/2016/11/Snorkeling-Dominican-Republic.jpg',
    stars: 5,
    latitude: '17.291',
    longitude: '149.51'
  }, {
    location: 'Ray Corridor',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'May',
    image: 'http://1.bp.blogspot.com/-OhpzzejbVm8/URR636k0UPI/AAAAAAAAEs8/uXrRdacW7AU/s1600/Diving+in+Varadero+Cuba.jpg',
    stars: 5,
    latitude: '18.305',
    longitude: '174.04'
  }, {
    location: 'Mushrooms',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'http://learnscubachicago.org/wp-content/uploads/2016/08/Cuba-Scuba-e1472174858771-1024x683.jpg',
    stars: 4,
    latitude: '18.402',
    longitude: '174.033'
  }, {
    location: 'Indonesia Komodo',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnsjtDBJdash8AcCznzjJf9CHMt_KwbKfdNdmmiVqimzoq6LKVQ',
    stars: 4,
    latitude: '8.2440',
    longitude: '119.1924'
  }, {
    location: 'Gili Air',
    createdBy: users[0],
    difficulty: 'Easy',
    visibility: 'Clear',
    diveMonth: 'September',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2AvOC-2bo5r8k7Q2HdMxJpEirxTsBwV7upwQNe69D8dDrolS3g',
    stars: 5,
    latitude: '8.215',
    longitude: '116.54'
  }, {
    location: 'Similan',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'April',
    image: 'https://www.atlantisthepalm.com/-/media/kws-atp/images/marine-and-waterpark/dolphin-bay/dolphin-scuba-dive/hero/dolphinscubadive-hero-main.jpg?la=en-gb&v1',
    stars: 2,
    latitude: '7.495',
    longitude: '98.173'
  }, {
    location: 'Addu Atoll Maldives',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'June',
    image: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/07/04/14/hombre20en20llamas20-20one20of20the20solitary20statues.jpg',
    stars: 4,
    latitude: '38.44',
    longitude: '73.0697'
  }, {
    location: 'Andaman Sea',
    createdBy: users[0],
    difficulty: 'Hard',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsNEFVINV0k5zzyNQ6RRl21tKmMcKStNxuykZxOwNtFtNz5eWsRg',
    stars: 5,
    latitude: '8.264',
    longitude: '119.34'
  }, {
    location: 'Vavu',
    createdBy: users[0],
    difficulty: 'Easy',
    visibility: 'Clear',
    diveMonth: 'January',
    image: 'https://phuquocislandvacation.com/wp-content/uploads/2015/02/Scuba-Diving1.jpg',
    stars: 3,
    latitude: '18.395',
    longitude: '174.041'
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
