import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const AboutMe = () => {
  return (
    <Container
      sx={{
        marginTop: '-100px',
        textAlign: 'center',
        position: 'relative',
        left: '6px', // Adjust the position as needed
        top: 170,
        Width: '100%', // Adjust the width as needed
        zIndex: 99,
      }}
    >
       <Paper sx={{ padding: 3, backgroundColor: 'rgb(28, 27, 35)', borderColor: grey[500], color: '#8b8a91', maxWidth: '100%', margin: 'auto', boxShadow: 'grey' }}>
        <Typography variant="h4" sx={{ color: 'white' }}>
          About Me
        </Typography>
        {/* Add more content about yourself as needed */}
        <Typography>
        I am Sohan Sunil Khedekar, a passionate and dedicated Javascript and Web Developer with a background in INFT Engineering. With a strong academic foundation and a desire for continuous professional growth, I strive to secure a challenging position that allows me to reach my full potential while contributing to the success of the organization.
        I am actively seeking new opportunities where I can utilize my technical expertise, strong work ethic, and passion for development to contribute to the success of a dynamic organization.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
