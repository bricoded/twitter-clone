import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './mobile.css/mobile-sidebar-user.css'

const MobileSidebarUser = ({ image, displayName, userName, following, followers }) => {
  return (
    <div className='mobile-sidebar-user'>
      <div>
        <Avatar />
        <h3 className='mobile-sidebar-user--displayName'>{displayName}</h3>
        <h5 className='mobile-sidebar-user--userName'><span>@{userName}</span></h5>
        <div className='mobile-sidebar-user--stats'>
          <p>{following} <span>following</span></p>
          <p>{followers} <span>followers</span></p>
        </div>
      </div>
      <div className='icon-holder'>
        <MoreHorizIcon />
      </div>
    </div>
  )
}

export default MobileSidebarUser