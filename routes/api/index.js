const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const UserRoutes = require('./user-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', UserRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;