import { getTodos, updateTodos } from 'redux/todo/opirations';

import React from 'react';
import { ToDoForm } from 'components/ToDo/ToDoForm/ToDoForm';
import { ListTodo } from 'components/ToDo/ListTodo/ListTodo';
import { Filters } from 'components/ToDo/Filters/Filters';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTodosByFilter } from 'redux/filters/selectors';

import { Todo } from 'type/type';
import css from 'components/ToDo/ToDo.module.css';

export const ToDo = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(selectTodosByFilter);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handelDeleteTodo = (id: string): void => {
    const newTodos: todo = todos.filter(todo => todo.id !== id);
    dispatch(updateTodos(newTodos));
  };

  const onChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    const { checked } = e.target;

    if (checked === true) {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complited: true };
        }
        return todo;
      });
      dispatch(updateTodos(newTodos));
    } else {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complited: false };
        }
        return todo;
      });
      dispatch(updateTodos(newTodos));
    }
  };

  return (
    <div className={css.wrapper}>
      <ToDoForm />
      <Filters />
      <ListTodo
        handelDeleteTodo={handelDeleteTodo}
        onChangeCheckbox={onChangeCheckbox}
        todos={todos}
      />
    </div>
  );
};
// const newTodos = todos.map(todo => {
//   if (todo.id === id) {
//     return { ...todo, complited: checked === true };
//   }
//   return todo;
// });
