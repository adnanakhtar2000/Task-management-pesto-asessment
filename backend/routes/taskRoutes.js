const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/Controller');
const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
