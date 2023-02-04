import { getAuth } from 'firebase/auth';
import { registerUser } from 'redux/auth/api';
import { useDispatch } from 'react-redux';
import { store } from 'redux/store';

import css from '../Login/login.module.css';
import '../../firebase';
import React from 'react';

type User = {
  auth: any;
  name: string;
  email: string;
  password: string;
};

type AppDispatch = typeof store.dispatch;

export const Registration = () => {
  const auth = getAuth();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const name: string = e.currentTarget.elements[0].value;
    const email: string = e.currentTarget.elements[1].value;
    const password: string = e.currentTarget.elements[2].value;

    const user: User = { auth, name, email, password };

    dispatch(registerUser(user));
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

// type ToDoItemProps = {
//   item: TodoItem;
//   toggleToDo: (id: string) => void;
// };

// export const ToDoItem: FC<ToDoItemProps> = ({
//   item: { id, title, isDone },
//   toggleToDo,
// }) => (
//   <div>
//     <input type="checkbox" onChange={() => toggleToDo(id)} checked={isDone} />{' '}
//     {title}
//   </div>
// );
