import React from 'react'

const Home = () => {
  return (
    <>
    <div className='navbar'>
        <div className="name">Fahad Sohail</div>

        <div className="listing"> 
            <ul class ="list-unstyled d-flex gap-2 gap-md-3 gap-lg-5 fs-4 col-lg-expand col-md-expand col-sm-12 my-2 "> 
                <a href='#home' className="text-decoration-none text-white "><li>Home</li></a>
                <a href='#education' className="text-decoration-none text-white "><li > Education</li></a>
                <a href='#skill' className="text-decoration-none text-white "><li>Skill</li></a>
                <a href='#projects' className="text-decoration-none text-white "><li>Projects</li></a>
                <a href='#services' className="text-decoration-none text-white"><li>Services</li></a>
            </ul>

        </div>
        
      
    </div>
    <p><a name="home"></a></p>
    </>
  )
}

export default Home
