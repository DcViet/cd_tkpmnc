// import logo from './logo.svg';
import './App.css';
import LoginScreen from './pages/LoginScreen';
import TripListScreen from './pages/TripListScreen';
// import DriverHomeScreen from './pages/DriverHomeScreen';
// import AvailableTripsScreen from './pages/AvailableTripsScreen';
// import TripDetailsScreen from './pages/TripDetailsScreen';


function App() {
  return (
    <div className="App">
      <LoginScreen />
      <TripListScreen />
      {/* <DriverHomeScreen /> */}
      {/* <AvailableTripsScreen /> */}
      {/* <TripDetailsScreen /> */}
    </div>
  );
}

export default App;
