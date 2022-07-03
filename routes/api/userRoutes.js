const router = require('express').Router();
const {
  findAllUsers,
  findUserById,
  updateUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(findAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(findUserById).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;