import React from 'react'
import Navbar from './Navbar'

const  Display = () => {
  return (
    <div className='Home'>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='header-container'>
      <h1 className='homeheader'>Welcome to 10J<span className='span2'>s</span></h1>
      {/* <br /> */}
      <h2 className='sub-header'>Media Production</h2>
      </div>

      <br />
      <h3 className='sub-header1'>WE MAKE MEMORIES LAST FOREVER</h3>
      <br />
      <div>
        <h4 className='sub-header2' style={{textAlign:"center"}}>PHOTOGRAPHY | VIDEOGRAPHY | MEDIA PRODUCTION | GRAPHIC DESIGN</h4>
      </div>
      <br />
      <div>
        <h5 className='sub-header3' style={{textAlign:"center"}}>10Js Photographers TP, trading as “10Js Media Production” is Media Company that
mainly deals with Photography, videography, media production and graphic designing.</h5>
      </div>
    </div>
  )
}

export default Display