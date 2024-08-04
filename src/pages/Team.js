import React from 'react'
import './Team.css'
import ProfileCard from '../Components/ProfileCard';

const Team = () => {
  return (
    <div>
        <div className='team-page'> 
            here is the team header
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px', gap: '30px' }}>
              <ProfileCard
                name="John Doe"
                photo="https://picsum.photos/200/300"
                position="Software Engineer"
                linkedin="https://www.linkedin.com/in/johndoe"
                instagram="https://instagram.com/johndoe"
              />
              <ProfileCard
                name="Jane Smith"
                photo="https://picsum.photos/200/300"
                position="Product Manager"
                linkedin="https://www.linkedin.com/in/johndoe"
                instagram="https://instagram.com/johndoe"
              />
               <ProfileCard
                name="Jane Smith"
                photo="https://picsum.photos/200/300"
                position="Product Manager"
                linkedin="https://www.linkedin.com/in/johndoe"
                instagram="https://instagram.com/johndoe"
              />
               <ProfileCard
                name="Jane Smith"
                photo="https://picsum.photos/200/300"
                position="Product Manager"
                linkedin="https://www.linkedin.com/in/johndoe"
                instagram="https://instagram.com/johndoe"
              />
            </div>
      
    </div>
  )
}

export default Team;
