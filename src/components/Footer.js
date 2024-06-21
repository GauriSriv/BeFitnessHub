import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
     
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '17px', xs: '8px' } }} mt="0px" textAlign="center" pb="4px"><b>Made by Gauri Srivastava</b> <img src={Logo} alt="logo" style={{ width: '40px', height: '29px' }} /></Typography>
  
 <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '20px' } }} mt="10px" textAlign="center" pb="20px">Copyright © 2024: All Rights Reserved ®</Typography>
 </Box> 
);

export default Footer;