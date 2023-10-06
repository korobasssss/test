import React from 'react';
import './index.css';
import App from './components/app/App';
import theme from './theme';
import {createRoot} from "react-dom/client";
import {CssBaseline, ThemeProvider} from "@mui/material";


createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
)