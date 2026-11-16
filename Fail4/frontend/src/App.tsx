import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import UserSearch from './pages/UserSearch';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="min-h-screen bg-dark-bg dark:bg-dark-bg bg-light-bg flex flex-col">
                    <Header 
                      onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                      isSidebarOpen={isSidebarOpen} 
                    />
                    <div className="flex flex-1 overflow-hidden">
                      <Sidebar 
                        isOpen={isSidebarOpen} 
                        onClose={() => setIsSidebarOpen(false)} 
                      />
                      <div className="flex-1 overflow-hidden">
                        <Routes>
                          <Route path="/" element={<UserSearch />} />
                          <Route path="/users" element={<UserSearch />} />
                          <Route path="/reports" element={<Reports />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                      </div>
                    </div>
                    <Footer />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
