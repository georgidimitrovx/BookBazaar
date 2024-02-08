// theme.js
import { Palette } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#003E59',
        },
        secondary: {
            main: '#ffffff',
        },
        //text: {
        //    primary: '#003E59',
        //    secondary: '#FFFFFF'
        //},
        
        // Add other colors or customize as needed
    },
    typography: {
        //allVariants: {
        //    color: '#ffffff',
        //}
        // Define your typography variants
        //fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        //h1: {
        //    fontSize: '2.2rem',
        //    fontWeight: 500,
        //},
        // Add more typography styles as needed
    },
    // You can also customize other theme aspects like spacing, components, etc.
});

export default customTheme;
