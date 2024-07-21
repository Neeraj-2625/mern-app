const express = require('express');
const userDetails = require('../controller/users');

const router = express.Router();

router
    .get('/',userDetails.getAllUsers)
    .get('/:id',userDetails.getUser)
    .post('/',userDetails.createUser)
    .put('/:id',userDetails.replaceUser)
    .patch('/:id',userDetails.updateUser)
    .delete('/:id',userDetails.deleteUser)

exports.router = router;