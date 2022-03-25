import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config';


function AdminContent() {

  const { id } = useParams();
  const navigate = useNavigate();

  //UpdateUserdetail

  const [projectID, setProjectID] = useState("")
  const [project, setProject] = useState("")
  const [category, setCategory] = useState("")
  const [level, setLevel] = useState("")
  const [institution, setInstitution] = useState("")
  const [advisor, setAdvisor] = useState("")
  const [member1, setMember1] = useState("")
  const [member2, setMember2] = useState("")
  const [member3, setMember3] = useState("")

  const loadDetail = async () => {
    const { data } = await axios.get(`${config.apiUrlPrefix}/detail/${id}/`)
    // console.log(data)
    setProjectID(data.projectID)
    setProject(data.project)
    setCategory(data.category)
    setLevel(data.level)
    setInstitution(data.institution)
    setAdvisor(data.advisor)
    setMember1(data.member1)
    setMember2(data.member2)
    setMember3(data.member3)
  }

  useEffect(() => {
    loadDetail()
  },[])

  //Update Userdetail

  const UpdateDetail = async () => {
    let fromField = new FormData()
    fromField.append('projectID', projectID)
    fromField.append('project', project)
    fromField.append('category', category)
    fromField.append('level', level)
    fromField.append('institution', institution)
    fromField.append('advisor', advisor)
    fromField.append('member1', member1)
  
  await axios({
    method: 'PUT',
    url: `/api/detail/${id}/`,
    data: fromField
  }).then(response => {
    // console.log(response.data)
    navigate(`/superprojectdetail/${id}/`)
    alert('edited successfully')
  })
}

  //AddCerAj
  const [certificateAj, setCertificateAj] = useState(null)
  const AddCertificateAj = async () => {
    let fromField = new FormData()

    if(certificateAj !== null) {
      fromField.append('certificateAj', certificateAj)
      }    

    await axios({
      method: 'PUT',
      url: `/api/certificate/${id}/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate(`/superprojectdetail/${id}/`)
    })
  }

  // AddCerMem1
  const [certificateMem1, setCertificateMem1] = useState(null)
  const AddCertificateMem1 = async () => {
    let fromField = new FormData()

    if(certificateMem1 !== null) {
      fromField.append('certificateMem1', certificateMem1)
      }    

    await axios({
      method: 'PUT',
      url: `/api/certificate/${id}/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate(`/superprojectdetail/${id}/`)
    })
  }
  // AddCerMem2
  const [certificateMem2, setCertificateMem2] = useState(null)
  const AddCertificateMem2 = async () => {
    let fromField = new FormData()

    if(certificateMem2 !== null) {
      fromField.append('certificateMem2', certificateMem2)
      }    

    await axios({
      method: 'PUT',
      url: `/api/certificate/${id}/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate(`/superprojectdetail/${id}/`)
    })
  }
  // AddCerMem3
  const [certificateMem3, setCertificateMem3] = useState(null)
  const AddCertificateMem3 = async () => {
    let fromField = new FormData()

    if(certificateMem3 !== null) {
      fromField.append('certificateMem3', certificateMem3)
      }    

    await axios({
      method: 'PUT',
      url: `/api/certificate/${id}/`,
      data: fromField
    }).then((response) => {
      // console.log(response.data);
      navigate(`/superprojectdetail/${id}/`)
    })
  }


  //get Cer
  const [certificate, setCertificate] = useState([])
  const [ namecerj, setNamecerj ] = useState()
  const [ namecermem1, setNamecermem1 ] = useState()
  const [ namecermem2, setNamecermem2 ] = useState()
  const [ namecermem3, setNamecermem3 ] = useState()
  const getCertificate = async () => {
    const { data } = await axios.get(`/api/certificate/${id}/`)
    // console.log(data)
    setCertificate(data)

    let cerjtocheck = data.certificateAj;
    let cermem1tocheck = data.certificateMem1;
    let cermem2tocheck = data.certificateMem2;
    let cermem3tocheck = data.certificateMem3;

    let cerjname;
    let cermem1name;
    let cermem2name;
    let cermem3name;

    if (!cerjtocheck) {
      cerjname = '-'
      setNamecerj(cerjname)
    } else if (cerjtocheck.includes("http")) {
      cerjname = cerjtocheck.split(/(\\|\/)/g).pop()
      setNamecerj(cerjname)
    }
    if (!cermem1tocheck) {
      cermem1name = '-'
      setNamecermem1(cermem1name)
    } else if (cermem1tocheck.includes("http")) {
      cermem1name = cermem1tocheck.split(/(\\|\/)/g).pop()
      setNamecermem1(cermem1name)
    }
    if (!cermem2tocheck) {
      cermem2name = '-'
      setNamecermem2(cermem2name)
    } else if (cermem2tocheck.includes("http")) {
      cermem2name = cermem2tocheck.split(/(\\|\/)/g).pop()
      setNamecermem2(cermem2name)
    }
    if (!cermem3tocheck) {
      cermem3name = '-'
      setNamecermem3(cermem3name)
    } else if (cermem3tocheck.includes("http")) {
      cermem3name = cermem3tocheck.split(/(\\|\/)/g).pop()
      setNamecermem3(cermem3name)
    }
  }

useEffect(() => {
  getCertificate();
}, [])

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
          <Typography sx={{color:'#000000', fontSize: 10, fontFamily: 'Noto Sans Thai' }}>
          <div>
          <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>รหัสโครงการ :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="projectID"
                
                value={projectID}
                onChange={(e) => setProjectID(e.target.value)}
              />
          </div>
          <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>โครงการ :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>หมวดโครงการ :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              disabled/>
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>ระดับ :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              disabled/>
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>สถาบัน :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>อาจารย์ที่ปรึกษา :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="advisor"
                value={advisor}
                onChange={(e) => setAdvisor(e.target.value)}
              />
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>สมาชิกคนที่ 1 :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="member1"
                value={member1}
                onChange={(e) => setMember1(e.target.value)}
              />
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>สมาชิกคนที่ 2 :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="member2"
                value={member2}
                onChange={(e) => setMember2(e.target.value)}
              disabled/>
            </div>
            <Typography sx={{color:'#000000', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>สมาชิกคนที่ 3 :</Typography>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="member3"
                value={member3}
                onChange={(e) => setMember3(e.target.value)}
              disabled/>
            </div>
          </div>
          <br/>
          <Button color="success" variant="contained" component="span" size="small" style={{ float: 'right'}} onClick={UpdateDetail}>Submit</Button>
            </Typography>
          </AccordionDetails>
          <br/>
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
        <br/>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรอาจารย์ที่ปรึกษา :</Typography>
            <object data={certificate.certificateAj} type="application/pdf" width="30" height="20">
              <a href={certificate.certificateAj}>{namecerj}</a>
            </object>
        <br/>
          <input
              type='file'
              className='from-control from-control-lg'
              name='certificate'
              multiple
              onChange={(e) => setCertificateAj(e.target.files[0])}/>
          <Button variant="contained" component="span" size="small" onClick={AddCertificateAj} >Upload</Button> &nbsp;
          {/* <Button variant="contained" component="span" size="small" color="error" onClick={() => deletecertificateAj(certificateAj)} >Delete</Button> */}
          <br/>
          <br/>

          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่1 :</Typography>
          <object data={certificate.certificateMem1} type="application/pdf" width="30" height="20">
              <a href={certificate.certificateMem1}>{namecermem1}</a>
          </object>
          <br/>
          <input
              type='file'
              className='from-control from-control-lg'
              name='certificateMem1'
              onChange={(e) => setCertificateMem1(e.target.files[0])}/>
          <Button variant="contained" component="span" size="small" onClick={AddCertificateMem1} >Upload</Button>

          <br/>
          <br/>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่2</Typography>
          <object data={certificate.certificateMem2} type="application/pdf" width="30" height="20">
              <a href={certificate.certificateMem2}>{namecermem2}</a>
          </object>
          <br/>
          <input
              type='file'
              className='from-control from-control-lg'
              name='certificateMem2'
              onChange={(e) => setCertificateMem2(e.target.files[0])}/>
          <Button variant="contained" component="span" size="small" onClick={AddCertificateMem2} >Upload</Button>

          <br/>
          <br/>
          <Typography sx={{color:'#000000', fontSize: 16, fontFamily: 'Noto Sans Thai' }}>เกียรติบัตรผู้สมัครคนที่3</Typography>
          <object data={certificate.certificateMem3} type="application/pdf" width="30" height="20">
              <a href={certificate.certificateMem3}>{namecermem3}</a>
          </object>
          <br/>
          <input
              type='file'
              className='from-control from-control-lg'
              name='certificateMem3'
              multiple
              onChange={(e) => setCertificateMem3(e.target.files[0])}/>
          <Button variant="contained" component="span" size="small" onClick={AddCertificateMem3} >Upload</Button>
        </AccordionDetails>
      </Accordion>
        </div>
    );
}

export default AdminContent;
