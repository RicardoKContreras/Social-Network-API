const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
  
// Set up POST and Delete route for friends at /api/users/:userId/friends/:friendId
 router.route('/:userId/friends/:friendId')
 .delete(deleteFriend)
 .post(addFriend);
 
module.exports = router;