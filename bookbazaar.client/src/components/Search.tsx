import TextField from '@mui/material/TextField';

export default function SearchField() {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search by Title, Author, or ISBN"
            fullWidth
        />
    );
}
