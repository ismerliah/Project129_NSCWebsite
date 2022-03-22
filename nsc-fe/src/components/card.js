import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ActionAreaCard() {
  return (
    <Card sx={{ margin:3, maxWidth: 900 }} >
        <CardContent>
          <Typography variant="body2" align='left' sx={{ color:'#333399', fontSize: 22, fontFamily: 'Noto Sans Thai' }}>
            &bull; กำลังศึกษาอยู่ในสถาบันการศึกษาในประเทศไทย <br/>
            &nbsp;&nbsp;&nbsp;- ระดับนักเรียน : ประถมศึกษา มัธยมศึกษา อาชีวศึกษา หรือเทียบเท่า(ปวช.)​ <br/>
            &nbsp;&nbsp;&nbsp;- ระดับนิสิตและนักศึกษา : อาชีวศึกษา หรือเทียบเท่า (ปวส.) และอุดมศึกษา (ไม่เกินปริญญาตรี) <br/>
            &bull; ​สมาชิก จำนวน 1-3 คน (ชื่อไม่ซ้ำในทีมอื่น) และที่ปรึกษาโครงการ 1 คน สังกัดสถาบันการศึกษาเดียวกัน <br/>
            &bull; ส่งผลงานเข้าแข่งขันได้ 1 ผลงานเท่านั้น <br/>
            &bull; ผลงานที่เข้าร่วมการแข่งขัน ผ่านการรับรองจากที่ปรึกษาโครงการและหัวหน้าสถาบันการศึกษา <br/>
            &bull; หากร่วมการแข่งขัน YSC 2022 แล้ว ไม่สามารถสมัคร NSC 2022 ได้
          </Typography>
        </CardContent>
    </Card>
  );
}

export default ActionAreaCard;