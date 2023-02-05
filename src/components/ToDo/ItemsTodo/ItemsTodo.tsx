import React, { FC } from 'react';
import css from 'components/ToDo/ToDo.module.css';
import { Todo } from 'type/type';

interface ItemProps {
  handelDeleteTodo: (id: string) => void;
  onChangeCheckbox: (e: React.SyntheticEvent, id: string) => Todo;
  todo: Todo;
}

export const ItemTodo: FC<ItemProps> = ({
  handelDeleteTodo,
  onChangeCheckbox,
  todo,
}) => {
  const { id, text, complited } = todo;
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
