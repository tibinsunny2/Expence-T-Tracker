// YourComponent.js
import React from 'react';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const Notificationalert = () => {
  const showToast = () => {
    toast.success('This is a Material-UI toast message', {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <h2>Your Component</h2>
      <Button variant="contained" color="primary" onClick={showToast}>
        Show Toast
      </Button>
    </div>
  );
};

export default Notificationalert;
