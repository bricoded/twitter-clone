import React from 'react'
import Page from './Page'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import XIcon from '@mui/icons-material/X';
import Avatar from '@mui/material/Avatar';
import './feed-css/header.css'

const Header = () => {
  const [active, setActive] = React.useState(true);
  const changeState =() => {
    setActive(prevActive => !prevActive);
  }
  return (
    <div className='feed--header'>
      <div className='header--page-info'>
        <Avatar className='header--avatar' onClick={changeState}/>
        <XIcon className='header--twitter-icon' />
        <div className='icon-holder'>
          <SettingsOutlinedIcon className='header--settings' />
        </div>
      </div>
      <div className='header--pages'>
        <Page name='For you' active />
        <Page name='Following' />
      </div>
    </div>
  )
}

export default Header