import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Card, CardMedia, Grid, Link } from '@mui/material';
interface CardsContainerProps {
    category: string;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ category }) => {
    const [cardsData, setCardsData] = useState<BookCardData[]>([]);

    useEffect(() => {
        fetch('https://localhost:7106/api/Book?category=' + category)
            .then(response => response.json())
            .then((data: BookCardData[]) => setCardsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Box sx={{ overflowX: 'auto', width: '100%' }}>
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                {cardsData.map((card, index) => (
                    <Grid item key={index} sx={{ marginY: 1 }}>
                        <Link href={`./book/${card.id}`}>
                            <Card sx={{ minWidth: 200 }}>
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
        </Box>
    );
};

export default CardsContainer;
