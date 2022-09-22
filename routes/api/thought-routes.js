const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought
  } = require('../../controllers/thought-controller');

// Create Thought
router
  .route('/:userId')
  .post(addThought);

//Get all Thoughts
  router
  .route('/')
  .get(getAllThoughts);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought);



// /api/comments/<pizzaId>/<commentId>
 router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;