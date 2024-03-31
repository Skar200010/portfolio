import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Container className='content-conatiner'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vh', // Adjust the height as needed
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
            width: 110,
            height: 110,
            border: 3,
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
          }}
        >
          Sohan Khedekar
        </Typography>
      </Grid>
    </Container>
  );
};

export default Profile;
