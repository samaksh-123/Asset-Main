import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddAssetForm from './components/AddAssetForm.jsx';
import IssueAssetForm from './components/IssueAssetForm.jsx';
import ViewAssets from './components/ViewAssets.jsx';
import ViewIssuedAssets from './components/ViewIssuedAssets.jsx';
import AddDepartment from './components/AddDepartment.jsx';
import AddEmployee from './components/AddEmployees.jsx';
import ReturnAsset from './components/ReturnAsset.jsx';
import ViewReturnedAssets from './components/ViewReturnedAssets.jsx';
import ViewEmployees from './components/ViewEmployees.jsx';
import ViewDepartment from './components/ViewDepartment.jsx';
import ViewTotalAssets from './components/ViewTotalAssets.jsx';

import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ViewScrappedAssets from './components/ViewScrappedAssets.jsx';

import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'add-asset': return <AddAssetForm />;
      case 'issue-asset': return <IssueAssetForm />;
      case 'view-assets': return <ViewAssets />;
      case 'view-issued': return <ViewIssuedAssets />;
      case 'return-asset': return <ReturnAsset />;
      case 'view-returned': return <ViewReturnedAssets />;
      case 'add-department': return <AddDepartment />;
      case 'add-employee': return <AddEmployee />;
      case 'view-employee': return <ViewEmployees />;
      case 'view-department': return <ViewDepartment />;
      case 'view-total': return <ViewTotalAssets />;
      case 'view-scrapped': return <ViewScrappedAssets />;
      default: return <Dashboard />;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="app">
                <Sidebar setActiveTab={setActiveTab} />
                <div className="main-content">
                  {renderTab()}
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


