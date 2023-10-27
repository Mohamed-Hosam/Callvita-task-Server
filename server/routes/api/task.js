const express = require("express");
const router = express.Router();

const taskController = require("../../controllers/taskController");

router.post("/", taskController.create);
router.delete("/:id", taskController.delete);
router.get("/", taskController.getTasks);
router.get("/getTaskbyId/:id", taskController.getTask);
router.get("/search/:search", taskController.searchTask);
router.put("/:id", taskController.update);
module.exports = router;
