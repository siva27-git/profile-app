import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function ProfileDetails() {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: 220,
          width: 320,
          maxHeight: { xs: 200, md: 150 },
          maxWidth: { xs: 300, md: 226 },
        }}
        alt="Profile Picture"
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Typography component="p" variant="h4">
        Adam Levine
      </Typography>
      <Typography component="p" variant="h6">
        adamlevine@kyro.us
      </Typography>
    </>
  );
}