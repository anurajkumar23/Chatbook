import React from 'react'
import ProfileRightBar from '../profileRightBar/ProfileRightBar'
import Rightbarhome from '../rightbarhome/Rightbarhome'
import "./rightbar.scss"
const Rightbar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/>: <Rightbarhome/>}
      </div>
    </div>
  )
}

export default Rightbar
