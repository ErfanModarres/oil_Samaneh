import React, { useState } from 'react'
import { Grid, Divider, Button } from '@material-ui/core'
import useStyles from './car.styles'
import LicensePlate from '../licensePlate/licensePlate'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Tire_Icon from '../../assets/images/tire.png'
import Oil_Icon from '../../assets/images/oil_icon.jfif'
import Radio from '@material-ui/core/Radio';


export default function Car(props) {
    const classes = useStyles();
    const [check, setCheck] = React.useState({
        checked: false,
    });

    const key = localStorage.getItem(`key`);
    const carId = props.carId;
    const authorization = localStorage.getItem('authorization');
    const [totalAllocation, setTotalAllocation] = useState(0)
    const dispatch = useDispatch()
    const checkedCar = useSelector((state) => state.carInfo.value.isActive)
    const [selectedValue, setSelectedValue] = React.useState();

    const radioHandleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const deleteCarHandler = (e) => {

        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/customer_car_delete', { vKey: key, vCustomerCarId: carId }, { headers: headers })

            if (response.data.settings.success == 1) {
                alert(" خودروی مورد نظر با موفقیت حذف شد");
                window.location.reload();
            }
            response = response.data
            // console.log(`${JSON.stringify(response)}`);
        }
        getList("", headers)
    };

    return (
        <Grid className={classes.root}>
            <Grid className={classes.control}>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={radioHandleChange}
                    value="a"
                    color='primary'
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />

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
                    <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>

                        <img src={Oil_Icon} style={{ width: 50, marginRight: -10 }} />
                        <h3>سهمیه روغن موتور : {props.litter} لیتر</h3>

                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>

                        <img src={Tire_Icon} style={{ width: 35, opacity: '60%', marginLeft: 5 }} />
                        <h3>سهمیه لاستیـــک  : {props.tire} حلقه</h3>
                    </Grid>

                    <span>شماره شاسی : {props.chassi}</span>
                    <span>شماره موتور : {props.motor}</span>
                </Grid>
            </Grid>
        </Grid>
    )
}
