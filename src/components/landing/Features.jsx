import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  Button,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Security,
  TouchApp,
  AccessTime,
  Payment,
  Dashboard,
  Support,
  Notifications,
  Rocket,
  TrendingUp,
  Psychology,
  AutoGraph,
} from '@mui/icons-material';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
  },
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}1A, ${theme.palette.secondary.main}1A)`,
}));

const GradientIconWrapper = styled(IconWrapper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  '& > svg': {
    color: theme.palette.common.white,
  },
}));

const features = [
  {
    icon: <Security color="primary" sx={{ fontSize: 32 }} />,
    title: 'Bank-Grade Security',
    description: 'Your finances are protected with military-grade encryption and multi-factor authentication. We comply with all major financial regulations to ensure your data stays private and secure.',
  },
  {
    icon: <TouchApp color="primary" sx={{ fontSize: 32 }} />,
    title: 'Intuitive Interface',
    description: 'Access your finances with ease through our user-friendly platform. Check balances, make payments, and manage your accounts with just a few taps.',
  },
  {
    icon: <AccessTime color="primary" sx={{ fontSize: 32 }} />,
    title: '24/7 Banking',
    description: 'Bank on your schedule with round-the-clock access to your accounts. Our platform is always available, whether you are using your phone, tablet, or computer.',
  },
  {
    icon: <Payment color="primary" sx={{ fontSize: 32 }} />,
    title: 'Instant Transfers',
    description: 'Send and receive money in real-time with zero delays. Enjoy competitive rates on international transfers and minimal fees on domestic transactions.',
  },
  {
    icon: <Dashboard color="primary" sx={{ fontSize: 32 }} />,
    title: 'Smart Dashboard',
    description: 'Get a complete view of your finances with our comprehensive dashboard. Track spending patterns, view transaction history, and manage multiple accounts in one place.',
  },
  {
    icon: <Support color="primary" sx={{ fontSize: 32 }} />,
    title: 'Expert Support',
    description: 'Our dedicated support team is here to help 24/7. Get assistance through live chat, email, or phone support whenever you need it.',
  },
  {
    icon: <Notifications color="primary" sx={{ fontSize: 32 }} />,
    title: 'Smart Alerts',
    description: 'Stay informed with customizable notifications. Get real-time alerts for transactions, balance updates, and important account activities.',
  },
  {
    icon: <Rocket color="primary" sx={{ fontSize: 32 }} />,
    title: 'Future-Ready Banking',
    description: 'Step into the future of banking with our innovative platform.',
    isSpecial: true,
    highlights: [
      {
        icon: <TrendingUp />,
        text: 'AI-Powered Insights',
      },
      {
        icon: <Psychology />,
        text: 'Smart Recommendations',
      },
      {
        icon: <AutoGraph />,
        text: 'Predictive Analytics',
      },
    ],
  },
];

const SpecialFeatureCard = styled(FeatureCard)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  '& .MuiTypography-root': {
    color: theme.palette.common.white,
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
  },
}));

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      id="features"
      component="section"
      sx={{
        py: 12,
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h2"
            sx={{ mb: 2 }}
          >
            Features that Set Us Apart
          </Typography>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Experience banking reimagined with powerful features designed for your financial success
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.isSpecial ? (
                  <SpecialFeatureCard elevation={0}>
                    <GradientIconWrapper>
                      {feature.icon}
                    </GradientIconWrapper>
                    <CardContent sx={{ p: 0, flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 2, opacity: 0.9 }}
                      >
                        {feature.description}
                      </Typography>
                      <Stack spacing={2}>
                        {feature.highlights.map((highlight, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            {highlight.icon}
                            <Typography variant="body2">
                              {highlight.text}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 3,
                          bgcolor: 'white',
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.9)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </SpecialFeatureCard>
                ) : (
                  <FeatureCard elevation={0}>
                    <IconWrapper>
                      {feature.icon}
                    </IconWrapper>
                    <CardContent sx={{ p: 0, flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                )}
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 