import Box from 'components/Box';
import { NavItem } from './Appbar.styled';

export const Appbar = () => {
  return (
    <Box boxShadow="5px 10px #888888" as="header" bg="#e7e3e3" pl="30px">
      <Box as="nav" width="100%" pb="30px" pt="30px">
        <NavItem to="/">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Box>
    </Box>
  );
};
