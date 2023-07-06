import AppBar from 'components/AppBar/AppBar';
import CenteredLoader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<CenteredLoader color="#fff" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
