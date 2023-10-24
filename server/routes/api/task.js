const express = require("express");
const router = express.Router();

const taskController = require('../../controllers/taskController');

router.post('/', taskController.create)
router.delete('/:id', taskController.delete)
router.get("/", taskController.getTasks)
router.get("/:id", taskController.getTask)
router.put("/:id", taskController.update)
module.exports = router;