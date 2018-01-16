const router = require('express').Router();
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const dives = require('../controllers/dives');
const secureRoute = require('../lib/secureRoute');


router.get('/', (req, res) => res.render('statics/index'));


router.route('/dives')
  .get(dives.index)
  .post(secureRoute, dives.create);


router.route('/search')
  .get(dives.search);



//Group restful resources(models together in the routes file)
//i.e
//MOVIES
//index
//show

//THEN
//User
//index
//show

//34-35 Must go above /movies/:id (see line 37-40) as if a request is made to /movies/:id
router.route('/dives/new')
  .get(secureRoute, dives.new);

router.route('/dives/:id')
  .get(dives.show)
  .put(secureRoute, dives.update)
  .delete(secureRoute, dives.delete);

router.route('/dives/:id/edit')
  .get(secureRoute, dives.edit);

router.route('/dives/:id/comments')
  .post(dives.createComment);

router.route('/dives/:id/comments/:commentId')
  .delete(dives.deleteComment);




router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

//Sessions.new = getting form for user to input login deatils
//Sessions.create = the act of creating the new session for the user
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());







module.exports = router;
