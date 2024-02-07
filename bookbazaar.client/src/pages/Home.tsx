import { Box, Container, Icon, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SearchField from "../components/Search";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookRow from "../components/BookRow";

export default function Home() {
    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center">
                <Box p={2}>
                    <SearchOutlinedIcon fontSize="large" />
                </Box>
                <SearchField />
            </Box>
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4">
                    New & Coming Soon
                </Typography>
                <BookRow category="new" />
            </Box>
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4" sx={{ marginY: 1 }}>
                    Bestsellers
                </Typography>
                <BookRow category="best" />
            </Box>
        </Container>
    </>;
}