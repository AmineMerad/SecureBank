import React, { Suspense, lazy, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import About from './About';
import Footer from '../common/Footer';
import { useLocation } from 'react-router-dom';

const Solutions = lazy(() => import('./Solutions'));

// Loading component for Suspense
const LoadingFallback = () => (
  <Box 
    sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}
  >
    <CircularProgress />
  </Box>
);

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          const navHeight = 70; // Height of navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <Features />
      <Suspense fallback={<LoadingFallback />}>
        <Solutions />
      </Suspense>
      <Pricing />
      <About />
      <Footer />
    </Box>
  );
}

export default LandingPage; 