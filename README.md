# Callvita task-Server
 Simple server that handles task related CRUD operations

 To run the server in
 
 development mode: npm run dev
 
 production mode: npm run start


Required APIs:

 Get all tasks: get("localhost:5000/api/tasks/")
 
 Get task by ID: get("localhost:5000/api/tasks/getTaskbyId/:id")
 
 Get task by title or description: get("localhost:5000/api/tasks/search/:search")
 
 Create a new task: post("localhost:5000/api/tasks" + body)
 
 Update an existing task: put("localhost:5000/api/tasks/:id" + body)
 
 Delete a task: delete("localhost:5000/api/tasks/:id")
