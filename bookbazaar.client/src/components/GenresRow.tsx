import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import IconFiction from '../assets/genres/genre_fiction.png';
import IconNonfiction from '../assets/genres/genre_nonfiction.png';
import IconFantasy from '../assets/genres/genre_fantasy.png';
import IconMystery from '../assets/genres/genre_mystery.png';
import IconRomance from '../assets/genres/genre_romance.png';

function GenresRow() {
    return (
        <Box sx={{ overflowX: 'auto', width: '100%', marginTop: 2 }}>
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Grid item sx={{ marginY: 1 }}>
                    <Link href="./genre?value=fiction">
                        <Card sx={{ maxWidth: 125 }}>
                            <CardMedia
                                component="img"
                                image={IconFiction}
                                sx={{ height: 100, width: 100, margin: 1 }}
                            />
                            <CardContent>
                                <Typography>
                                    Fiction
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item sx={{ marginY: 1 }}>
                    <Link href="./genre?value=nonfiction">
                        <Card sx={{ maxWidth: 125 }}>
                            <CardMedia
                                component="img"
                                image={IconNonfiction}
                                sx={{ height: 100, width: 100, margin: 1 }}
                            />
                            <CardContent>
                                <Typography>
                                    Nonfiction
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item sx={{ marginY: 1 }}>
                    <Link href="./genre?value=fantasy">
                        <Card sx={{ maxWidth: 125 }}>
                            <CardMedia
                                component="img"
                                image={IconFantasy}
                                sx={{ height: 100, width: 100, margin: 1 }}
                            />
                            <CardContent>
                                <Typography>
                                    Fantasy
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item sx={{ marginY: 1 }}>
                    <Link href="./genre?value=mystery">
                        <Card sx={{ maxWidth: 125 }}>
                            <CardMedia
                                component="img"
                                image={IconMystery}
                                sx={{ height: 100, width: 100, margin: 1 }}
                            />
                            <CardContent>
                                <Typography>
                                    Mystery
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item sx={{ marginY: 1 }}>
                    <Link href="./genre?value=Romance">
                        <Card sx={{ maxWidth: 125 }}>
                            <CardMedia
                                component="img"
                                image={IconRomance}
                                sx={{ height: 100, width: 100, margin: 1 }}
                            />
                            <CardContent>
                                <Typography>
                                    Romance
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GenresRow;