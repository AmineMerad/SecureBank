import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Stack,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  CreditCard,
  PhoneIphone,
  CurrencyBitcoin,
  Analytics,
  AccountBalance,
  Visibility,
} from '@mui/icons-material';

// Import your background image
import darkBgImage from '../../assets/761.jpg';

const SolutionsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  margin: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${darkBgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0),
    borderRadius: 0,
  },
}));

const SolutionCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  '@media (min-width: 960px)': {
    backdropFilter: 'blur(20px)',
  },
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
}));

const solutions = [
  {
    icon: <CreditCard sx={{ fontSize: 40 }} />,
    title: 'Premium Cards',
    description: 'Access exclusive Visa and Mastercard offerings with premium benefits, worldwide acceptance, and enhanced security features.',
  },
  {
    icon: <CurrencyBitcoin sx={{ fontSize: 40 }} />,
    title: 'Crypto Integration',
    description: 'Seamlessly manage your crypto assets with our dedicated crypto cards and real-time exchange capabilities.',
  },
  {
    icon: <PhoneIphone sx={{ fontSize: 40 }} />,
    title: 'Mobile Control',
    description: 'Take full control of your finances through our intuitive mobile app with real-time tracking and instant notifications.',
  },
  {
    icon: <Analytics sx={{ fontSize: 40 }} />,
    title: 'Asset Dashboard',
    description: 'View all your assets in one place - stocks, crypto, savings, and investments with detailed analytics.',
  },
  {
    icon: <AccountBalance sx={{ fontSize: 40 }} />,
    title: 'Investment Suite',
    description: 'Access diverse investment options including stocks, ETFs, and crypto with professional trading tools.',
  },
  {
    icon: <Visibility sx={{ fontSize: 40 }} />,
    title: 'Smart Monitoring',
    description: 'Track your wealth with AI-powered insights and personalized recommendations for portfolio optimization.',
  },
];

const Solutions = () => {
  const theme = useTheme();

  return (
    <SolutionsSection id="solutions">
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          py: { xs: 6, md: 12 },
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Complete Financial Solutions
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  All your assets, cards, and investments in one secure platform
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Explore Solutions
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <SolutionCard elevation={0}>
                  <Stack spacing={2}>
                    <Box sx={{ color: theme.palette.primary.main }}>
                      {solution.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {solution.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {solution.description}
                    </Typography>
                  </Stack>
                </SolutionCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of users who trust SecureBank for their financial needs
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Open Free Account
            </Button>
          </motion.div>
        </Box>
      </Container>
    </SolutionsSection>
  );
};

export default Solutions; 