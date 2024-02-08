import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Books', 'Fiction', 'Nonfiction'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function isSigned() {
    return localStorage.getItem('jwtToken') != null;
}

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('jwtToken');
        navigate('/');
    };

    const getCartCount = () => {
        var cartItems = localStorage.getItem("cart");
        cartItems = cartItems?.split(";");
        return cartItems?.length;
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