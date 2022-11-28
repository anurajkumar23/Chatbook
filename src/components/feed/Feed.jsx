import React from 'react'
import Stories from '../stories/Stories'
import "./feed.scss"
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feddWrapper">
        <Stories/>
      </div>
    </div>
  )
}

export default Feed
