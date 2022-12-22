import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import { Appbar } from 'components/Appbar/Appbar';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <Box>
      <Appbar />
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </Box>
  );
};
