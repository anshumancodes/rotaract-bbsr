import React, { useState } from 'react';
import { SideNav } from './SideNav.jsx';
import HandleMembers from './HandleMembers.jsx';
import UploadToGallery from './UploadToGallery.jsx';
import Dashstats from './Dashstats.jsx';

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState('stats'); // Default to 'stats'
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State to manage mobile nav

  const renderPage = () => {
    switch (selectedPage) {
      case 'members':
        return <HandleMembers />;
      case 'upload':
        return <UploadToGallery />;
      case 'stats':
      default:
        return <Dashstats />;
    }
  };

  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Sidebar for larger screens */}
      <div className='hidden lg:flex'>
        <SideNav setSelectedPage={setSelectedPage} />
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-10 ${isMobileNavOpen ? 'block' : 'hidden'}`}>
        <div className='flex justify-between p-4'>
          <h2 className='text-lg font-bold'>Menu</h2>
          <button onClick={() => setIsMobileNavOpen(false)} className='text-xl'>✖</button>
        </div>
        <div className='flex flex-col'>
          <button onClick={() => { setSelectedPage('stats'); setIsMobileNavOpen(false); }} className='py-2 px-4 hover:bg-gray-200'>Stats</button>
          <button onClick={() => { setSelectedPage('members'); setIsMobileNavOpen(false); }} className='py-2 px-4 hover:bg-gray-200'>Members</button>
          <button onClick={() => { setSelectedPage('upload'); setIsMobileNavOpen(false); }} className='py-2 px-4 hover:bg-gray-200'>Upload</button>
        </div>
      </div>

      {/* Action Board */}
      <div className='flex-1 p-4'>
        <button className='lg:hidden mb-4 p-2 bg-blue-500 text-white rounded' onClick={() => setIsMobileNavOpen(true)}>Open Menu</button>
        {renderPage()}
      </div>
    </div>
  );
};

export default Dashboard;