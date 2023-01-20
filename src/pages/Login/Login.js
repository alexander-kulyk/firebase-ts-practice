import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userIsLogin, userLogout } from 'service/api';
import css from './login.module.css';

export const Login = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  console.log('auth', auth.currentUser);

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;

    dispatch(userIsLogin({ auth, email, password }));
  };

  const handleLogout = () => {
    dispatch(userLogout(auth));
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};
