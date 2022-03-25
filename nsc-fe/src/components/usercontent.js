import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import config from '../config';

function UserContent() {
  const [detail, setDetail] = useState("");

  const { id } = useParams();

  const getDetail = async () => {
    const { data } = await axios.get(`${config.apiUrlPrefix}/detail/${id}`)
    // console.log(data)
    setDetail(data)

  }

  useEffect(() => {
    getDetail();
  }, [])

  function getcer(data) {
    const promise = new Promise((resolve, reject) => {
      setCerjtoshow(data, resolve);
    });
  }

  const [ cerjtoshow , setCerjtoshow ] = useState()
  const [ cermem1toshow , setCermem1toshow ] = useState()
  const [ cermem2toshow , setCermem2toshow ] = useState()
  const [ cermem3toshow , setCermem3toshow ] = useState()

  const [certificate, setCertificate] = useState([])
  const getCertificate = async () => {
    const { data } = await axios.get(`${config.apiUrlPrefix}/certificate/${id}/`)
    // console.log(data)
    setCertificate(data)
    // console.log(data)
    // console.log(certificate)
    let cerjtocheck = data.certificateAj;
    let cermem1tocheck = data.certificateMem1;
    let cermem2tocheck = data.certificateMem2;
    let cermem3tocheck = data.certificateMem3;

    // console.log(cerjtocheck)
    // console.log(typeof cerjtocheck)

    let cerj;
    let cermem1;
    let cermem2;
    let cermem3;

    let cerjname;
    let cermem1name;
    let cermem2name;
    let cermem3name;

    if (!cerjtocheck) {
      cerjname = '-'
    } else if (cerjtocheck.includes("http")) {
      cerjname = cerjtocheck.split(/(\\|\/)/g).pop()
    }
    if (!cermem1tocheck) {
      cermem1name = '-'
    } else if (cermem1tocheck.includes("http")) {
      cermem1name = cermem1tocheck.split(/(\\|\/)/g).pop()
    }
    if (!cermem2tocheck) {
      cermem2name = '-'
    } else if (cermem2tocheck.includes("http")) {
      cermem2name = cermem2tocheck.split(/(\\|\/)/g).pop()
    }
    if (!cermem3tocheck) {
      cermem3name = '-'
    } else if (cermem3tocheck.includes("http")) {
      cermem3name = cermem3tocheck.split(/(\\|\/)/g).pop()
    }

    if (!cerjtocheck) {
      cerj = <div></div>
    } else if (cerjtocheck.includes("http")) {
      cerj = <div>
                <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรอาจารย์ที่ปรึกษา :</Typography>
                <object data={data.certificateAj} type="application/pdf" width="30" height="20">
                  <a href={data.certificateAj}>{cerjname}</a>
                </object>
                <br/>
                <br/>
              </div>
    }
    if (!cermem1tocheck) {
      cermem1 = <div></div>
    } else if (cermem1tocheck.includes("http")) {
      cermem1 = <div>
                <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่1 :</Typography>
                <object data={data.certificateMem1} type="application/pdf" width="30" height="20">
                  <a href={data.certificateMem1}>{cermem1name}</a>
                </object>
                <br/>
                <br/>
              </div>
    }
    if (!cermem2tocheck) {
      cermem2 = <div></div>
    } else if (cermem2tocheck.includes("http")) {
      cermem2 = <div>
                <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่2 :</Typography>
                <object data={data.certificateMem2} type="application/pdf" width="30" height="20">
                  <a href={data.certificateMem2}>{cermem2name}</a>
                </object>
                <br/>
                <br/>
              </div>
    }
    if (!cermem3tocheck) {
      cermem3 = <div></div>
    } else if (cermem3tocheck.includes("http")) {
      cermem3 = <div>
                <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่3 :</Typography>
                <object data={data.certificateMem3} type="application/pdf" width="30" height="20">
                  <a href={data.certificateMem3}>{cermem3name}</a>
                </object>
              </div>
    }
    
    setCerjtoshow(cerj)
    setCermem1toshow(cermem1)
    setCermem2toshow(cermem2)
    setCermem3toshow(cermem3)
  }

  useEffect(() => {
    getCertificate();
  }, [])

  if (!certificate.certificateAj && !certificate.certificateMem1 && !certificate.certificateMem2 && !certificate.certificateMem3) {
    return (
      <div>
      <Accordion sx={{ margin: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ข้อมูลโครงการ</Typography>
      </AccordionSummary>
      <AccordionDetails>
              <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>
                รหัสโครงการ: {detail.projectID} <br/>
                โครงการ: {detail.project} <br/>
                หมวดโครงการ: {detail.category} <br/>
                ระดับ: {detail.level} <br/>
                สถาบัน: {detail.institution} <br/>
                สมาชิก: <br/>
                  &emsp; {detail.member1} <br/>
                  &emsp; {detail.member2} <br/>
                  &emsp; {detail.member3} <br/>
                อาจารย์ที่ปรึกษา: {detail.advisor} <br/>
              </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ margin: 3}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรรอบที่ 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>รอการประกาศ</Typography>
        </Typography>
      </AccordionDetails>
    </Accordion>
      </div>
    );
  } else {
      return (
            <div>
            <Accordion sx={{ margin: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>ข้อมูลโครงการ</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>
                      รหัสโครงการ: {detail.projectID} <br/>
                      โครงการ: {detail.project} <br/>
                      หมวดโครงการ: {detail.category} <br/>
                      ระดับ: {detail.level} <br/>
                      สถาบัน: {detail.institution} <br/>
                      สมาชิก: <br/>
                        &emsp; {detail.member1} <br/>
                        &emsp; {detail.member2} <br/>
                        &emsp; {detail.member3} <br/>
                      อาจารย์ที่ปรึกษา: {detail.advisor} <br/>
                    </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 3}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{color:'#000000', fontSize: 20, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรรอบที่ 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {cerjtoshow}
                {cermem1toshow}
                {cermem2toshow}
                {cermem3toshow}
              </Typography>
            </AccordionDetails>
          </Accordion>
            </div>
      );
    }
}

export default UserContent;
