import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AntDesignIcon from "@mui/icons-material/AntDesign";
import MaterialIconsIcon from "@mui/icons-material/MaterialIcons";
import EntypoIcon from "@mui/icons-material/Entypo";
import { useHistory } from "react-router-dom";


const HomeSearch = (props) => {
    const history = useHistory();
  
    const goToSearch = () => {
      history.push('/DestinationSearch');
    };
  
    return (
      <Box>
        {/* Input Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={goToSearch}
        >
          <Typography sx={{ marginRight: 'auto' }}>Where To?</Typography>
  
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AntDesignIcon sx={{ color: '#535353' }} />
            <Typography>Now</Typography>
            <MaterialIconsIcon />
          </Box>
        </Box>
  
        {/* Previous destination */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <Box
            sx={{
              backgroundColor: '#000',
              borderRadius: '50%',
              padding: '5px',
              marginRight: '10px',
            }}
          >
            <AntDesignIcon sx={{ color: '#fff' }} />
          </Box>
          <Typography>Spin Nightclub</Typography>
        </Box>
  
        {/* Home destination */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <Box
            sx={{
              backgroundColor: '#218cff',
              borderRadius: '50%',
              padding: '5px',
              marginRight: '10px',
            }}
          >
            <EntypoIcon sx={{ color: '#fff' }} />
          </Box>
          <Typography>Spin Nightclub</Typography>
        </Box>
      </Box>
    );
  };

const styles = StyleSheet.create({
    inputBox: {
      backgroundColor: '#e7e7e7',
      margin: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputText: {
      fontSize: 20,
      fontWeight: '600',
      color: '#434343',
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 50
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#dbdbdb',
    },
    iconContainer: {
      backgroundColor: '#b3b3b3',
      padding: 10,
      borderRadius: 25,
    },
    destinationText: {
      marginLeft: 10,
      fontWeight: '500',
      fontSize: 16,
    },
  });

export default HomeSearch;
