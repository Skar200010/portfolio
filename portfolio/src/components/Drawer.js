// FixedCard.jsx
import React from 'react';
import { Container, Card, List, ListItem, ListItemText, ListItemIcon , useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import './Drawer.css';

const FixedCard = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };
  const isSmallScreen = useMediaQuery('(max-width: 760px)');
  return (
    <Container style={{ position: 'fixed', top: 20, left: 0, display: 'flex' }}>
     
     <Card
        style={{
          height: '70vh', // 100% of the viewport height
          width: '220px', // Adjust width as needed
          backgroundColor: 'rgb(28, 27, 35)',
          zIndex: 1, // Ensure the drawer is on top
        }}
      >


          <List>
            {[
              { text: 'Instagram', icon: <InstagramIcon sx={{ color: '#8b8a91' }} />, link: '' },
              { text: 'Facebook', icon: <FacebookIcon sx={{ color: '#8b8a91' }} />, link: '' },
              { text: 'GitHub', icon: <GitHubIcon sx={{ color: '#8b8a91' }} />, link: 'https://github.com/Skar200010' },
              { text: 'LinkedIn', icon: <LinkedInIcon sx={{ color: '#8b8a91' }} />, link: 'https://www.linkedin.com/in/sohan-khedekar-33b02b17a/' },
              { text: 'Twitter', icon: <TwitterIcon sx={{ color: '#8b8a91' }} />, link: '#' },
              { text: 'Home', icon: <HomeIcon sx={{ color: '#8b8a91' }} />, link: '#' },
            ].map((item, index) => (
              <ListItem
                key={index}
                button
                onClick={() => openLinkInNewTab(item.link)}
                sx={{
                  padding: '1rem',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: '#8b8a91', transition: 'color 0.3s ease' }} />
              </ListItem>
            ))}
          </List>
        </Card>
     
    </Container>
  );
};

export def