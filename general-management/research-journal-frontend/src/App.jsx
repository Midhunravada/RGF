// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthorDashboard from './pages/AuthorDashboard';
import EditorDashboard from './pages/EditorDashboard';
import ReviewerDashboard from './pages/ReviewerDashboard';
import Archive from './pages/Archive';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import Profile from "./pages/Profile";
import SubmissionHistory from "./pages/SubmissionHistory";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Author Dashboard */}
              <Route 
                path="/author-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['author']}>
                    <AuthorDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Editor Dashboard */}
              <Route 
                path="/editor-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['editor']}>
                    <EditorDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Reviewer Dashboard */}
              <Route 
                path="/reviewer-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['reviewer']}>
                    <ReviewerDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Archive */}
              <Route path="/archive" element={<Archive />} />

              {/* ⭐ Added Pages */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/submission-history" element={<SubmissionHistory />} />

            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;