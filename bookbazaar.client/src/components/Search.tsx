import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchField() {
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const value = searchParams.get('value');
        if (value)
            setSearchValue(value);
    }, [location.search]);

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            window.location.href = `/search?value=${searchValue}`;
        }
    };

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search by Title, Author, or ISBN"
            fullWidth
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyDown={handleKeyPress}
            value={searchValue}
        />
    );
}
