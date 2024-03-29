import React from 'react'
import SideBar from './components/side-bar/SideBar'
import Widgets from './components/widgets/Widgets'
import Feed from './components/feed/Feed'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MobileSidebarAndNav from './components/mobile/MobileSidebarAndHeader';
import MobileNav from './components/mobile/MobileNav';
// import { TroubleshootSharp } from '@mui/icons-material';

const App = () => {
  return (
    <div className='app'>
      {/* sidebar */}
      <SideBar />
      {/* main feed */}
      <div>
        <MobileSidebarAndNav />
        <Feed />
      </div>
      {/*  Widgets */}
      <Widgets />
      <div className='app--post-btn'>
        <SpaOutlinedIcon />
      </div>
      <MobileNav />
    </div>
  )
}

export default App