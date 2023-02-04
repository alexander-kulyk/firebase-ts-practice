import React from 'react';
import { todo } from 'type/type';
import { ItemsTodo } from '../ItemsTodo/ItemsTodo.tsx';

interface ItemsProps {
  handelDeleteTodo: (id: string) => void;
  onChangeCheckbox: (e: React.SyntheticEvent, id: string) => todo;
  todos: todo;
}

export const ListTodo: React.FC<ItemsProps> = ({
  handelDeleteTodo,
  onChangeCheckbox,
  todos,
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <ItemsTodo
          key={todo.id}
          handelDeleteTodo={handelDeleteTodo}
          onChangeCheckbox={onChangeCheckbox}
          todos={todo}
        />
      ))}
    </ul>
  );
};
