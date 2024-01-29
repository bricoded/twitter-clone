import React from 'react'
import './sidebar-css/sideBarOption.css'

const SideBarOption = ({ Icon, text, active}) => {
  return (
    <div className='sideBarOption'>
      <div>
        <Icon />
        <h2 className={`sideBarOption--text ${active && 'sideBarOption--active'}`}>{text}</h2>
      </div>
    </div>
  )
}

export default SideBarOption