import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

export const ErrorBoundaryComponent = () => {

  const location = useLocation();

  return (
  <ErrorBoundary FallbackComponent={ErrorPage} key={location.pathname}>
    <Outlet />
  </ErrorBoundary>
  );
};