import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';



export default function AdminAnnounceContent() {

  const navigate = useNavigate();
  

  const [adminuploads1, setAdminuploads1] = useState([])
  const getAdminuploads1 = async () => {
    const response = await axios.get(`${config.apiUrlPrefix}/adminupload1/`)
    setAdminuploads1(response.data)
  }

  useEffect(() =>{
    getAdminuploads1();
  }, [])

  //Addupload
  const [filecontent1, setFilecontent1] = useState(null)

  const Addupload1 = async () => {
    let fromField = new FormData()

    if(filecontent1 !== null) {
      fromField.append('filecontent1', filecontent1)
    }

    await axios({
      method: 'post',
      url: `${config.apiUrlPrefix}/adminupload1/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate('/superannounce')
    })
  }

  const [filecontent2, setFilecontent2] = useState(null)
  const [adminupload2, setAdminupload2] = useState([])
  const getAdminupload2 = async () => {
    const response = await axios.get(`${config.apiUrlPrefix}/adminupload2/`)
    setAdminupload2(response.data)
  }

  useEffect(() =>{
    getAdminupload2();
  }, [])

  //Addfile
  const AddFilecontent2 = async () => {
    let fromField = new FormData()

    if(filecontent2 !== null) {
      fromField.append('filecontent2', filecontent2)
    }

    await axios({
      method: 'post',
      url: `${config.apiUrlPrefix}/adminupload2/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate('/superannounce')
    })
  }

    return (
    <div>
      <Accordion sx={{ margin: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ตารางการนำเสนอโครงการ รอบที่2 ภาคใต้</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
          <Typography>
            <input
                type='file'
                className='from-control from-control-lg'
                name='filecontent1'
                onChange={(e) => setFilecontent1(e.target.files[0])}/>
              
            <Button variant="contained" component="span" style={{ float: 'right'}} onClick={Addupload1} >Upload</Button>
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
          <Typography>
          <input
              type='file'
              className='from-control from-control-lg'
              name='filecontent1'
              onChange={(e) => setFilecontent2(e.target.files[0])}/>
            <Button variant="contained" component="span" style={{ float: 'right'}} onClick={AddFilecontent2} >Upload</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    );
}
