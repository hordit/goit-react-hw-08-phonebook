import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RoutesRidirect/RestrictedRoute';
import { PrivateRoute } from './RoutesRidirect/PrivateRoute';
import GlobalStyle from './GlobalStyles';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
