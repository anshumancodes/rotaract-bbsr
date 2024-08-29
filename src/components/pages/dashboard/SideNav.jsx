import React from 'react';
import { Users2Icon, Upload, Edit, ChartPieIcon } from 'lucide-react';

export const SideNav = ({ setSelectedPage }) => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="absolute left-0 flex h-screen w-72 flex-col overflow-hidden rounded-r-2xl bg-gray-700 text-white">
          <h1 className="mt-10 ml-10 text-2xl font-bold">Rotaract sunshine</h1>
          <ul className="mt-20 space-y-3">
            <li
              onClick={() => setSelectedPage('members')}
              className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600"
            >
              <span>
                <Users2Icon />
              </span>
              <span>Manage Members</span>
            </li>
            <li
              onClick={() => setSelectedPage('upload')}
              className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600"
            >
              <span>
                <Upload />
              </span>
              <span>Upload to Gallery</span>
              <svg
                className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="399.349 57.696 100.163 402.081"
                width="1em"
                height="4em"
              >
                <path
                  fill="currentColor"
                  d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
                />
              </svg>
            </li>
            <li
              onClick={() => setSelectedPage('blogs')}
              className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600"
            >
              <span>
                <Edit />
              </span>
              <span>Manage Blogs</span>
            </li>
            <li
              onClick={() => setSelectedPage('stats')}
              className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600"
            >
              <span className="text-2xl">
                <ChartPieIcon />
              </span>
              <span>Stats</span>
            </li>
          </ul>

          <div className="my-6 mt-auto ml-10 flex cursor-pointer">
            <div>
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1507143550189-fed454f93097"
                alt="dog"
              />
            </div>
            <div className="ml-3">
              <p className="font-medium">admin</p>
              <p className="text-sm text-gray-300">Bhubaneswar, Odisha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

