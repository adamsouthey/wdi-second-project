const Dive = require('../models/dive');


function indexRoute(req, res, next) {
  Dive
    .find()
    .sort() // to order how the data appears on the browser
    .exec()
    .then((dives) => res.render('dives/index', { dives }))
    .catch(next);
}

//Search function
function searchLocation (req,res) {
  const query = {};
  if(req.query.location) query.location = req.query.location;
  if(req.query.stars) query.stars = req.query.stars;


  Dive.find(query)
    .exec()
    .then((dives) => {
      if(!dives) return res.status(404).end();

      res.render('dives/index', {dives});
    })
    .catch(() =>{
      res.status(500).end();
    });
}




function newRoute(req, res) {
  return res.render('dives/new');
}

function createRoute(req, res, next) {
  console.log(req.body);


  req.body.createdBy = req.user;

  Dive
    .create(req.body)
    .then(() => res.redirect('/dives'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/dives/new', err.toString());
      }
      next(err);
    });
}

function showRoute(req, res, next) {
  Dive
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((dive) => {
      console.log(dive);
      if(!dive) return res.notFound();
      return res.render('dives/show', { dive });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Dive
    .findById(req.params.id)
    .exec()
    .then((dive) => {
      if(!dive) return res.notFound();
      return res.render('dives/edit', { dive });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Dive
    .findById(req.params.id)
    .exec()
    .then((dive) => {
      if(!dive) return res.notFound();

      dive = Object.assign(dive, req.body);

      return dive.save();
    })
    .then(() => res.redirect(`/dives/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/dives/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Dive
    .findById(req.params.id)
    .exec()
    .then((dive) => {
      if(!dive) return res.notFound();
      return dive.remove();
    })
    .then(() => res.redirect('/dives'))
    .catch(next);
}

// CREATE A COMMENT --->
function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user; //attach the logged in user to the body of the request

  Dive
    .findById(req.params.id)
    .exec()
    .then((dive) => {
      if(!dive) return res.notFound();

      dive.comments.push(req.body); // pushing the comments into the body
      return dive.save();
    })
    .then((dive) => {
      res.redirect(`/dives/${dive.id}`);
    })
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Dive
    .findById(req.params.id)
    .exec()
    .then((dive) => {
      if(!dive) return res.notFound();

      const comment = dive.comments.id(req.params.commentId);
      comment.remove();

      return dive.save();
    })
    .then((dive) => {
      res.redirect(`/dives/${dive.id}`);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  search: searchLocation,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute

};
