import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/Navbar.css';

import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

const Navbar = (props: Props) => {
  const drawerWidth = 200;
  const navItems = [['Strona główna','/'],['Wiersze','/list'],['Github','https://www.github.com/Rafisto']];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rafał Włodarczyk
      </Typography>
      <Divider />
      <List>
        {navItems.map(([item, link]) => {
          if (link.includes('http')){
            return(
            <div key={item}>
              <ListItem key={item} disablePadding>
              <a key={item} href={link} target="_blank" rel="noopener noreferrer">
              <ListItemButton sx={{ textAlign: 'center', textDecoration:'none',color:'white' }}>
                <ListItemText primary={item} />
              </ListItemButton>
              </a>
              </ListItem>
            </div>
            )
          }
          else {
            return(
            <div key={item}>
              <ListItem disablePadding>
              <Link to={link}>
              <ListItemButton sx={{ textAlign: 'center', textDecoration:'none',color:'white' }}>
                <ListItemText primary={item} />
              </ListItemButton>
              </Link>
              </ListItem>
            </div>
            )
          }
        })}
    </List>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Rafał Włodarczyk
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(([item, link]) => {
              if (link.includes('http')){
                return(
                <a href={link} target="_blank" rel="noopener noreferrer">
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
                </a>
                )
              }
              else {
                return(
                <Link key={item} to={link}>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                </Link>
                )
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar