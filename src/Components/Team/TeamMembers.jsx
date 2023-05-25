import React from 'react'
import './TeamMembers.css'
import Members from './Members';

const memberData = [
  {
    name: 'Kirsten Green',
    title: 'Founder, Partner',
    id: 1,
    photo: '../../Assets/kristen.png'
  },
  {
    name: 'Eurie Kim',
    title: 'Partner',
    id: 2,
    photo:'../../Assets/Eurie.png'
  },
  {
    name: 'Brian O’Malley',
    title: 'Partner',
    id: 3,
    photo:'../Assets/brian.png'
  }
]

function TeamMembers() {
  return (
    <div className='team-members'>
      <div className='team-members-section'>
        {memberData.map((mem) => {
          return (
            <Members member={mem} />
          )

        }, [])}
      </div>
      
    </div>
  )
}

export default TeamMembers;