import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ReferencesPage } from './pages/ReferencesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { VrfSystemsPage } from './pages/VrfSystemsPage';
import { ClimateSystemsPage } from './pages/ClimateSystemsPage';
import { HeatPumpProductsPage } from './pages/HeatPumpProductsPage';
import { HeatPumpPage } from './pages/HeatPumpPage';
import { MechanicalInstallationPage } from './pages/MechanicalInstallationPage';
import { WaterPressurePage } from './pages/WaterPressurePage';
import { VentilationPage } from './pages/VentilationPage';
import { WaterTreatmentPage } from './pages/WaterTreatmentPage';
import { SolarEnergyPage } from './pages/SolarEnergyPage';
import { ClimatePage } from './pages/ClimatePage';


import ScrollToTop from './components/ScrollToTop'; // ScrollToTop'u ekliyoruz
import { PoolPage } from './pages/PoolPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/klimalar" element={<ClimatePage />} />
          <Route path="/isi-pompalari" element={<HeatPumpProductsPage />} />
          <Route path="/referanslar" element={<ReferencesPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/vrf-sistemleri" element={<VrfSystemsPage />} />
          <Route path="/klima-teknolojileri" element={<ClimateSystemsPage />} />
          <Route path="/havuz" element={<PoolPage />} />
          <Route path="/isi-pompasi" element={<HeatPumpPage />} />
          <Route path="/mekanik-tesisat" element={<MechanicalInstallationPage />} />
          <Route path="/su-basinclandirma" element={<WaterPressurePage />} />
          <Route path="/havalandirma" element={<VentilationPage />} />
          <Route path="/su-aritma" element={<WaterTreatmentPage />} />
          <Route path="/ges" element={<SolarEnergyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
