import * as React from 'react';
import { Container, Link } from '@mui/material';
import AdminContent from '../components/admindetails';
import AdminMainBar from '../components/adminappbar/mainadmin';


function AdminProjectDetail() {
  return (
    <div>
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
      <Container className='fBannerFix'>
      <center>
      <div className='f6' style={{ fontSize: 50, color: '#0000CC' }}>รายละเอียดโครงการ</div>
      </center>
      <AdminContent/>
      <br/>
      </Container>
    </div>
    )
}
export default AdminProjectDetail;
