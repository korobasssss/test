import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#30d1ff',
            light: '#30d1ff',
            dark: '#21a1c4',
        },
        secondary: {
            main: '#62e3ff',
            light: '#62e3ff',
            dark: '#21a1c4',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#2e3138',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '5px 10px',
                    margin: '10px',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '20px 20px',
                    margin: '10px',
                    backgroundColor: '#ffffff',
                }
            }
        }
    }
});
export default theme;