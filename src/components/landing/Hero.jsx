import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import bankingImg from '../../assets/990.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}0D 0%, ${theme.palette.secondary.main}0D 100%)`,
  paddingTop: theme.spacing(12),
}));

const AnimatedTypography = motion(Typography);
const AnimatedBox = motion(Box);

function Hero() {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <AnimatedTypography
                variant="h1"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Banking Made Simple, Secure, and Smart
              </AnimatedTypography>
              
              <AnimatedTypography
                variant="h6"
                color="text.secondary"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the next generation of digital banking with SecureBank.
                Smart features, seamless transactions, and bank-grade security.
              </AnimatedTypography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ py: 1.5, px: 4 }}
                >
                  Open Free Account
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ py: 1.5, px: 4 }}
                >
                  Learn More
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedBox
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                component="img"
                src={bankingImg}
                alt="Banking App Interface"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 600,
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  }
                }}
              />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}

export default Hero; 