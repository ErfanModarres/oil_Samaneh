import React from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import useStyles from './car.styles'
import LicensePlate from '../licensePlate/licensePlate'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'



export default function Car(props) {
    const classes = useStyles();
    const [check, setCheck] = React.useState({
        checked: false,
    });
    const key = localStorage.getItem(`key`);
    const carId = props.carId;
    const authorization = localStorage.getItem('authorization');



    const handleChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
    };


    const deleteCarHandler = (e) => {

        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/customer_car_delete', { vKey: key, vCustomerCarId: carId }, { headers: headers })

            if (response.data.settings.success == 1) {
                alert(" خودروی مورد نظر با موفقیت حذف شد ، برای بروزرسانی لیست صفحه را رفرش کنید")
            }
            response = response.data
            // console.log(`${JSON.stringify(response)}`);
        }
        getList("", headers)
    };

    return (
        <Grid className={classes.root}>
            <Grid className={classes.control}>
                <Checkbox
                    checked={check.checked}
                    onChange={handleChange}
                    name="checked"
                    color="primary"
                />
                <Button>
                    <EditIcon />
                </Button>
                <Button onClick={deleteCarHandler}>
                    <DeleteForeverIcon />
                </Button>
            </Grid>
            <Divider variant="middle" orientation="vertical" />
            <Grid className={classes.info}>
                <Grid className={classes.body}>
                    <LicensePlate
                        iran={props.iran}
                        three={props.three}
                        letter={props.letter}
                        two={props.two}
                    />
                </Grid>
                <Grid className={classes.motor}>
                    <h3>سهمیه قابل استفاده : {props.litter} لیتر</h3>
                    <span>شماره شاسی : {props.chassi}</span>
                    <span>شماره موتور : {props.motor}</span>
                </Grid>
            </Grid>
        </Grid>
    )
}
