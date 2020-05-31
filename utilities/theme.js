import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            // light: '',
            main: '#ed7d0e',
            // dark: '#706f6f',
            // contrastText: ''
        },
        secondary: {
            // light: '#8f7666',
            main: '#3e2516',
            // dark: '',
            // contrastText: ''
        },
        error: {
            main: '#000'
        },
        text: {
            primary: '#fff'
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            "sans-serif"
        ],
        fontSize: 13,
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: '#ed7d0e',
                color: '#fff'
            },
            containedSecondary: {
                backgroundColor: '#fde0cc',
                color: '#3e2516',
                '&:hover': {
                    backgroundColor: '#fde0cc90'
                }
            },
            outlinedPrimary: {
                borderColor: '#ed7d0e',
                color: '#ed7d0e'
            },
            outlinedSecondary: {
                borderColor: '#fde0cc',
                color: '#fde0cc',
                '&:hover': {
                    borderColor: '#fde0cc90'
                }
            },
        }
    }
});

export default theme;