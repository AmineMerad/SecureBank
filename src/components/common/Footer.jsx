import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  Mail,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Product: ['Features', 'Solutions', 'Pricing', 'Updates'],
    Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    Contact: [
      {
        icon: <Phone fontSize="small" />,
        text: '+1 (555) 123-4567',
      },
      {
        icon: <Mail fontSize="small" />,
        text: 'support@securebank.com',
      },
      {
        icon: <LocationOn fontSize="small" />,
        text: '123 Banking Street, NY 10001',
      },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {title}
              </Typography>
              <Stack spacing={2}>
                {links.map((link, index) => (
                  typeof link === 'string' ? (
                    <Link
                      key={index}
                      href="#"
                      color="text.secondary"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {link}
                    </Link>
                  ) : (
                    <Stack key={index} direction="row" spacing={1} alignItems="center">
                      {link.icon}
                      <Typography variant="body2" color="text.secondary">
                        {link.text}
                      </Typography>
                    </Stack>
                  )
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, pt: 6, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary">
                © 2024 SecureBank. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 