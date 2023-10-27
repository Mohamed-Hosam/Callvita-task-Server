const { v4: uuidv4 } = require("uuid");

let tasks = [
  {
    id: uuidv4(),
    title: "Learn React",
    description: "Learn how to use react in building web app",
  },
  {
    id: uuidv4(),
    title: "Learn Node",
    description: "Learn how to use node in building server",
  },
  {
    id: uuidv4(),
    title: "Learn Array Manipulation",
    description: "Learn how to manipulate arrays in javascript",
  },
];

exports.getTasks = async (req, res) => {
  try {
    return res.send(tasks);
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};

exports.getTask = async (req, res) => {
  try {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == req.params.id) {
        return res.send(tasks[i]);
      }
    }
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};

exports.create = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  if (!title) {
    return res.status(500).send({ error: "Enter a title." });
  }
  if (!description) {
    return res.status(500).send({ error: "Enter a description." });
  }
  try {
    tasks.push({
      id: uuidv4(),
      title: title,
      description: description,
    });
    return res.send({
      data: tasks[tasks.length - 1],
      msg: `Task Created successfuly`,
    });
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};

exports.delete = async (req, res) => {
  try {
    tasks = tasks.filter((t) => t.id != req.params.id);
    return res.send({ data: tasks, msg: `Task Deleted successfuly` });
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};

exports.update = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  try {
    let pos = -1;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === req.params.id) {
        pos = i;
      }
    }
    if (pos >= 0 && pos < tasks.length) {
      tasks[pos] = {
        id: req.params.id,
        title: title ? title : tasks[pos].title,
        description: description ? description : tasks[pos].description,
      };
      return res.send({ data: tasks[pos], msg: "Task Updated successfuly" });
    } else {
      return res.status(500).send({ error: "Task not available." });
    }
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};

exports.searchTask = async (req, res) => {
  try {
    let result = tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(req.params.search.toLowerCase()) ||
        t.description.toLowerCase().includes(req.params.search.toLowerCase())
    );
    return res.send(result);
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
};
