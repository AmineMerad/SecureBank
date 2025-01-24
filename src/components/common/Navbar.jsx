import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../services/authService';
import logo from '../../assets/logo.png';

const StyledAppBar = styled(AppBar)(({ theme, isAuthPage }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

const NavLink = styled(RouterLink)({
  textDecoration: 'none',
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    handleClose();
    navigate('/');
  };

  const handleNavigation = (sectionId) => {
    if (isAuthPage) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileOpen(false);
  };

  const navItems = [
    { text: 'Features', id: 'features' },
    { text: 'Solutions', id: 'solutions' },
    { text: 'Pricing', id: 'pricing' },
    { text: 'About', id: 'about' },
  ];

  const AuthButtons = () => (
    <Stack direction="row" spacing={2}>
      <NavLink to="/signin">
        <Button 
          variant="outlined"
          sx={{
            borderColor: '#1a1a1a',
            color: '#1a1a1a',
            textTransform: 'none',
            px: { xs: 2, md: 3 },
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          Sign In
        </Button>
      </NavLink>
      <NavLink to="/signup">
        <Button 
          variant="contained"
          sx={{
            bgcolor: '#1a1a1a',
            color: 'white',
            textTransform: 'none',
            px: { xs: 2, md: 3 },
            fontSize: { xs: '0.875rem', md: '1rem' },
            '&:hover': {
              bgcolor: '#000',
            },
          }}
        >
          Get Started
        </Button>
      </NavLink>
    </Stack>
  );

  const UserMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        onClick={handleMenu}
        sx={{
          textTransform: 'none',
          color: '#1a1a1a',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.04)',
          },
          mr: 2,
        }}
        startIcon={
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32,
              bgcolor: '#1a1a1a',
              fontSize: '0.875rem',
            }}
          >
            {user?.firstName?.charAt(0)}
          </Avatar>
        }
      >
        {user?.firstName} {user?.lastName}
      </Button>
      <Button
        onClick={handleLogout}
        variant="outlined"
        sx={{
          textTransform: 'none',
          color: '#d32f2f',
          borderColor: '#d32f2f',
          '&:hover': {
            bgcolor: 'rgba(211, 47, 47, 0.04)',
            borderColor: '#b71c1c',
            color: '#b71c1c',
          },
          fontSize: '0.875rem',
          py: 0.5,
        }}
      >
        Logout
      </Button>
    </Box>
  );

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'background.paper',
        pt: 2,
      }}
      role="presentation"
    >
      <Stack direction="row" alignItems="center" sx={{ px: 2, mb: 3 }}>
        <Box
          component="img"
          src={logo}
          alt="SecureBank"
          sx={{ height: 30, width: 'auto' }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton 
          onClick={() => setMobileOpen(false)}
          sx={{ color: '#1a1a1a' }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => {
              handleNavigation(item.id);
              setMobileOpen(false);
            }}
            sx={{ 
              '&:hover': { 
                bgcolor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
          </ListItem>
        ))}
        {!user && (
          <ListItem>
            <Stack spacing={1} sx={{ width: '100%', mt: 2 }}>
              <NavLink to="/signin" onClick={() => setMobileOpen(false)}>
                <Button 
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: '#1a1a1a',
                    color: '#1a1a1a',
                    textTransform: 'none',
                  }}
                >
                  Sign In
                </Button>
              </NavLink>
              <NavLink to="/signup" onClick={() => setMobileOpen(false)}>
                <Button 
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: '#1a1a1a',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#000',
                    },
                  }}
                >
                  Get Started
                </Button>
              </NavLink>
            </Stack>
          </ListItem>
        )}
        {user && (
          <ListItem onClick={handleLogout}>
            <ListItemText 
              primary="Logout"
              primaryTypographyProps={{
                sx: { fontWeight: 500, color: '#1a1a1a' }
              }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" isAuthPage={isAuthPage}>
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: 64, md: 70 },
            justifyContent: 'space-between',
          }}
        >
          <NavLink to="/">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src={logo}
                alt="SecureBank"
                sx={{ 
                  height: { xs: 30, md: 35 },
                  width: 'auto',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#1a1a1a',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                SecureBank
              </Typography>
            </Stack>
          </NavLink>

          {!isMobile && !isAuthPage && (
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              sx={{ 
                flexGrow: 0,
                mx: 'auto',
              }}
            >
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  sx={{
                    px: { xs: 1, md: 2 },
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  {item.text}
                </NavButton>
              ))}
            </Stack>
          )}

          {!isMobile ? (
            !isAuthPage && (user ? <UserMenu /> : <AuthButtons />)
          ) : (
            !isAuthPage && (
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ 
                  ml: 2,
                  color: '#000',
                }}
              >
                <MenuIcon />
              </IconButton>
            )
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
}

export default Navbar; 