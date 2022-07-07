const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  // createReaction,
  // deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// router.put('/:thoughtId/reaction', createReaction);
// router.delete('/:thougthId/reaction/:reactionId', deleteReaction);

// /api/:thoughtId
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

module.exports = router;