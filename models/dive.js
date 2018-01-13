const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};




const diveSchema = new mongoose.Schema({
  location: { type: String, required: true },
  difficulty: { type: String, required: true },
  visibility: { type: String, required: true },
  diveMonth: { type: String, required: true },
  image: { type: String, required: true },
  stars: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}, //'User' has to match what we export the user model as
  comments: [commentSchema]
});


  // check if the user who created the hotel is the same person who is logged in
  //'this' is the instance of the hotel that we are calling the 'belongsTo' method on
  //'user' is the user object that we will pass this method (the user who is logged in)
movieSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Dive', diveSchema);