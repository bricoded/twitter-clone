import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import './sidebar-css/sideBarUserInfo.css'

const SideBarUserInfo = ({ displayName, userName }) => {
  return (
    <div className='sideBarUserInfo'>
      <div>
        <div className='sideBarUserInfo--avatar'>
          <Avatar />
        </div>
        <div className='sideBarUserInfo--info'>
          <h4>{displayName}</h4>
          <h5>@{userName}</h5>
        </div>
      </div>
      <MoreHorizIcon />
    </div>
  )
}

export default SideBarUserInfo