import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserHome from './pages/userhome';
import UserDetail from './pages/userdetail';
import UserContact from './pages/usercontact';
import UserProjectDetail from './pages/userprojectdetail';
import PubHome from './pages/pubhome';
import PubDetail from './pages/pubdetail';
import PubContact from './pages/pubcontact';
import UserAnnounce from './pages/userannounce';
import Login from './pages/login';
import AdminListproject from './pages/adminlistproject';
import AdminContact from './pages/admincontact';
import AdminDetail from './pages/admindetail';
import AdminHome from './pages/adminhome';
import AdminProjectDetail from './pages/adminprojectdetail';
import AdminAnnounce from './pages/adminannounce';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to ="/pubhome"/>}/>
        <Route path="/pubhome" element={<PubHome/>}/>
        <Route path="/pubdetail" element={<PubDetail/>}/>
        <Route path="/pubcontact" element={<PubContact/>}/>
        <Route path="/userhome" element={<UserHome/>}/>
        <Route path="/userdetail" element={<UserDetail/>}/>
        <Route path="/usercontact" element={<UserContact/>}/>
        <Route path="/usercontent/:id/" element={<UserProjectDetail/>}/>
        <Route path="/userannounce" element={<UserAnnounce/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/superhome" element={<AdminHome/>}/>
        <Route path="/superdetail" element={<AdminDetail/>}/>
        <Route path="/supercontact" element={<AdminContact/>}/>
        <Route path="/superannounce" element={<AdminAnnounce/>}/>
        <Route path="/superlistproject" element={<AdminListproject/>}/>
        <Route path="/superprojectdetail/:id/" element={<AdminProjectDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
