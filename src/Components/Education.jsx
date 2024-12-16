import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import myimg2 from '../Components/images/stylo.png'
import myimg3 from '../Components/images/hamza.jpeg'
import myimg4 from '../Components/images/frontend.jpeg'
import myimg5 from '../Components/images/backend.png'
import yes from '../Components/images/yes.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Education = () => {
  return (
    <div>

      <hr className='hr' class="w-100 d-sm-block"></hr>
      <h1 className='text-white'><a name="education">Education</a></h1>

      <div className="table-responsive">
        <table className="table table-bordered table-dark text-center align-middle" style={{ borderWidth: '3px' }}>
          <thead className="text-white">
            <tr>
              <th scope="col">Degree</th>
              <th scope="col">Board</th>
              <th scope="col">Completing Year</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td>BS Computer Science</td>
              <td>Islamia University of Bahawalpur</td>
              <td>2026</td>
            </tr>
            <tr>
              <td>ICS</td>
              <td>Multan</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>Matric</td>
              <td>Multan</td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="skills">

        <div>
          <h1 className='text-white'><a name="skill">Skills</a></h1>
          <div>
            <span class="d-flex justify-content-center align-item-center">MERN Stack</span>
            <div className="d-flex justify-content-center">
              <ProgressBar now={75} label={`${75}%`} style={{ width: '70%' }} />
            </div>
          </div>
        </div>


        <div>
          <span class="d-flex justify-content-center align-item-center">Microsoft Office</span>
          <div className="d-flex justify-content-center">
            <ProgressBar now={80} label={`${80}%`} style={{ width: '70%' }} />
          </div>
        </div>

        <div>
          <span class="d-flex justify-content-center align-item-center">Window Installation</span>
          <div className="d-flex justify-content-center">
            <ProgressBar now={85} label={`${85}%`} style={{ width: '70%' }} />
          </div>
        </div>
      </div>

      
      <div className="projects">
      <a name="projects"></a>
        
      <h1 className='text-white'><a name="skill">Projects</a></h1>
      <div className="cards  mt-5 d-flex gap-5 justify-content-center">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg2} />
      <Card.Body className='bg-black'>
        <Card.Title className='text-warning text-center'>Stylo</Card.Title>
        <Card.Text className='text-white'>
        Stylo.pk is a popular Pakistani footwear and fashion brand 
        known for its stylish and affordable collection of shoes, accessories, and clothing. 
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg3} />
      <Card.Body className='bg-black'>
        <Card.Title className='text-warning text-center'>Hamza Mart</Card.Title>
        <Card.Text className='text-white'>
        Hamza Store is a trusted Pakistani retailer offering stylish and affordable products,
        including fashion, accessories, and home essentials, for all ages.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={yes} />
      <Card.Body className='bg-black'>
        <Card.Title className='text-warning text-center'>Yes Chapter 4</Card.Title>
        <Card.Text className='text-white'>
        YES is a platform designed to inspire, support, and showcase 
        entrepreneurial ideas and talents of aspiring young entrepreneurs worldwide.

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>

    <h1 className='text-white mt-4'><a name="skill">Services</a></h1>
    <div className="cards  mt-5 d-flex gap-5 justify-content-center pb-5">
    <a name="services"></a>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg4} />
      <Card.Body className='bg-black'> 
        <Card.Title className='text-warning text-center'>Frontend Development</Card.Title>
        <Card.Text className='text-white'>
        We Provide the services of frontend web Development with landing and responsive pages.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg5} />
      <Card.Body className='bg-black'>
        <Card.Title className='text-warning text-center'>Backend Development</Card.Title>
        <Card.Text className='text-white'>
        We Provide the services of backend web Development with Node.js and MongoDb Databases.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>
  )
}

export default Education


