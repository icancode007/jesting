const TodoController = require('../../controllers/todo');
const TodoModel = require('../../model/todo');

TodoModel.create = jest.fn();

describe('todo.controller', () => {
  it('has a createTodo function defined', () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it('should call TodoModel.create', () => {
    expect(TodoModel.create).toBeCalled();
  })
})
