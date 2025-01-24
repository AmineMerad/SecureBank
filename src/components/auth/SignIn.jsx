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
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { login } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await login(formData);
      setUser(response);
      navigate('/');
    } catch (error) {
      if (error.includes('Invalid email or password')) {
        setError(
          <Stack spacing={2}>
            <Alert 
              severity="error" 
              sx={{ 
                alignItems: 'center',
                '& .MuiAlert-message': {
                  width: '100%'
                }
              }}
            >
              <Typography variant="body2" gutterBottom>
                Account not found. Please check your credentials or create a new account.
              </Typography>
              <Button
                variant="outlined"
                size="small"
                component={RouterLink}
                to="/signup"
                sx={{
                  mt: 1,
                  textTransform: 'none',
                  borderColor: 'error.main',
                  color: 'error.main',
                  '&:hover': {
                    borderColor: 'error.dark',
                    bgcolor: 'error.lighter',
                  },
                }}
              >
                Create Account
              </Button>
            </Alert>
          </Stack>
        );
      } else {
        setError(error.toString());
      }
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
                height: { xs: 30, sm: 35, md: 40 },
                width: 'auto',
                alignSelf: 'center',
                mb: { xs: 1, sm: 2 },
              }}
            />
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              Sign In
            </Typography>

            {error && (
              <Box sx={{ width: '100%' }}>
                {typeof error === 'string' ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  error
                )}
              </Box>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={{ xs: 2, sm: 3 }}>
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
                        <Email sx={{ fontSize: { xs: 18, sm: 20 } }} color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={loading}
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
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                </Button>
              </Stack>
            </Box>

            <Typography 
              variant="body2" 
              align="center" 
              sx={{ 
                fontSize: { xs: '0.813rem', sm: '0.875rem' },
                mt: { xs: 1, sm: 2 },
              }}
            >
              Don't have an account?{' '}
              <Link 
                component={RouterLink} 
                to="/signup" 
                sx={{ 
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn; 