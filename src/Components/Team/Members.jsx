import React from 'react'
import './Members.css'

function Members({item}) {
  return (
        <div className='member'>
            <div className='member-photo'>
                <img src={item.image} alt='member' />
            </div>
                <div className='member-name'>
                    {item.fields.name}
                </div>
                <div className='member-title'>
                    {item.position}
                </div>
            </div>
  )
}

export default Members