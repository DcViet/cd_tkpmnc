import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

export default function AvailableTripsScreen() {
  const [trips, setTrips] = useState([]);
  const [showAllTrips, setShowAllTrips] = useState(false);

  useEffect(() => {
    // Gửi yêu cầu GET để lấy danh sách chuyến đi từ backend khi component được tải lần đầu tiên
    axios.get('/api/trips')
      .then(response => {
        setTrips(response.data);
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }, []);

  const handleAutoAccept = (tripId) => {
    // Gửi yêu cầu POST để tự động nhận chuyến đi với id là tripId
    axios.post(`/api/trips/${tripId}/auto-accept`)
      .then(response => {
        console.log(response.data);
        // Cập nhật trạng thái hoặc hiển thị thông báo thành công
      })
      .catch(error => {
        console.error('Error auto-accepting trip:', error);
        // Hiển thị thông báo lỗi
      });
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
