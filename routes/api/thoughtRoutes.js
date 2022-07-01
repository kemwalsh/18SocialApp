const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
} = require('../../controllers/thoughtController');


// /api/thoughts/:userId
router.route('/:userId').get(getAllThoughts).post(createThought);

module.exports = router;