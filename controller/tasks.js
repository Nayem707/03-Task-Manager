const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all Tasks");
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTasks = (req, res) => {
  res.send("update Task");
};

const deleteTasks = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
