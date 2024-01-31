import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/fitness-banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position='relative' p='20px'>

      <Typography color='#2EB5F0'
       fontWeight='600' fontSize='25px'>
        Finess DKgym
      </Typography>

      <Typography fontWeight={700}
       sx={{ fontSize: { lg: '44px', xs: '40px'}
       }}
       mb='23px' mt='30px'
       >
        Sweet, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize='22px'
       lineHeight='35px' mb={4}
       >
        Check out the most effective exercises
      </Typography>

      <Button 
       variant='contained'
       color='primary'
       href='#exercises'
       sx={{ backgroundColor: '#2EB5F0', padding: '14px'}}
       >
        Explore Exercises
       </Button>

       <Typography
         fontWeight={600}
         color='#2EB5F0'
         sx={{
           opacity: 0.1,
           display: { lg: 'block', xs: 'none'}
         }}
         fontSize='200px'
       >
        Exercise
       </Typography>

       <img src={HeroBannerImage}
        alt='banner'
        className='hero-banner-img'
        style={{borderEndStartRadius: '70px'}}
      /> 
    </Box>
  )
}

export default HeroBanner
