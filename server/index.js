const express = require('express')
const app = express()

const task = require("./routes/api/task");

app.use(express.json())

app.use("/api/task", task);

app.listen(5000, () => console.log(`Server up and running on port 5000 `));

