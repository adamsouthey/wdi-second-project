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
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  comments: [commentSchema]
});



diveSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Dive', diveSchema);
