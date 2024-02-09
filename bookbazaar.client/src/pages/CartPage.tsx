import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import React from "react";
interface BookItemArray {
    [key: string]: BookCardData;
}

export default function CartPage() {
    const [bookDataArray, setBookDataArray] = useState<BookCardData[]>();
    const [totalPrice, setTotalPrice] = useState<number>(0.00);
    const [refreshData, setRefreshData] = useState(true);

    useEffect(() => {
        if (!refreshData)
            return;

        const itemArray: BookItemArray = {};
        const cartRaw = localStorage.getItem("cart");
        //console.log(cartRaw);
        const split = cartRaw?.split(';');
        //console.log(split);
        if (split) {
            for (let item of split) {
                if (item == "")
                    continue;
                if (itemArray[item] === undefined) {
                    itemArray[item] = {
                        id: parseInt(item),
                        title: '',
                        description: '',
                        author: '',
                        price: 0,
                        inventory: 0,
                        coverImageUrl: ''
                    };
                }
                itemArray[item].inventory++;
            }
        }

        const fetchData = async () => {
            for (let key in itemArray) {
                const bookData: BookCardData = itemArray[key];
                await fetch('https://localhost:7106/api/Book/' + bookData.id)
                    .then(response => response.json())
                    .then((data: BookCardData) => {
                        itemArray[key].author = data.author;
                        itemArray[key].coverImageUrl = data.coverImageUrl;
                        itemArray[key].price = data.price;
                        itemArray[key].title = data.title;
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }

            setBookDataArray(Object.values(itemArray));

            var totalSum = 0.0;
            for (let key in itemArray) {
                const book: BookCardData = itemArray[key];
                totalSum += book.price * book.inventory;
            }
            setTotalPrice(totalSum);

        };

        fetchData();
        setRefreshData(false);
    }, [refreshData]);

    const deleteItem = (id: number) => {
        const cartRaw = localStorage.getItem("cart");
        let split = cartRaw?.split(';');

        if (split === undefined)
            return;

        split = split.filter(book => book != id.toString());

        localStorage.setItem("cart", split.join(';'));

        setRefreshData(true);
    };

    return <>
        <ResponsiveAppBar />
        <Container maxWidth="md" sx={{ marginY: 3 }}>
            <Typography variant="h4">Shopping Cart</Typography>
            <Grid container sx={{ marginTop: 1 }} spacing={3}>
                <Grid item xs={9}>
                    <Typography variant="h6">
                        Item
                    </Typography>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Typography variant="h6">
                        Qty
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                    <Typography variant="h6">
                        Price
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Box sx={{ marginTop: 5 }}></Box>
                {bookDataArray === undefined ? <></> :
                    bookDataArray.map((book) => (
                        <React.Fragment key={book.id}>
                            <Grid item xs={9} md={3}>
                                <Typography>
                                    <img src={book.coverImageUrl} />
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Typography variant="h6">
                                    {book.title}
                                </Typography>
                                <Typography>
                                    {book.author}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <Typography>
                                    {book.inventory}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }} >
                                <Typography>
                                    ${book.price}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick={() => deleteItem(book.id)}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                        </React.Fragment>
                    ))}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', marginTop: 5 }}>
                    <Typography>
                        Total:&nbsp;
                    </Typography>
                    <Typography style={{ fontWeight: 'bold' }}>
                        ${totalPrice}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right' }}>
                    <Link href="/checkout">
                        <Button variant="contained">
                            Checkout
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
        <Footer />
    </>
}