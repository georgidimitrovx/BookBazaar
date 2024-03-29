import { Box, Card, CardMedia, Container, Grid, Link } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SearchField from "../components/Search";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEndpoint } from "../Helpers";

export default function SearchPage() {
    const location = useLocation();
    const [booksData, setBooksData] = useState<BookCardData[]>([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const value = searchParams.get('value');

        // todo load all matching books from db

        fetch(getEndpoint() + 'api/Book/search/' + value)
            .then(response => response.json())
            .then((data: BookCardData[]) => setBooksData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [location.search]);

    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center">
                <Box p={2}>
                    <SearchOutlinedIcon fontSize="large" sx={{ color: 'primary.main' }} />
                </Box>
                <SearchField />
            </Box>
            <Grid container sx={{ marginTop: 2 }} spacing={2 }>
                {booksData.map((card, index) => (
                    <Grid item key={index} sx={{ marginY: 1 }}>
                        <Link href={`./book/${card.id}`}>
                            <Card sx={{ width: 200 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={card.coverImageUrl}
                                    alt={card.title}
                                />
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
        <Footer />
    </>;
}
