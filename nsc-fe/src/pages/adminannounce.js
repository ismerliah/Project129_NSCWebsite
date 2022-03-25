import { Box, Container } from '@mui/material';
import AnnounceadminBar from '../components/adminappbar/announceadmin';
import AdminAnnounceContent from '../components/adminannouncecontent';
import MainBar from '../components/appbar/mainbar';

function AdminAnnounce() {
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
        <AnnounceadminBar/>
        <br/>
        <br/>
        <br/>
        <Container className='fBannerFix'>
        <center>
        <div className='f6' style={{ fontSize: 50, color: '#0000CC' }}>ประกาศ</div>
        </center>
        <AdminAnnounceContent/>
          <br/>
        </Container>       
    </Box>
  );
}

export default AdminAnnounce;
