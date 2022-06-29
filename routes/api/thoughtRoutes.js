const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
} = require('../../controllers/thoughtController');


// /api/users/:userId/thoughts
router.route('/:userId/thoughts').get(getAllThoughts).post(createThought);

module.exports = router;