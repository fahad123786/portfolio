import React from 'react'

const Footer = () => {
  return (
    <div className='footer '>
      <div className='myname text-center fs-2'>
        Fahad Sohail
      </div>

      <div className="listing1">
  <div className="container">
    <div className="row justify-content-center ">
      <div className="list list-unstyled text-center d-flex flex-wrap fs-4 mt-5 mx-auto">
        <a href="#home" className="text-decoration-none text-white col-12 col-sm-auto mb-2 "><li>Home</li></a>
        <a href="#education" className="text-decoration-none text-white col-12 col-sm-auto mb-2 "><li>Education</li></a>
        <a href="#skill" className="text-decoration-none text-white col-12 col-sm-auto mb-2 "><li>Skill</li></a>
        <a href="#projects" className="text-decoration-none text-white col-12 col-sm-auto mb-2 "><li>Projects</li></a>
        <a href="#services" className="text-decoration-none text-white col-12 col-sm-auto mb-2 "><li>Services</li></a>
      </div>
    </div>
  </div>
</div>

    </div>

  )
}

export default Footer