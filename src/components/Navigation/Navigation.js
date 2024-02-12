import { NavLink } from 'react-router-dom';
import { useAuth } from 'Hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
