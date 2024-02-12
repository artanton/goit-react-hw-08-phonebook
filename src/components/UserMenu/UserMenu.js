import { useAuth } from 'Hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'reduxFiles/auth/operations';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
