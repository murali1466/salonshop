"use client";
import React from "react";
import { Box, Typography, Button, Container, styled } from "@mui/material";

const HeroContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        backgroundImage: "url('/pexels-lumierestudiomx-897262.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
         {"Welcome to Lola's Unisex-Family Salon"}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Where Beauty Meets Comfort
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
         {"At Lola's Unisex-Family Salon, we believe that everyone deserves"}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Book Your Appointment Today!
        </Button>
      </Container>
      
    </Box>
  );
};

export default HeroContent;
