import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'redux/auth/api';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const name = useSelector(state => state.auth.user.name);

  const handleLogout = () => {
    dispatch(userLogout(auth));
  };
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};
