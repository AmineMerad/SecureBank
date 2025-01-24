import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Phone,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { register } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      const response = await register(userData);
      setUser(response);
      navigate('/'); // Redirect to home page after successful registration
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, rgba(99,22,153,1) 11%, rgba(60,17,178,1) 94%)',
        pt: { xs: 2, sm: 4, md: 8 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={1}
          sx={{
            p: { xs: 2, sm: 3 },
            background: '#fff',
          }}
        >
          <Stack spacing={{ xs: 2, sm: 3 }}>
            <Box
              component="img"
              src={logo}
              alt="SecureBank"
              sx={{ 
                height: { xs: 30, sm: 35 },
                width: 'auto',
                alignSelf: 'center',
                mb: { xs: 0.5, sm: 1 },
              }}
            />
            <Typography 
              variant="h6" 
              align="center" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.125rem', sm: '1.25rem' },
              }}
            >
              Create Account
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 1.5, sm: 1 }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ fontSize: 20 }} color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    size="small"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ fontSize: 20 }} color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>

                <TextField
                  size="small"
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ fontSize: 20 }} color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  size="small"
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ fontSize: 20 }} color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  size="small"
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ fontSize: 20 }} color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          onClick={() => setShowPassword(!showPassword)} 
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOff sx={{ fontSize: 20 }} /> : <Visibility sx={{ fontSize: 20 }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    >
                      I agree to the Terms and Privacy Policy
                    </Typography>
                  }
                />

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={loading || !formData.agreeToTerms}
                  sx={{
                    mt: { xs: 1, sm: 2 },
                    bgcolor: '#1a1a1a',
                    color: 'white',
                    textTransform: 'none',
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      bgcolor: '#000',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                    },
                    '&.Mui-disabled': {
                      bgcolor: 'rgba(26, 26, 26, 0.7)',
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
                </Button>
              </Stack>
            </Box>

            <Typography 
              variant="body2" 
              align="center" 
              sx={{ 
                fontSize: { xs: '0.813rem', sm: '0.875rem' },
              }}
            >
              Already have an account?{' '}
              <Link 
                component={RouterLink} 
                to="/signin" 
                sx={{ 
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Sign In
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp; 