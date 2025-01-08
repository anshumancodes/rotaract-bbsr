import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext"; // Adjust the path as necessary
import ProtectedRoute from "./ProtectedRoute"; // Adjust the path as necessary
import './index.css';

// Lazy load components
const Home = lazy(() => import('./components/pages/Home'));
const Blog = lazy(() => import('./components/pages/blog/Blog'));
const GalleryPage = lazy(() => import('./components/pages/Gallery/Gallerypage'));
const About = lazy(() => import('./components/pages/About'));
const Members = lazy(() => import('./components/pages/Members'));
const Dashboard = lazy(() => import('./components/pages/dashboard/Dashboard'));
const AdminLogin = lazy(() => import('./components/pages/dashboard/AdminLogin'));
const ForgotPassword = lazy(() => import('./components/pages/dashboard/Forgotpassword'));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/council" element={<Members />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Protected route for Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
