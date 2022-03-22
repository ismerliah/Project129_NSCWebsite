import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ContactBarPub from '../components/pubappbar/contactbarpub';
import Link from '@mui/material/Link';
import mail from '../images/mail.png';
import mailAj_sek from '../images/mailAj_sek.png';
import logofb from '../images/logofb.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function PubContact() {
    const preventDefault = (event) => event.preventDefault();

    return (
      <Box>
        <div className='fBannerFix'>
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
          <ContactBarPub/>
          <br/>
          <br/>
          <br/>
          <center>
              <div className='f6' style={{ color: '#0000CC', fontSize: 50}}>
                ติดต่อเรา
              </div>
              <Card sx={{ margin:3, maxWidth: 900 }} >
                  <CardContent>
                    <Typography variant="body2" align='center' sx={{ color:'#0000CC', fontSize: 22, fontFamily: 'Noto Sans Thai' }}>
                      มหาวิทยาลัยสงขลานครินทร์ จังหวัดสงขลา <br/>
                      ชื่อผู้ประสานงาน : อ.เสกสรรค์ สุวรรณมณี และคุณวิมล คำจันทร์ <br/>
                      ที่อยู่ : สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ <br/>
                      เลขที่ 15 ถนนกาญจนวณิชย์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110 <br/>
                      โทรศัพท์ 074 287076 <br/>
                      โทรสาร 074 287076
                    </Typography>
                    <p>
                      <img src={mailAj_sek} alt="mailAj_sek" style={{ maxWidth: 400}}/> <br/>
                      <img src={mail} alt="mail" style={{ maxWidth: 215}}/>
                    </p>
                    <span style={{ fontSize: 22, color: '#0000CC', fontFamily: 'Noto Sans Thai' }}>
                      <img src={logofb} alt="logofb" style={{ maxWidth: 30}}/> &nbsp;
                    </span>
                    <Link href='https://web.facebook.com/groups/NSCThailand' style={{ fontSize: 22, color: '#0000CC', fontFamily: 'Noto Sans Thai' }}>
                        NSC Thailand <br/>
                    </Link>
                    <span style={{ fontSize: 22, color: '#0000CC', fontFamily: 'Noto Sans Thai' }}>
                      <img src={logofb} alt="logofb" style={{ maxWidth: 30}}/> &nbsp;
                    </span>
                    <Link href='https://www.facebook.com/nsc.th' style={{ fontSize: 22, color: '#0000CC', fontFamily: 'Noto Sans Thai' }}>
                        NSC Thailand Southern Region (PSU) <br/>
                    </Link>
                  </CardContent>
              </Card>
          </center>
        </div>
        <br/>
        <br/>
      </Box>

    );
  }
  
  export default PubContact;
