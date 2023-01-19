import { Link, Outlet } from 'react-router-dom';
import css from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <header>
        <div className={css.wrapperLink}>
          <Link to="/">Home</Link>
          <Link to="login">login</Link>
          <Link to="registration">registration</Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};
