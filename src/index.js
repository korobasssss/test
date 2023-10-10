import React from 'react';
import './index.css';
import App from './components/app/App';
import theme from './theme';
import {createRoot} from "react-dom/client";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)