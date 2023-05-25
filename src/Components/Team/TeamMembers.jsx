import React, { useState, useEffect } from 'react'
import './TeamMembers.css'
import Members from './Members';
import { createClient } from 'contentful';


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
  const [data, setData] = useState(null);

  React.useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });
  
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'perspective',
        });
        setData(response.items);
      } catch (error) {
        console.error('Error retrieving data from Contentful:', error);
      }
    };
    fetchData();
  }, []);
  


  return (
    <div className='team-members'>
      <div className='team-members-section'>
        {data && data.map((item) => {
          return (
            <Members member={item} />
          )
        }, [])}
        {/* {memberData.map((mem) => {
          return (
            <Members member={mem} />
          )

        }, [])} */}
      </div>
      
    </div>
  )
}

export default TeamMembers;