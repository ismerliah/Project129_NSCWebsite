import { Box, Typography } from '@mui/material';
import AdminMainBar from '../components/adminappbar/mainadmin';
import MainBar from '../components/appbar/mainbar';
import ScheduleTable from '../components/scheduletable';

function AdminHome() {
  return (
    <Box >
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
      <AdminMainBar/>
      <br/>
      <br/>
      <br/>
      <center>
      <div className='f6' style={{ color: '#0000CC', fontSize: 50}}>
        กำหนดการการแข่งขัน
      </div>
      <br/>
      <br/>
      <ScheduleTable/>
      </center>
      <br/>
      <br/>
      <br/>
    </Box>
  );
}

export default AdminHome;
