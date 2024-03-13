import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function TripListScreen() {
  // Giả định danh sách các chuyến đi
  const trips = [
    { id: 1, origin: "A", destination: "B" },
    { id: 2, origin: "B", destination: "C" },
    { id: 3, origin: "C", destination: "D" },
  ];

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
          Danh sách chuyến đi
        </Typography>
        <List>
          {trips.map((trip) => (
            <ListItem key={trip.id} button>
              <ListItemText primary={`Từ: ${trip.origin} Đến: ${trip.destination}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="chấp nhận">
                  <ArrowForward />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}

export default TripListScreen;
