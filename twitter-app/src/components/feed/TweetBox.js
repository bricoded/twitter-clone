import React from 'react';
import Avatar from '@mui/material/Avatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListIcon from '@mui/icons-material/List';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Button from '@mui/material/Button';
import './feed-css/tweetBox.css'

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <Avatar />
      <div className='tweetBox--actions'>
        <textarea placeholder='What is Happening?!' ></textarea>
        <div className='tweetBox--ctas'>
          <div className='tweetBox--icons'>
            <div className='icon-holder'>
              <ImageOutlinedIcon />
            </div>
            <div className='icon-holder'>
              <GifBoxOutlinedIcon />
            </div>
            <div className='icon-holder'>
              <ListIcon />
            </div>
            <div className='icon-holder'>
              <SentimentSatisfiedAltOutlinedIcon />
            </div>
            <div className='icon-holder'>
              <EventRepeatOutlinedIcon />
            </div>
            <div className='icon-holder'>
              <PlaceOutlinedIcon />
            </div>
          </div>
          <Button className='primary-button'>Post</Button>
        </div>
      </div>
    </div>
  )
}

export default TweetBox