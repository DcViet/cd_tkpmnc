import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const defaultTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Map1() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <div className="iphone-container">
                    <div className="island"></div>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                            <FormatListNumberedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Danh sách các chuyến đi
                        </Typography>

                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Item> <AccountCircleIcon/> Khách hàng 1</Item>
                                <Item> <AccountCircleIcon/> Khách hàng 2</Item>
                                <Item> <AccountCircleIcon/> Khách hàng 3</Item>
                                <Button 
                                size='small'
                                variant="outlined"
                                >
                                    Xem thêm</Button>
                            </Stack>
                        </Box>


                        <Box>
                            <Button
                                fullWidth
                                variant="contained"
                                color="error"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Nhận chuyến
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Bản đồ
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </div>
            </Container>
        </ThemeProvider>
    );
}