import React from 'react'
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white-primary shadow-md  w-full z-10">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch  ">
          <div className="hidden md:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-dark-primary hover:text-gray-900 px-3 py-2 rounded-md text-xl font-light">gallery</a>
              <a href="#" className="text-dark-primary hover:text-gray-900 px-3 py-2 rounded-md text-xl font-light">blog</a>
              <a href="#" className="text-dark-primary hover:text-gray-900 px-3 py-2 rounded-md text-xl font-light">founders</a>
              <a href="#" className="text-dark-primary hover:text-gray-900 px-3 py-2 rounded-md text-xl font-light">council members</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button className="hidden md:block bg-pink-primary  text-white-primary font-bold py-2 px-4 ">
           Join the club
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-dark-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-dark-primary  px-3 py-2 rounded-md text-base font-medium">gallery</a>
          <a href="#" className="block text-dark-primary  px-3 py-2 rounded-md text-base font-medium">blog</a>
          <a href="#" className="block text-dark-primary  px-3 py-2 rounded-md text-base font-medium">founders</a>
          <a href="#" className="text-dark-primary hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">council members</a>
          <button className="w-full bg-pink-primary  text-white-primary font-bold py-2 px-4 ">
           Join the club
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}
