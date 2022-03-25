import * as React from 'react';
import { Box, Link } from '@mui/material';
import AdminMainBar from '../components/adminappbar/mainadmin';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import config from '../config';
import MainBar from '../components/appbar/mainbar';

const columns = [
  { field: 'order',
    headerClassName: 'super-app-theme--header',
    headerName: 'ที่',   
    width: 50,  
  },
  {
    field: 'id',
    headerClassName: 'super-app-theme--header',
    headerName: 'รหัสโครงการ',
    width: 150,
    renderCell: (cellValues) => {
      return <Link href={`superprojectdetail/${cellValues.row.order+1}/`} color='inherit' underline='none' fontWeight='bold'>
                {`${cellValues.row.id}`}
              </Link>;
    }
    // editable: true,
  },
  {
    field: 'project',
    headerClassName: 'super-app-theme--header',
    headerName: 'โครงการ',
    width: 400,
    // editable: true,
  },
  {
    field: 'category',
    headerClassName: 'super-app-theme--header',
    headerName: 'หมวดโครงการ',
    width: 410,
    // editable: true,
  },
  {
    field: 'grade',
    headerClassName: 'super-app-theme--header',
    headerName: 'ระดับ',
    width: 150,
    // editable: true,
  },  
];

function DataGridDemo() {

  // const posttoken = { username: "admin", password: "1234" };

  const [ rowss, setRowss ] = React.useState([]);

  React.useEffect( async() => {
    // const accesstoken = await axios.post('/api/token/', posttoken);
    // console.log(accesstoken.data.access)
    const projectdetail = await axios.get(`${config.apiUrlPrefix}/detail/`); 
    //   headers: {
    //     'Authorization': `Bearer ${accesstoken.data.access}`
    //   }
    // });
    // console.log(projectdetail.data)
    const listprojectdata = projectdetail.data
    // console.log(listprojectdata)
    let rowsapi = [
      { order:    listprojectdata[1].id-1,
        id:       listprojectdata[1].projectID,
        project:  listprojectdata[1].project,
        category: listprojectdata[1].category,
        grade:    listprojectdata[1].level
      },
      { order:    listprojectdata[2].id-1,
        id:       listprojectdata[2].projectID,
        project:  listprojectdata[2].project,
        category: listprojectdata[2].category,
        grade:    listprojectdata[2].level
      },
      { order:    listprojectdata[3].id-1,
        id:       listprojectdata[3].projectID,
        project:  listprojectdata[3].project,
        category: listprojectdata[3].category,
        grade:    listprojectdata[3].level
      },
      { order:    listprojectdata[4].id-1,
        id:       listprojectdata[4].projectID,
        project:  listprojectdata[4].project,
        category: listprojectdata[4].category,
        grade:    listprojectdata[4].level
      },
      { order:    listprojectdata[5].id-1,
        id:       listprojectdata[5].projectID,
        project:  listprojectdata[5].project,
        category: listprojectdata[5].category,
        grade:    listprojectdata[5].level
      },
      { order:    listprojectdata[6].id-1,
        id:       listprojectdata[6].projectID,
        project:  listprojectdata[6].project,
        category: listprojectdata[6].category,
        grade:    listprojectdata[6].level
      },
      { order:    listprojectdata[7].id-1,
        id:       listprojectdata[7].projectID,
        project:  listprojectdata[7].project,
        category: listprojectdata[7].category,
        grade:    listprojectdata[7].level
      },
      { order:    listprojectdata[8].id-1,
        id:       listprojectdata[8].projectID,
        project:  listprojectdata[8].project,
        category: listprojectdata[8].category,
        grade:    listprojectdata[8].level
      },
      { order:    listprojectdata[9].id-1,
        id:       listprojectdata[9].projectID,
        project:  listprojectdata[9].project,
        category: listprojectdata[9].category,
        grade:    listprojectdata[9].level
      },
      { order:    listprojectdata[10].id-1,
        id:       listprojectdata[10].projectID,
        project:  listprojectdata[10].project,
        category: listprojectdata[10].category,
        grade:    listprojectdata[10].level
      },
      { order:    listprojectdata[11].id-1,
        id:       listprojectdata[11].projectID,
        project:  listprojectdata[11].project,
        category: listprojectdata[11].category,
        grade:    listprojectdata[11].level
      }
    ];
    setRowss(rowsapi)
  }, [])

  // console.log(rowss)

  return (
    <Box sx={{ height: 700, width: '90%', '& .super-app-theme--header': { backgroundColor: 'rgba(0, 74, 173, 0.9)', color: 'white'}}}>
        <DataGrid             
          rows={rowss}
          columns={columns}
          rowsPerPageOptions={[]} 
          alignItems="center"                    
          disableSelectionOnClick
          rowsHeight="80"
        />      
    </Box>
  );
}

function AdminListproject() {
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
      <AdminMainBar/>
      <br/>
      <br/>
      <br/>
      <center>
      <div className='f6' style={{ fontSize: 50, color: '#0000CC' }}>รายชื่อโครงการ</div>
      <br/>
      <br/>
      <DataGridDemo/>
      </center>      
      <br/>
    </Box>
  );
}

export default AdminListproject;
