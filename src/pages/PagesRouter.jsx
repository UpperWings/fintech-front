import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OutPuts from './OutPut/OutPuts';
import Layout from './Layout/Layout';
import Dashboards from './Dashboard/Dashboard';

function PagesRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboards />} />
          <Route path="/outputs" element={<OutPuts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default PagesRoutes;
