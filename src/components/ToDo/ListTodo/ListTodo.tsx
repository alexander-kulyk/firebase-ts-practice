import React, { FC, SyntheticEvent } from 'react';
import { todo } from 'type/type';
import { ItemTodo } from '../ItemsTodo/ItemsTodo.tsx';

interface ItemsProps {
  handelDeleteTodo: (id: string) => void;
  onChangeCheckbox: (e: SyntheticEvent, id: string) => todo;
  todos: todo;
}

export const ListTodo: FC<ItemsProps> = ({
  handelDeleteTodo,
  onChangeCheckbox,
  todos,
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <ItemTodo
          key={todo.id}
          handelDeleteTodo={handelDeleteTodo}
          onChangeCheckbox={onChangeCheckbox}
          todo={todo}
        />
      ))}
    </ul>
  );
};
