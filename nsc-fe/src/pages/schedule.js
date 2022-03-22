import { Box, Typography } from '@mui/material';
import ScheduleBar from '../components/appbar/schedulebar';
import ContentMain from '../components/maincardcontent';

function Schedule() {
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
        <ScheduleBar/>
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
  
  export default Schedule;
