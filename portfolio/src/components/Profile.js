import React from 'react';
import { Container, Typography, Grid, Avatar, useMediaQuery } from '@mui/material';

const Profile = () => {
  const isSmallScreen = useMediaQuery('(max-width:400px)');

  return (
    <Container className='content-conatiner'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // Adjust the height as needed
        background: 'url(/blurr.jpg) center/cover no-repeat',
        position: 'relative', // Add this line
        top: 25,
        borderRadius:'4px'
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Avatar
          src="hero.jpg"
          sx={{
            width: 90,
            height: 90,
            border: 3,
            top: 2,
            borderColor: 'white',
            marginBottom: '5px',
          }}
        />
        <Typography
          variant="h4"
          sx={{
            textDecorationColor: 'whitesmoke',
            color: 'whitesmoke',
            marginTop: '10px', // Adjust the margin as needed
            flex: 1, // Allow Typography to take remaining space
            marginLeft: '20px',
            display: isSmallScreen ? 'none' : 'block', // Hide on small screens
          }}
        >
          Sohan Khedekar
        </Typography>
        {isSmallScreen && (
          <Typography
            variant="h4"
            sx={{
              textDecorationColor: 'whitesmoke',
              color: 'whitesmoke',
              marginTop: '10px', // Adjust the margin as needed
              flex: 1, // Allow Typography to take remaining space
              marginLeft: '20px',
            }}
          >
            S.K
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Profile;
