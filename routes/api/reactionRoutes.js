const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');


// /api/users/:userId
router.route('/:userId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;