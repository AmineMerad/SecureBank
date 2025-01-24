import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Stack,
  Divider,
  useTheme,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  Bolt,
  Diamond,
} from '@mui/icons-material';

const PricingCard = styled(Card)(({ theme, isPopular }) => ({
  height: '100%',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  border: isPopular ? `2px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const plans = [
  {
    title: 'Basic',
    icon: <Star />,
    price: '49',
    period: '/year',
    description: 'Perfect for getting started with digital banking',
    features: [
      'Standard Visa Card',
      'Basic Mobile Banking',
      'Up to 3 Bank Accounts',
      'Standard Customer Support',
      'Basic Financial Insights',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    icon: <Diamond />,
    price: '99',
    period: '/year',
    description: 'Most popular choice for professionals',
    features: [
      'Premium Metal Card',
      'Advanced Mobile Banking',
      'Unlimited Bank Accounts',
      'Priority Customer Support',
      'Advanced Financial Analytics',
      'Crypto Wallet Integration',
      'Free International Transfers',
      'Exclusive Rewards Program',
    ],
    buttonText: 'Get Premium',
    buttonVariant: 'contained',
    isPopular: true,
  },
  {
    title: 'Business',
    icon: <Bolt />,
    price: '199',
    period: '/year',
    description: 'Ideal for businesses and enterprises',
    features: [
      'Multiple Premium Cards',
      'Complete Banking Suite',
      'Team Account Management',
      'Dedicated Account Manager',
      'Custom Financial Solutions',
      'API Integration',
      'Advanced Security Features',
      'Corporate Expense Management',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
];

const FeatureItem = ({ text }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Check sx={{ color: 'primary.main', fontSize: 20 }} />
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box
      id="pricing"
      component="section"
      sx={{
        py: 12,
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Choose Your Plan
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}
            >
              Get started with SecureBank today and experience the future of banking
            </Typography>
            <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
              Save 20% with annual billing
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PricingCard elevation={plan.isPopular ? 4 : 1} isPopular={plan.isPopular}>
                  {plan.isPopular && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                      }}
                    />
                  )}
                  <Stack spacing={3}>
                    <Box sx={{ color: 'primary.main' }}>
                      {plan.icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" component="div" gutterBottom>
                        {plan.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48 }}>
                        {plan.description}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h3" component="div">
                        ${plan.price}
                        <Typography component="span" variant="h6" color="text.secondary">
                          {plan.period}
                        </Typography>
                      </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={2}>
                      {plan.features.map((feature, idx) => (
                        <FeatureItem key={idx} text={feature} />
                      ))}
                    </Stack>
                    <Button
                      variant={plan.buttonVariant}
                      color="primary"
                      size="large"
                      sx={{
                        py: 1.5,
                        mt: 'auto',
                        position: 'relative',
                        overflow: 'hidden',
                        ...(plan.isPopular && {
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            transition: 'opacity 0.3s ease-in-out',
                            opacity: 0,
                          },
                          '&:hover::before': {
                            opacity: 1,
                          },
                          '& span': {
                            position: 'relative',
                            zIndex: 1,
                          },
                        }),
                      }}
                    >
                      <span>{plan.buttonText}</span>
                    </Button>
                  </Stack>
                </PricingCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            All plans include a 30-day money-back guarantee
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing; 