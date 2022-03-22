import { Box } from '@mui/material';
import ActionAreaCard from '../components/card';
import BasicTable from '../components/detailstable';
import '../App.css';
import DetailBar from '../components/appbar/detailbar';
import { Container, Typography } from '@mui/material';

function UserDetail() {
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
      <DetailBar/>
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

export default UserDetail;
