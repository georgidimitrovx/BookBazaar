import { Box, Container, Link, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ backgroundColor: 'primary.main', marginTop: 5 }}>
            <Container maxWidth="md" sx={{ paddingY: 5 }}>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ paddingBottom: 2 }}>
                    <Typography>
                        <Link href='https://github.com/georgidimitrovx/BookBazaar2'
                            sx={{ color: 'secondary.main' }}
                        >
                            Github
                        </Link>
                        &nbsp;
                        <Link href='https://www.linkedin.com/in/georgidimitrovx/'
                            sx={{ color: 'secondary.main' }}
                        >
                            LinkedIn
                        </Link>
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography style={{ fontStyle: 'italic' }} sx={{ color: 'secondary.main' }}>
                        Book Bazaar by Georgi Dimitrov
                    </Typography>
                </Box>
            </Container >
        </Box >
    );
}

export default Footer;