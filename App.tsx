import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import ProjectDetails from './pages/ProjectDetails';
import CollectionPage from './pages/CollectionPage';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';
import PrintPage from './pages/PrintPage';
import SLAPage from './pages/SLAPage';
import FDMPage from './pages/FDMPage';
import ModelingPage from './pages/ModelingPage';

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/print" element={<PrintPage />} />
          <Route path="/print/sla" element={<SLAPage />} />
          <Route path="/print/fdm" element={<FDMPage />} />
          <Route path="/modeling" element={<ModelingPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
    </MotionConfig>
  );
};

export default App;
