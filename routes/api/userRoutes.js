const router = require('express').Router();
const {
  findAllUsers,
  findUserById,
  updateUser,
  createUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(findAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(findUserById).delete(deleteUser).put(updateUser);

module.exports = router;