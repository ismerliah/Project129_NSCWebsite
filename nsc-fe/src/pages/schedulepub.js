import { Box } from '@mui/material';
import ContentMain from '../components/maincardcontent';
import ScheduleBarPub from '../components/pubappbar/schedulebarpub';

function SchedulePub() {
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
        <ScheduleBarPub/>
        <center>
            <br/>
            <br/>
            <br/>
            <br/>
            <ContentMain/>
            <br/>
            <br/>
        </center>
        <br/>
      </Box>
    );
  }
  
  export default SchedulePub;
