import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import config from '../config';

export default function AnnounceContent() {

  const [adminuploads1, setAdminuploads1] = useState([])
  const getAdminuploads1 = async () => {
    const response = await axios.get(`${config.apiUrlPrefix}/adminupload1/`)
    setAdminuploads1(response.data)
    // console.log(adminuploads1)
    // console.log(response.data)
  }

  useEffect(() =>{
    getAdminuploads1();
  }, [])

  const [adminupload2, setAdminupload2] = useState([])
  const getAdminupload2 = async () => {
    const response = await axios.get(`${config.apiUrlPrefix}/adminupload2/`)
    setAdminupload2(response.data)
    // console.log(response.data)
  }

  useEffect(() =>{
    getAdminupload2();
  }, [])
  if (adminuploads1.length >= 1 && adminupload2.length >= 1) {
    return         <div>
    <Accordion sx={{ margin: 3}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ตารางการนำเสนอโครงการ รอบที่2 ภาคใต้</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {
          adminuploads1.map((adminupload1,index) => (
            <ul key={index}>
              <object data={adminupload1.filecontent1} type="application/pdf" width="300" height="200">
              <a href={adminupload1.filecontent1}>Schedule-ตารางการนำเสนอโครงการการแข่งขันรอบ2_ภาคใต้.pdf</a>
              </object>
            </ul>
          ))
        }
      <br/>
      <br/>
      <br/>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ margin: 3}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ผลการแข่งขันรอบที่ 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {
          adminupload2.map((adminupload2,index) => (
            <ul key={index}>
              <object data={adminupload2.filecontent2} type="application/pdf" width="300" height="200">
              <a href={adminupload2.filecontent2}>ประกาศผลรอบ2-ภาคใต้-20220209_NSC2022_SecondRound_South.pdf</a>
              </object>
            </ul>
          ))
        }
      <br/>
      <br/>
      <br/>
        </Typography>
      </AccordionDetails>
    </Accordion>
      </div>
  } else if (adminuploads1.length >= 1) {
    return (
              <div>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ตารางการนำเสนอโครงการ รอบที่2 ภาคใต้</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        {
          adminuploads1.map((adminupload1,index) => (
            <ul key={index}>
              <object data={adminupload1.filecontent1} type="application/pdf" width="300" height="200">
              <a href={adminupload1.filecontent1}>Schedule-ตารางการนำเสนอโครงการการแข่งขันรอบ2_ภาคใต้.pdf</a>
              </object>
            </ul>
          ))
        }
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ผลการแข่งขันรอบที่ 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>รอการประกาศ</Typography>
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    )
  } else if (adminupload2.length >= 1) {
    return (
              <div>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ตารางการนำเสนอโครงการ รอบที่2 ภาคใต้</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>รอการประกาศ</Typography>
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ผลการแข่งขันรอบที่ 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        {
          adminupload2.map((adminupload2,index) => (
            <ul key={index}>
              <object data={adminupload2.filecontent2} type="application/pdf" width="300" height="200">
              <a href={adminupload2.filecontent2}>ประกาศผลรอบ2-ภาคใต้-20220209_NSC2022_SecondRound_South.pdf</a>
              </object>
            </ul>
          ))
        }
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    )
  }
    return (
        <div>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ตารางการนำเสนอโครงการ รอบที่2 ภาคใต้</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>รอการประกาศ</Typography>
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ margin: 3}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ผลการแข่งขันรอบที่ 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>รอการประกาศ</Typography>
        <br/>
        <br/>
        <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    );
}
