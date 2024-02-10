import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getEndpoint } from '../../Helpers';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

interface BookItemArray {
    [key: string]: BookCardData;
}

export default function Review() {
    // todo proucts

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
                await fetch(getEndpoint() + 'api/Book/' + bookData.id)
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
            totalSum = Math.round(totalSum * 100) / 100;
            setTotalPrice(totalSum);
        };

        fetchData();
        setRefreshData(false);
    }, [refreshData]);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {bookDataArray === undefined ? <></> :
                    bookDataArray.map((product) => (
                        <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary={product.title} secondary={product.author} />
                            <Typography variant="body2">
                                {product.inventory} x ${product.price}
                            </Typography>
                        </ListItem>
                    ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
