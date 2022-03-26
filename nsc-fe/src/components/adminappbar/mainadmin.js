import React, { useEffect } from 'react';
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
import AccountCircle from '@mui/icons-material/AccountCircle';

const pages = ['หน้าหลัก', 'รายละเอียดการแข่งขัน', 'ติดต่อเรา'];
const settings = ['รายชื่อโครงการ', 'ออกจากระบบ'];

const AdminMainBar = () => {
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

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token')
    window.location = '/pubhome'
}

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
                    <Button textAlign="center" href='/superhome' sx={{ color: '#004aad', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[0]}</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button textAlign="center" href='/superdetail' sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[1]}</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button textAlign="center" href='/supercontact' sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{pages[2]}</Button>
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
                  href='/superhome'
                  sx={{ my: 2, display: 'block', color: '#004aad', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[0]}
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  href='/superdetail'
                  sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[1]}
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  href='/supercontact'
                  sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 18 }}
                >
                  {pages[2]}
                </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography variant="body2" align='center' sx={{ color:'#0000CC', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>
                      admin
                  </Typography>
                  &nbsp;
                  <AccountCircle fontSize='large' color='primary'/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button href='/superannounce' textAlign="center" sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>ประกาศ</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button href='/superlistproject' textAlign="center" sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{settings[0]}</Button>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Button textAlign="center" sx={{ color: 'black', fontFamily: 'Noto Sans Thai', fontSize: 17}}>{settings[1]}</Button>
                  </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default AdminMainBar;
