import { getAuth } from 'firebase/auth';
import { userIsLogin } from 'service/api';
import css from './login.module.css';
const auth = getAuth();

export const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;

    userIsLogin(auth, email, password);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="name" />
        <input type="password" name="password" placeholder="email" />
        <button>login</button>
      </form>
    </div>
  );
};
