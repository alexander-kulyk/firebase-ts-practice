import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodos } from 'redux/todo/opirations';
import { v4 } from 'uuid';

export const ToDoForm = () => {
  const dispatch = useDispatch();
  const todoState = useSelector(state => state.todo.todo);
  console.log('todoState', todoState);

  const handleAddTodo = e => {
    e.preventDefault();
    const text = e.currentTarget.elements[0].value;
    const id = v4();
    const complited = false;
    const newTodoState = [...todoState, { text, id, complited }];
    dispatch(updateTodos(newTodoState));
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
