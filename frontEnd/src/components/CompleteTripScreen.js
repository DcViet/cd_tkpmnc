import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

export default function CompleteTripScreen({ trip, onCompleteTrip }) {
  const handleCompleteTrip = () => {
    onCompleteTrip(trip.id);
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Hoàn thành chuyến đi
        </Typography>
        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Từ: {trip.origin} Đến: {trip.destination}
            </Typography>
            {/* Thêm thông tin khách hàng và các thông tin khác của chuyến đi */}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleCompleteTrip}>
              Xác nhận hoàn thành
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}

