const express = require('express')
const router = express.Router();
const crudController = require('./../Controllers/crudController')

    router.get('/all', crudController.allTodo)
    router.post('/add', crudController.addTodo)

router
    .route('/:id')
    .delete(crudController.deleteTodo)
    .patch(crudController.editTodo)

module.exports = router;