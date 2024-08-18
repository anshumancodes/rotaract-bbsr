import React from 'react'
import { SideNav } from './SideNav.jsx'
import HandleMembers from './HandleMembers.jsx'
import UploadToGallery from './UploadToGallery.jsx'
import Dashstats from './Dashstats.jsx'

export const Dashboard = () => {
  return (
    <div className='flex'>
        <SideNav />
        <div className='Action_board ml-[700px]'>
            {/* <HandleMembers/> */}
            {/* <UploadToGallery/> */}
            <Dashstats/>

        </div>
    </div>
  )
}
