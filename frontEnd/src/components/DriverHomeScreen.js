import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import '../css/DriverHomeScreen.css'; // Import CSS file for styling

export default function DriverHomeScreen() {
  const handleSearchTrip = () => {
    // Xử lý khi nhấn nút "Tìm chuyến đi"
  };

  const handleUpdateLocation = () => {
    // Xử lý khi nhấn nút "Cập nhật vị trí hiện tại"
  };

  return (
    <Container component="main" maxWidth="xs" className="phone-container">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Trang chủ tài xế
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSearchTrip}>
              Tìm chuyến đi
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleUpdateLocation}>
              Cập nhật vị trí hiện tại
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

