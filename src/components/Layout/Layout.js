import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import css from './layout.module.css';

export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <div className={css.wrapperLink}>
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="user">User Profile</Link>
              <Link to="todo">To Do</Link>
              <UserMenu />
            </>
          ) : (
            <AuthNav />
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};
