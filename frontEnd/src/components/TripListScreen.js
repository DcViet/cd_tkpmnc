import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function TripListScreen() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu GET để lấy danh sách chuyến đi từ backend khi component được tải lần đầu tiên
    axios.get('https://improved-bassoon-76wr4vvvvvxhww6q-4000.app.github.dev/api/sample')
      .then(response => {
        console.log(response.data);
        setTrips(response.data);       
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Danh sách chuyến đi
        </Typography>
        <List>
          <ListItem key={trips.id} button>
            <ListItemText 
              primary={`Tên khách hàng: ${trips.customerName}`} 
              secondary={`Địa điểm lên xe: ${trips.pickupLocation}, Địa điểm xuống xe: ${trips.dropoffLocation}`} 
            />
            <ListItemText
              primary={`Thời gian lên xe: ${new Date(trips.pickupTime).toLocaleString()}`}
              secondary={`Trạng thái: ${trips.status}`} 
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="chấp nhận">
                <ArrowForward />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </Container>
  );
}
