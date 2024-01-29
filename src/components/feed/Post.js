import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './feed-css/post.css';

const Post = ({ displayName, verified, userName, timestamp, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar />
      </div>
      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>{displayName}</h3>
            {verified && <VerifiedIcon className='verified' />}
            <span>@{userName}</span>
            <span>{timestamp}</span>
          </div>
          <div className='icon-holder'>
            <MoreHorizIcon />
          </div>
        </div>
        <div className='post--description'>
          {text}
        </div>
        <div className='post--image'>
          <img src={`${image}`} alt={`${displayName}`} loading='lazy'/>
        </div>
        <div className='post--ctas'>
          <div className='post--cta blue'>
            <div className='icon-holder'>
              <ChatBubbleOutlineOutlinedIcon />
            </div>
            <p className='post--cta-stat'>
              692
            </p>
          </div>
          <div className='post--cta green'>
            <div className='icon-holder'>
              <CachedOutlinedIcon />
            </div>
            <p className='post--cta-stat'>
              4.2k
            </p>
          </div>
          <div className='post--cta pink'>
            <div className='icon-holder'>
              <FavoriteBorderOutlinedIcon />
            </div>
            <p className='post--cta-stat'>
              54k
            </p>
          </div>
          <div className='post--cta blue'>
            <div className='icon-holder'>
              <EqualizerOutlinedIcon />
            </div>
            <p className='post--cta-stat'>
              1.9M
            </p>
          </div>
          <div className='post--bookmark'>
            <div className='icon-holder'>
              <BookmarkBorderOutlinedIcon />
            </div>
            <div className='icon-holder'>
              <FileUploadOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post