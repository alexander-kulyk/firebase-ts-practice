import React from 'react';
import css from 'components/ToDo/ToDo.module.css';
import { todo } from 'type/type';

type ItemTodo = {
  id: string;
  text: string;
  complited: boolean;
};

interface ItemsProps {
  handelDeleteTodo: (id: string) => void;
  onChangeCheckbox: (e: React.SyntheticEvent, id: string) => todo;
  todos: ItemTodo;
}

export const ItemsTodo: React.FC<ItemsProps> = ({
  handelDeleteTodo,
  onChangeCheckbox,
  todos,
}) => {
  const { id, text, complited } = todos;
  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        onChange={e => onChangeCheckbox(e, id)}
      />
      <span className={css.span}>{text}</span>
      <span className={css.span}>completed:{complited ? 'true' : 'false'}</span>
      <button type="button" onClick={() => handelDeleteTodo(id)}>
        del
      </button>
    </li>
  );
};
