import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Scene3D } from './components/Scene3D';

// Lazy load pages for performance
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Resources = lazy(() => import('./pages/Resources'));
const Doubts = lazy(() => import('./pages/Doubts'));
const Mentor = lazy(() => import('./pages/Mentor'));
const Alerts = lazy(() => import('./pages/Alerts'));
const English = lazy(() => import('./pages/English'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Profile = lazy(() => import('./pages/Profile'));
const Admin = lazy(() => import('./pages/Admin'));

const API_URL = 'https://barakahx-study-platform-ultimate.onrender.com/api';

const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ 
  children, 
  adminOnly = false 
}) => {
  const { user, isAdmin } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdmin) return <Navigate to="/dashboard" replace />;
  
  return <Layout>{children}</Layout>;
};

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
      <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase animate-pulse">Initializing BarakahX</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    fetch(`${API_URL}/hello`)
      .then(res => res.json())
      .then(data => console.log('Backend says:', data.message))
      .catch(err => console.error('Backend error:', err));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Scene3D />

        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>
            } />
            
            <Route path="/resources" element={
              <ProtectedRoute><Resources /></ProtectedRoute>
            } />
            
            <Route path="/doubts" element={
              <ProtectedRoute><Doubts /></ProtectedRoute>
            } />
            
            <Route path="/mentor" element={
              <ProtectedRoute><Mentor /></ProtectedRoute>
            } />
            
            <Route path="/alerts" element={
              <ProtectedRoute><Alerts /></ProtectedRoute>
            } />
            
            <Route path="/english" element={
              <ProtectedRoute><English /></ProtectedRoute>
            } />
            
            <Route path="/portfolio" element={
              <ProtectedRoute><Portfolio /></ProtectedRoute>
            } />
            
            <Route path="/profile" element={
              <ProtectedRoute><Profile /></ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <ProtectedRoute adminOnly><Admin /></ProtectedRoute>
            } />

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;