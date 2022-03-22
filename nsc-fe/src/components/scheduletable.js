import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(content, date) {
  return { content, date };
}

const rows = [
  createData('รับข้อเสนอโครงการ', '16 สิงหาคม - 30 กันยายน 2564 \n (วันสุดท้ายระบบปิดภายในเวลา 17:00 น.)'),
  createData('ตรวจผลงานรอบข้อเสนอโครงงาน', '4 -15 ตุลาคม 2564'),
  createData('ประกาศผลรอบ', '18 ตุลาคม 2564'),
  createData('สิ่งมอบผลงานรอบนำเสนอผลงาน', '31 มกราคม 2565 (ระบบปิดภายในเวลา 17:00 น.)'),
  createData('ตรวจงานรอบนำเสนอผลงาน', '3 - 14 กุมภาพันธ์ 2565'),
  createData('นำเสนอผลงานออนไลน์ต่อคณะกรรมการภาคใต้', '9 กุมภาพันธ์ 2565'),
  createData('ประกาศผลโครงการที่ได้รับทุนสนับสนุนและโครงการผ่านเข้ารอบชิงชนะเลิศ', '17 กุมภาพันธ์ 2565'),
  createData('รอบชิงชนะเลิศ', 'มีนาคม 2565'),
];

export default function ScheduleTable() {
  return (
    <TableContainer sx={{ maxWidth: '100%', width: 700, }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.content}
              sx={{ '&:last-child td, &:last-child th': { border: 0, border: 4, borderColor: '#000099' } }}
            >
              <TableCell component="th" scope="row" sx={{ padding: 2, border: 4, borderColor: '#000099', fontWeight: 'bold', fontSize: 18, fontFamily: 'Noto Sans Thai' }} align="center">
                {row.content}
              </TableCell>
              <TableCell align="center" sx={{ border: 4, borderColor: '#000099', fontWeight: 'bold', fontSize: 18, fontFamily: 'Noto Sans Thai' }}>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}