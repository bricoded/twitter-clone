import React from 'react'
import './feed-css/page.css'

const Page = ({name, active}) => {
  return (
    <div className={`page ${active && 'page--active'}`}>
      <p>{name}</p>
    </div>
  )
}

export default Page