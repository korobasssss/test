import React, {useEffect, useState} from 'react'
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import API from "../../services/API"
import {useLocation, useNavigate} from "react-router-dom"

export default function OfferForm() {
    const [id, setId] = useState(null)
    const [isNew, setIsNew] = useState(false)
    const location = useLocation()
    const [formData, setFormData] = useState({
        productName: '',
        productNumber: 0,
        productInfo: '',
        ableToLicenceTransfer: false,
        ableToCreateTrialLicence: false,
    })
    const navigate = useNavigate()


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)

        if (searchParams.has('id')) {
            const idValue = searchParams.get('id')
            setId(idValue)
            setIsNew(false)
            API.get(`/?id=${idValue}`).then((data) => {
                setFormData(data)
            })
        } else {
            setId(null)
            setIsNew(true)
        }
    }, [location])

    const handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormData({...formData, [name]: value,})
    }

    const handleRemove = async (e) => {
        e.preventDefault()
        await API.delete(`/?id=${id}`)
        navigate("/list")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isNew) {
            await API.post("/", formData)
        } else {
            await API.put(`/?id=${id}`, formData)
        }
        navigate("/list")
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Новый продукт
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="productName"
                            name="productName"
                            value={formData.productName}
                            label="Название продукта"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            required
                            id="productNumber"
                            name="productNumber"
                            value={formData.productNumber}
                            label="Номер продукта"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="productInfo"
                            name="productInfo"
                            value={formData.productInfo}
                            label="Описание продукта"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Настройки программной лицензии
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox id="ableToLicenceTransfer"
                                               name="ableToLicenceTransfer"
                                               checked={formData.ableToLicenceTransfer}
                                               inputProps={{'aria-label': 'controlled'}}
                                               onChange={handleChange}/>}
                            label="Возможность переноса лицензии"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox id="ableToCreateTrialLicence"
                                          name="ableToCreateTrialLicence"
                                          checked={formData.ableToCreateTrialLicence}
                                          inputProps={{'aria-label': 'controlled'}}
                                          onChange={handleChange}/>
                            }
                            label="Возможность генерации пробных лицензий"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            {isNew ? "Создать продукт" : "Обновить продукт"}
                        </Button>
                        {!isNew
                            && <Button onClick={handleRemove} variant="contained" color="error">
                                <DeleteOutlineIcon/>
                            </Button>
                        }
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}
