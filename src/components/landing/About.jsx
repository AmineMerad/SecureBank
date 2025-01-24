import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Stack,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Import custom images
import trustIcon from '../../assets/trust.png';
import innovationIcon from '../../assets/innovation.png';
import clientFirstIcon from '../../assets/clientFirst.png';
import transparencyIcon from '../../assets/transparency.png';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const values = [
  {
    icon: trustIcon,
    title: 'Trust & Security',
    description: 'We prioritize the security of your assets with bank-grade encryption and multi-layer protection.',
  },
  {
    icon: innovationIcon,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to provide cutting-edge financial solutions.',
  },
  {
    icon: clientFirstIcon,
    title: 'Customer First',
    description: 'Your success is our success. We are committed to providing exceptional service.',
  },
  {
    icon: transparencyIcon,
    title: 'Transparency',
    description: 'Clear communication and honest pricing with no hidden fees.',
  },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        background: theme.palette.background.default,
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: { xs: 1.2, md: 1.3 },
                }}
              >
                About SecureBank
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Revolutionizing Banking for the Digital Age
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Founded in 2024, SecureBank has been at the forefront of digital banking innovation.
                Our mission is to provide secure, accessible, and innovative financial solutions
                that empower individuals and businesses to achieve their financial goals.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }} 
          sx={{ mt: { xs: 2, md: 4 } }}
        >
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard elevation={0}>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                      component="img"
                      src={value.icon}
                      alt={value.title}
                      sx={{
                        width: 64,
                        height: 64,
                        mb: 2,
                        objectFit: 'contain',
                        filter: 'brightness(0.9)',
                      }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Stack>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 