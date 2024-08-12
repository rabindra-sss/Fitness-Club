import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center', display: 'flex' }} px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '16px', xs: '20px' }, color: 'pink' }} mt="41px" textAlign="center" pb="40px">All rights reserved. 2024</Typography>
  </Box>
);

export default Footer;
