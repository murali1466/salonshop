import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const WhyChooseUs = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Why Choose Us?
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Family-Friendly Environment
        </Typography>
        <Typography variant="body1" paragraph>
          A welcoming space for all ages, ensuring a comfortable and enjoyable experience for every family member.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Expert Stylists
        </Typography>
        <Typography variant="body1" paragraph>
          Our experienced professionals stay updated with the latest trends and techniques to deliver the best results.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Quality Products
        </Typography>
        <Typography variant="body1" paragraph>
          We use only the finest products to ensure your hair and skin receive the care they deserve.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Personalized Service
        </Typography>
        <Typography variant="body1" paragraph>
          Every client is unique, and we tailor our services to meet your individual preferences and style.
        </Typography>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
