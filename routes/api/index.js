const router = require('express').Router();
const UserRoutes = require('./user-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/users', UserRoutes);

module.exports = router;