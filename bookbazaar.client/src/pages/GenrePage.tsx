import { Box, Card, CardMedia, Container, Grid, Typography, Link } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEndpoint } from "../Helpers";

export default function SearchPage() {
    const location = useLocation();
    const [booksData, setBooksData] = useState<BookCardData[]>([]);
    const [genreType, setGenreType] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const value = searchParams.get('value');
        if(value)
            setGenreType(value.charAt(0).toUpperCase() + value.substring(1));

        fetch(getEndpoint() + 'api/Book/genre/' + value)
            .then(response => response.json())
            .then((data: BookCardData[]) => setBooksData(data))
            .catch(error => console.error('Error fetching data:', error));

    }, [location.search]);

    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                    {genreType}
                </Typography>
            </Box>
            <Grid container spacing={2}>
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
