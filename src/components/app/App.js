import React, {useState} from 'react'
import {AppBar, Button, Container, Grid, Toolbar, Typography} from "@mui/material"
import CreateOfferForm from "../create_offer_form/CreateOfferForm"
import OffersTable from "../offers_table/OffersTable"

export default App

function App() {
    const [selectedComponent, setSelectedComponent] = useState('create')

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'create':
                return <CreateOfferForm/>
            case 'list':
                return <OffersTable/>
            default:
                return null
        }
    }

    return <Grid container justifyContent="center">
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6">Licence Manager</Typography>
                <Button onClick={() => setSelectedComponent('create')} variant="contained">Создать заявку</Button>
                <Button onClick={() => setSelectedComponent('list')} variant="contained">Заявки</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
            {renderComponent()}
        </Container>
    </Grid>
}