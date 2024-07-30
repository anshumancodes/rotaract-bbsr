import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/pages/Home';
import './index.css'
import Blog from './components/pages/blog/Blog';
import { Gallerypage } from './components/pages/Gallery/Gallerypage';
import {About} from "./components/pages/About"
import Members from './components/pages/Members';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/gallery",
    element: <Gallerypage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/council",
    element: <Members/>,
  },
]);
function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
