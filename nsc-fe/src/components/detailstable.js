import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(scholartag, studenttag, category) {
  return { scholartag, studenttag, category };
}

const rows = [
  createData(11, 21, 'โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้'),
  createData(12, 22, 'โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศ'),
  createData(13, 23, 'โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ'),
  createData(14, 24, 'โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคอุบัติใหม่'),
];

export default function BasicTable() {
  return (
    <TableContainer sx={{ maxWidth: '100%', width: 700, }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
        <caption><Typography sx={{ color:'#FF0033', padding: 0, fontFamily: 'Noto Sans Thai', fontSize: 18 }} align='center'>*รางวัลพิเศษ รางวัลละ 10,000 สำหรับหมวด 13 และ 23 หากใช้แพลตฟอร์ม traffy Fondue</Typography></caption>
        <TableHead>
          <TableRow sx={{ bgcolor:'#004aad' }}>
            <TableCell align="center" sx={{ color:'#FFFFFF', padding: 2, border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }}>นิสิตและนักศึกษา</TableCell>
            <TableCell align="center" sx={{ color:'#FFFFFF', border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }}>นักเรียน</TableCell>
            <TableCell align="center" sx={{ color:'#FFFFFF', border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }}>หมวดการแข่งขัน</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.scholartag}
              sx={{ '&:last-child td, &:last-child th': { border: 0, border: 4, borderColor: '#004aad' } }}
            >
              <TableCell component="th" scope="row" sx={{ color:'black', padding: 2, border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }} align="center">
                {row.scholartag}
              </TableCell>
              <TableCell align="center" sx={{ color:'black', border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }}>{row.studenttag}</TableCell>
              <TableCell align="center" sx={{ color:'black', border: 4, fontSize: 19, borderColor: '#004aad', fontFamily: 'Noto Sans Thai' }}>{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}