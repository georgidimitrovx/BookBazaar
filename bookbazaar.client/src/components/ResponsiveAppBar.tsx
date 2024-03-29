import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function isSigned() {
    return localStorage.getItem('jwtToken') != null;
}

function ResponsiveAppBar() {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('jwtToken');
        navigate('/');
    };

    const getCartCount = () => {
        var cartItems = localStorage.getItem("cart");
        var cartItemsSplit = cartItems?.split(";");
        cartItemsSplit = cartItemsSplit?.filter(item => item !== "");
        const distinctArray = [...new Set(cartItemsSplit)];
        return distinctArray?.length;
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="md" sx={{ backgroundColor: 'white' }}>
                <Toolbar disableGutters>
                    <LibraryBooksIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        Book Bazaar
                    </Typography>

                    <LibraryBooksIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Book Bazaar
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography sx={{ color: 'primary.main' }}>
                            Your Online Bookstore
                        </Typography>
                    </Box>

                    {!isSigned()
                        ?
                        <Link href="../signIn">
                            <Button variant="contained" sx={{ backgroundColor: 'primary.main' }}>
                                Sign in
                            </Button>
                        </Link>
                        :
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Link href="../cart">
                                <Box display="flex" justifyContent="right" sx={{ marginRight: 1 }}>
                                    <ShoppingCartIcon sx={{ color: 'primary.main' }} />
                                    <Typography sx={{ marginTop: -1, color: 'primary.main' }}>
                                        {getCartCount()}
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Typography sx={{ color: 'primary.main', display: { xs: 'none', md: 'flex' }, marginRight: 2, align: 'center' }}>
                                Hey, {localStorage.getItem('name')}
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'primary.main' }}
                                onClick={signOut}
                            >
                                Sign out
                            </Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;