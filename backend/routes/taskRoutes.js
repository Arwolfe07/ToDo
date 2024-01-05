const express = require('express');
const { addTask, completeTask, notCompleteTask, allTasks, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/all', protect, allTasks);
router.post('/add', protect, addTask);
router.patch('/done', protect, completeTask);
router.patch('/notdone', protect, notCompleteTask);
router.delete('/delete/:id',protect,deleteTask);
module.exports = router;