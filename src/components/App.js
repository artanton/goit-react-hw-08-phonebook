import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { PrivateRoute } from './PrivatRouts';
import { RestrictedRoute } from './RestricedRoute';
import { refreshUser } from 'reduxFiles/auth/operations';
import { useAuth } from '../Hooks/useAuth';



const HomePage = lazy(() => import('../page/Home'));
const RegisterPage = lazy(() => import('../page/Register'));
const LoginPage = lazy(() => import('../page/Login'));
const ContactsPage = lazy(() => import('../page/YourContacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
