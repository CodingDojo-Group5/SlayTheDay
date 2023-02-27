const UserController = require('../controllers/user.controller');
const TodoController = require('../controllers/todo.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = (app) => {
    app.post("/api/user/register", UserController.register) 
    app.post("/api/user/login", UserController.login) 
    app.get("/api/user/logout", UserController.logout)
    app.post("/api/todo/new", authenticate, TodoController.createTodo)
    app.get("/api/user/todos", authenticate, UserController.getUserTodos)
    app.get("api/todo/:id", authenticate, TodoController.getOneTodo) 
    app.put("/api/todo/:id/update", authenticate, TodoController.updateTodo)
    app.delete("/api/todo/:id/delete", authenticate, TodoController.deleteTodo)
}