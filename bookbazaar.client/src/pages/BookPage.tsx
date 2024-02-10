import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { getEndpoint } from "../Helpers";

interface Book {
    id: number,
    title: string,
    description: string,
    author: string,
    genre: string,
    price: number,
    isbn: string,
    inventory: number,
    coverImageUrl: string,
    category: string,
}

function isSigned() {
    return localStorage.getItem('jwtToken') != null;
}

export default function BookPage() {
    const { id } = useParams();
    const [book, setBook] = useState<Book>();
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        fetch(getEndpoint() + 'api/Book/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                var res = await response.json();
                //console.log(res.title);
                setBook(res);
            })
            .catch(error => console.error('Error fetching data: ', error));

    }, [id]);

    const addToCart = () => {
        if (!isSigned()) {
            setOpenDialog(true);
            return;
        }

        if (book) {
            var cart = localStorage.getItem("cart");
            if (cart === undefined || cart === null)
                cart = "";
            cart += book.id + ";";
            if (cart)
                localStorage.setItem("cart", cart);
        }

        //localStorage.setItem("cart", cart != null ? cart : "" + (book !== undefined ? book?.id : ""));
        //console.log(localStorage.getItem("cart"));
    };

    const navigate = useNavigate();

    const signInAction = () => {
        setOpenDialog(false);
        navigate("/signIn")
    }

    const cancelAction = () => {
        setOpenDialog(false);
    }

    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ paddingY: 2 }}>
            <Grid container spacing={2} sx={{ marginY: 5, display: 'flex', justifyContent: 'center' }}>
                {/*<Box sx={{ marginY: 10, display: 'flex' }}>*/}
                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'left' }}>
                    <img src={book?.coverImageUrl} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ margin: 3 }}>
                    <Typography variant="h4">
                        {book?.title}
                    </Typography>
                    <Typography>
                        {book?.author}
                    </Typography>
                    {/* Rating */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6">
                            Overview
                        </Typography>
                        <Typography>
                            {book?.description}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 2 }}>
                        <Typography variant="h6">
                            ${book?.price}
                        </Typography>
                        <Button variant="contained" sx={{ marginLeft: 2 }} onClick={addToCart}>Add to cart</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Footer />
        <Dialog
            open={openDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Sign in required"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please, sign in to your account to add this item to cart.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={cancelAction}>Cancel</Button>
                <Button variant="contained" onClick={signInAction} autoFocus>
                    Sign in
                </Button>
            </DialogActions>
        </Dialog>
    </>;
}