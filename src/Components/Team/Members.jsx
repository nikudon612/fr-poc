import React from 'react'
import './Members.css'

function Members({member}) {
  return (
        <div className='member'>
            <div className='member-photo'>
                <img src={member.photo} alt='member' />
            </div>
                <div className='member-name'>
                    {member.name}
                </div>
                <div className='member-title'>
                    {member.title}
                </div>
            </div>
  )
}

export default Members