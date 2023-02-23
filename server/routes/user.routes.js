const UserController = require('../controllers/user.controller');
const TodoController = require('../controllers/todo.controller');

module.exports = (app) => {
    app.post("/api/user/register", UserController.register) 
    app.post("/api/user/:id/login", UserController.login) 
    app.get("/api/user/logout", UserController.logout)
    app.post("/api/todo/new", TodoController.createTodo)
    app.get("/api/user/todos", UserController.getUserTodos) 
    app.put("/api/todo/:id/update", TodoController.updateTodo)
    app.delete("/api/todo/:id/delete", TodoController.deleteTodo)
}