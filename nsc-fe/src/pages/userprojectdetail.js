import { Box, Container, Typography } from '@mui/material';
import UserBar from '../components/appbar/userbar';
import ContentUser from '../components/usercontent';

function UserProjectDetail() {
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
      <UserBar/>
      <br/>
      <br/>
      <br/>
      <Container className='fBannerFix'>
      <center>
      <div className='f6' style={{ fontSize: 50, color: '#0000CC' }}>รายละเอียดโครงการ</div>
      </center>
      <ContentUser/>
      <br/>
      </Container>
    </Box>
  );
}

export default UserProjectDetail;
