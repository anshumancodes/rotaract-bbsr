import React from "react";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext"; // Adjust the path as necessary
import ProtectedRoute from "./ProtectedRoute"; // Adjust the path as necessary
import './index.css';

// Lazy load components
const Home = React.lazy(() => import('./components/pages/Home'));
const Blog = React.lazy(() => import('./components/pages/blog/Blog'));
const Gallerypage = React.lazy(() => import('./components/pages/Gallery/Gallerypage'));
const About = React.lazy(() => import('./components/pages/About'));
const Members = React.lazy(() => import('./components/pages/Members'));
const Dashboard = React.lazy(() => import('./components/pages/dashboard/Dashboard'));
const Admin = React.lazy(() => import("./components/pages/dashboard/AdminLogin"));
const ForgotPass = React.lazy(() => import("./components/pages/dashboard/Forgotpassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/gallery",
    element: <Gallerypage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/council",
    element: <Members />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/forgot-password",
    element:<ForgotPass/>
  }
]);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
     </AuthProvider>
  );
}

export default App;