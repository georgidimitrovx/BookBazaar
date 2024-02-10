import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SearchField from "../components/Search";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookRow from "../components/BookRow";
import Footer from "../components/Footer";
import GenresRow from "../components/GenresRow";

export default function Home() {
    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center">
                <Box p={2}>
                    <SearchOutlinedIcon fontSize="large" sx={{ color: 'primary.main' }} />
                </Box>
                <SearchField />
            </Box>
            <GenresRow />
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                    New & Coming Soon
                </Typography>
                <BookRow category="new" />
            </Box>
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4" sx={{ marginY: 1, color: 'primary.main' }}>
                    Bestsellers
                </Typography>
                <BookRow category="best" />
            </Box>
        </Container>
        <Footer />
    </>;
}
//<Button onClick={logOutTest}>Log out test</Button>
//<Button onClick={logInTest}>Log in test</Button>