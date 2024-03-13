import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

export default function TripDetailsScreen({ trip }) {
  const handleAcceptTrip = () => {
    // Xử lý khi nhấn nút "Nhận chuyến đi"
  };

  const handleViewMap = () => {
    // Xử lý khi nhấn nút "Xem bản đồ"
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
              Từ: A Đến: B
            </Typography>
            {/* Thêm thông tin khách hàng và các thông tin khác của chuyến đi */}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleAcceptTrip}>
              Nhận chuyến
            </Button>
            <Button size="small" color="primary" onClick={handleViewMap}>
              Xem bản đồ
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}

