import { Box, Typography } from '@mui/material';
import ActionAreaCard from '../components/card';
import BasicTable from '../components/detailstable';
import '../App.css';
import AdminDetailBar from '../components/adminappbar/detailadmin';
import MainBar from '../components/appbar/mainbar';

function AdminDetail() {
  return (
    <Box>
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
      <AdminDetailBar/>
      <center>
          <br/>
          <br/>
          <br/>
          <div className='f6' style={{ color: '#0000CC', fontSize: 50}} >
              หมวดการแข่งขัน
          </div>
          <br/>
          <BasicTable/>
          <br/>
          <br/>
          <br/>
          <div className='f6' style={{ color: '#0000CC', fontSize: 50}} >
              คุณสมบัติผู้สมัคร
          </div>
          <ActionAreaCard/>
      </center>
      <br/>
      <br/>
    </Box>
  );
}

export default AdminDetail;
