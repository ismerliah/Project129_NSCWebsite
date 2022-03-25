import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo1 from '../../images/logo1.jpg';
import logo2 from '../../images/logo2.png';

const pages = ['หน้าหลัก', 'รายละเอียดการแข่งขัน', 'ติดต่อเรา'];
const settings = ['รายละเอียดโครงการ', 'ออกจากระบบ'];

const Appbarlogin = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'white'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src={logo2} alt="logo2" style={{ maxWidth: 50}}/>
              &emsp;
              <img src={logo1} alt="logo1" style={{ maxWidth: 170}}/>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  color: '#000066'
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button textAlign="center" href='/pubhome' sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[0]}</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button textAlign="center" href='/pubdetail' sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[1]}</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button textAlign="center" href='/pubcontact' sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[2]}</Button>
                  </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img src={logo2} alt="logo2" style={{ maxWidth: 50}}/>
              &emsp;
              <img src={logo1} alt="logo1" style={{ maxWidth: 170}}/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  href='/pubhome'
                  sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[0]}
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  href='/pubdetail'
                  sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[1]}
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  href='/pubcontact'
                  sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[2]}
                </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Appbarlogin;
