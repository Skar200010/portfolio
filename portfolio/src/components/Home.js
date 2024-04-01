import React from 'react';
import { Fab } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const showEmailDetails = () => {
    toast.info('Email: khedekarsohan10@gmail.com', {
      position: 'top-right',
      autoClose: 5000, // milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <div>
      {/* Your Home content goes here */}

      {/* Floating "Contact Me" button */}
      <Fab
        color="primary"
        aria-label="contact-me"
        sx={{ position: 'fixed', top: 30, right: 35 }}
        onClick={showEmailDetails}
      >
        <EmailIcon />
      </Fab>
      <ToastContainer />
    </div>
  );
};

export default Home;
