import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

export default function ProgressTripScreen({ trip }) {
  const handleConfirmPickup = () => {
    // Xử lý khi nhấn nút "Xác nhận đón khách"
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Thông tin chuyến đi
        </Typography>
        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Từ: a Đến: Button
            </Typography>
            {/* Thêm thông tin khách hàng và các thông tin khác của chuyến đi */}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleConfirmPickup}>
              Xác nhận đón khách
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}

