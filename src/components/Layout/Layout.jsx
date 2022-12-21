import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import { Appbar } from 'components/Appbar/Appbar';

export const Layout = () => {
  return (
    <Box>
      <Appbar />
      <Outlet />
    </Box>
  );
};
