const router = require('express').Router();
const {
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionController');


// /api/reactions/:userId
router.route('/:userId/:thoughtId').post(createReaction).delete(deleteReaction);

module.exports = router;