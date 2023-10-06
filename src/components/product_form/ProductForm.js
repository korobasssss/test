import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";

export default function ProductForm() {
    const [formData, setFormData] = useState({
        productName: '',
        productNumber: '',
        productInfo: '',
        ableToLicenceTransfer: false,
        ableToCreateTrialLicence: false,
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormData({...formData, [name]: value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Отправка данных через REST API
        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Данные успешно отправлены');
            } else {
                console.error('Ошибка при отправке данных');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных', error);
        }
    };

    return (<Paper>
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
                        label="Номер продукта"
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="productInfo"
                        name="productInfo"
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
                        control={<Checkbox name="ableToLicenceTransfer" onChange={handleChange}/>}
                        label="Возможность переноса лицензии"
                    />
                    <FormControlLabel
                        control={<Checkbox name="ableToCreateTrialLicence" onChange={handleChange}/>}
                        label="Возможность генерации пробных лицензий"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Создать продукт
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Paper>);
};
