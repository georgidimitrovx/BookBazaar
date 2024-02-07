import { Box, Container, Icon, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useParams } from 'react-router-dom';

export default function BookPage() {
    const { id } = useParams();

    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Box sx={{ marginY: 3 }}>
                <Typography variant="h4">
                    Empty {id}
                </Typography>
            </Box>
        </Container>
    </>;
}