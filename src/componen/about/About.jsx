import React from 'react'
import './StyleAbout.css';
import Placeholder from 'react-bootstrap/Placeholder';


export const About = () => {
  return (
    <>
    <Placeholder as="p" animation="glow" style={{textAlign: 'center', marginTop: '100px'}}>
        <Placeholder className='rounded-pill' xs={1} size='sm' style={{color: '#34C76F'}} />
      </Placeholder>

        <div className='container-about'>
            
       
        <div className='about_left'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>SEE MORE</button>
          
        </div>
        <div className='about_right'>
        <img src='../../public/img/about.png' alt=''>
            </img>
          
        </div>
    </div>
    <Placeholder as="p" animation="glow" style={{textAlign: 'center', marginTop: '100px'}}>
        <Placeholder className='rounded-pill' xs={1} size='sm' style={{color: '#34C76F'}} />
      </Placeholder>

      

      


    
    </>

  
  )
}

export default About;
