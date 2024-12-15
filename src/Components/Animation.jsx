import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myimage from '../Components/images/fahad.png'

const Animation = () => {
  return (
    <div className='animation-page'>
    <div className="animation">
    <TypeAnimation
    sequence={[
  
      'My name is Fahad Sohail',
      2000, 
      'I am react Developer',
      2000,
      'Studying BS Computer Science',
      2000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '3rem', display: 'inline-block', color:'white', marginTop: '20px' }}
    repeat={Infinity}
  />
  </div>

   <div class="d-sm-flex justify-content-center align-items-center sm-w-100">
    <img src={myimage}/>
   </div>
   </div>
  )
}

export default Animation
