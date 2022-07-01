const router = require('express').Router();
const {
    addFriend,
    removeFriend,
} = require('../../controllers/friendController');


// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend).delete(removeFriend);

module.exports = router;