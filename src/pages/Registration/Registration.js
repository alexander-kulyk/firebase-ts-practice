import { getAuth } from 'firebase/auth';
import { registerUser } from 'redux/auth/api';
import css from '../Login/login.module.css';
import '../../firebase';
import { useDispatch } from 'react-redux';

export const Registration = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements[0].value;
    const email = e.currentTarget.elements[1].value;
    const password = e.currentTarget.elements[2].value;

    dispatch(registerUser({ auth, name, email, password }));
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
    </div>
  );
};
