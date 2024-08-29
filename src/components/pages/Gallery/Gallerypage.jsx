import React from 'react'
import Gallery from '../Gallery'
import Nav from '../../global/Nav'
import Footer from '../../global/Footer'

export default Gallerypage = () => {
  return (
    <div >
      <Nav/>
      <div className='w-full flex flex-col items-center'>
      <h1 className='text-xl md:text-3xl font-bold mt-10 py-2'>Gallery Page</h1>
      <Gallery folderName={"work-drives"} />
      </div>
      <Footer/>

    </div>
  )
}
