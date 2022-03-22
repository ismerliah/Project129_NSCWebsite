import { Box, Container } from '@mui/material';
import AnnounceBar from '../components/appbar/announcebar';
import AnnounceContent from '../components/announcecontent';

function Announce() {
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
        <AnnounceBar/>
        <br/>
        <br/>
        <br/>
        <Container className='fBannerFix'>
        <center>
        <div className='f6' style={{ fontSize: 50, color: '#0000CC' }}>ประกาศ</div>
        </center>
        <AnnounceContent/>
          <br/>
        </Container>    
    </Box>
  );
}

export default Announce;
