import { getAuth } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userIsLogin } from '../../redux/auth/api';
import css from './login.module.css';

type User = {
  auth: any;
  email: string;
  password: string;
};

export const Login = () => {
  const auth = getAuth();
  const dispatch: any = useDispatch();

  console.log('auth', auth.currentUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const email: string = e.currentTarget.elements[0].value;
    const password: string = e.currentTarget.elements[1].value;
    const user: User = { auth, email, password };

    dispatch(userIsLogin(user));
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
    </div>
  );
};
