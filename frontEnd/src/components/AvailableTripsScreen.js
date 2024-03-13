import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

function AvailableTripsScreen() {
  // Giả định danh sách các chuyến đi tài xế có thể nhận
  const [trips, setTrips] = useState([
    { id: 1, origin: "A", destination: "B" },
    { id: 2, origin: "B", destination: "C" },
    { id: 3, origin: "C", destination: "D" },
    { id: 4, origin: "D", destination: "E" },
  ]);
  const [showAllTrips, setShowAllTrips] = useState(false);

  const handleAutoAccept = (tripId) => {
    // Xử lý tự động nhận chuyến đi ở đây
  };

  const handleViewMore = () => {
    setShowAllTrips(true);
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Danh sách chuyến đi có thể nhận
        </Typography>
        {trips.slice(0, showAllTrips ? trips.length : 4).map((trip) => (
          <Card key={trip.id} style={{ marginBottom: 20 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Từ: {trip.origin} Đến: {trip.destination}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleAutoAccept(trip.id)}>
                Tự động nhận
              </Button>
            </CardActions>
          </Card>
        ))}
        {!showAllTrips && (
          <Button variant="outlined" color="primary" onClick={handleViewMore}>
            Xem thêm
          </Button>
        )}
      </div>
    </Container>
  );
}

export default AvailableTripsScreen;
