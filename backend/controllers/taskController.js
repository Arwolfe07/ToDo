const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Task = require("../models/task");

module.exports.allTasks = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const user = await User.findById(_id).populate('tasks');
        res.status(200).json({ tasks: user.tasks });
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
})

module.exports.addTask = asyncHandler(async (req, res) => {
    const { title, date } = req.body;
    const { _id } = req.user;
    try {
        const task = await Task.create({ title, date });
        const user = await User.findByIdAndUpdate(_id, { $push: { tasks: task._id } }, { new: true }).populate('tasks');
        res.status(200).json({ tasks: user.tasks });
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
});

module.exports.completeTask = asyncHandler(async (req, res) => {
    const { taskId } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
        res.status(200).json({ task: task })
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
});

module.exports.notCompleteTask = asyncHandler(async (req, res) => {
    const { taskId } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, { completed: false }, { new: true });
        res.status(200).json({ task: task })
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
});

module.exports.deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id, { new: true });
        res.status(201).json({ task: task })
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
})