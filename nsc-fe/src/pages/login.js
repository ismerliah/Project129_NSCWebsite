import React, { useCallback, useState } from 'react';
import axiosInstance from '../components/axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Appbarlogin from '../components/appbar/appbarlogin';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login() {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    id: '',
    username: '',
    password: '',
    is_active: '',
    is_staff: '',
    is_admin: '',
    is_member: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    axiosInstance
      .post(`token/`, {
        username: formData.username,
        password: formData.password,
        id: formData.id,
        is_active: formData.is_active,
        is_staff: formData.is_staff,
        is_admin: formData.is_admin,
        is_member: formData.is_member,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('is_active', res.data.is_active);
        localStorage.setItem('is_staff', res.data.is_staff);
        localStorage.setItem('is_admin', res.data.is_admin);
        localStorage.setItem('is_member', res.data.is_member);

        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token');
        
        if (res.data.is_admin == Boolean("True")) {
          navigate('/superhome');
          alert('Login Success!')
        }
        else if (res.data.is_member == Boolean("True")) {
          navigate('/userhome');
          alert('Login Success!')
        }
        else if (res.data.is_staff == Boolean("True")) {
          navigate('/superhome');
          alert('Login Success!')
        }
        // console.log(formData)
        // console.log(res.data)
        
        // console.log('is_member:', res.data.is_member)
        // console.log('is_staff:', res.data.is_staff)
        // console.log('is_active:', res.data.is_active)
      })
      .catch((error) => {
        alert('Login Failed!\nPlease enter the correct username and password.')
        // console.log(formData.username)
        console.error('Error:', error.response.data);
      });
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className='topbanner'>
        <div style={{ 
          fontFamily: 'Sarabun', 
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25, 
          textAlign: 'center', 
          verticalAlign: 'middle',
          paddingTop: 7}}>
            NSC2022 SOUTHERN THAILAND WEB
        </div>
      </div>
        <Appbarlogin/>
        <Container className='fBannerFix' component="main" maxWidth="xs">
          <CssBaseline />
            <Box
              sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              }}
            >
            <Typography className='f6' component="h1" variant="h8">
              NSC
            </Typography>
            <Typography className='f6' component="h1" variant="h5">
              Southern Thailand Web
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="รหัสโครงการ / ชื่อบัญชีผู้ใช้"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                เข้าสู่ระบบ
              </Button>
            </Box>
            </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
  );
}

export default Login