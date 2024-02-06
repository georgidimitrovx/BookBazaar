import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
//import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const Home: React.FC = () => {
    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ my: 1 }}>
                        Book Bazaar
                    </Typography>
                    <Button href="login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Hero unit */}
            <input type="text" name="search" placeholder="Search by Title, Author, ISBN" />
            <Button>Search</Button>
            <Typography variant="h4" color="inherit" noWrap sx={{ my: 1 }}>
                Browse by genre
            </Typography>
            <Grid container spacing={4} justifyContent="space-evenly">
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Action
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Fantasy
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Horror
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Mystery
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Romance
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h4" color="inherit" noWrap sx={{ my: 1 }}>
                Best sellers
            </Typography>
            <Grid container spacing={4} justifyContent="space-evenly">
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Book1
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Book2
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Book3
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Book4
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Book5
                    </Typography>
                </Grid>
            </Grid>

            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Typography variant="h6" color="inherit" noWrap sx={{ my: 1 }}>
                    Github https://github.com/georgidimitrovx/BookBazaar2<br />
                    Author https://www.linkedin.com/in/georgidimitrovx
                </Typography>
            </Container>
            {/* End footer */}
        </ThemeProvider>
    );
}

export default Home;