import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {AppBar, Button, Container, Grid, Toolbar, Typography} from "@mui/material"
import OfferForm from "../offer_form/OfferForm"
import OffersTable from "../offers_table/OffersTable"

export default App

function App() {
    return <Grid container justifyContent="center">
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6">Licence Manager</Typography>
                <Button component={Link} to="/create" variant="contained">Создать заявку</Button>
                <Button component={Link} to="/list" variant="contained">Заявки</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
            <Routes>
                <Route index element={<OfferForm/>}/>
                <Route path="create" element={<OfferForm/>}/>
                <Route path="edit" element={<OfferForm/>}/>
                <Route path="list" element={<OffersTable/>}/>
            </Routes>
        </Container>
    </Grid>
}