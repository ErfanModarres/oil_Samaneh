import React, { useState, useEffect } from 'react'
import { Button, Grid, Divider } from '@material-ui/core'
import axios from 'axios'
import useStyles from './mainPage.styles'
import ProductList from '../productList/productList'
import Basket from '../basket/basket'
import CarList from '../carInfo/car'
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '../modal/index'
import './mainPage.css'
import Header from '../header'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory'
import { useSelector, useDispatch } from 'react-redux'
import {getCarList} from './mainPageSlice'





export default function Login(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [licensePlateArray, setLicensePlateArray] = useState([]);
    const [openBackDrop, setOpenBackDrop] = React.useState(true);
    const dispatch = useDispatch()



    const handleBackDropClose = () => {
        setOpenBackDrop(false);
    };

    useEffect(() => {
        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            // let response = await config.post('http://94.139.170.162:7700/api/oil_sales/v1/product_list', { vKey: key }, { headers: headers });
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/product_list', { vKey: key }, { headers: headers });
            if (response.data.settings.success === 1) {
                setProductList(response.data.data);
                console.log(response.data.data);

            }
            response = response.data
        }
        getList(title, headers);
    }, []);



    useEffect(() => {

        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const article = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            // let response = await config.post('http://94.139.170.162:7700/api/oil_sales/v1/customer_car_by_key', { vKey: key }, { headers: headers });
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/customer_car_by_key', { vKey: key }, { headers: headers });
            if (response.data.settings.success === 1) {
                setLicensePlateArray(response.data.data);
                dispatch(getCarList(response.data.data))
                console.log(`Request body ${JSON.stringify(response.data.data)}`);
                setTimeout(handleBackDropClose, 1000);

            }
            response = response.data
        }
        getList(article, headers);

    }, []);



    return (
        <Grid className={classes.root}>
            <Backdrop className={classes.backdrop} open={openBackDrop} >
                <CircularProgress color="inherit" />
                <h3> لطفا چند ثانیه صبر کنید <br></br> لیست خودروهای شما در حال بروز رسانی می باشد </h3>
            </Backdrop>
            <Grid className={classes.header}>
                <Header />
            </Grid>
            <Grid className={classes.body}>
                <Grid className={classes.sideBar}>
                    <Grid className={classes.sideBarInfo}>
                        <span>برای اطلاع از سهمیه قابل استفاده ، خودرو(های) خود را ثبت یا انتخاب نمایید</span>
                        <Button
                            style={{ marginTop: 10 }}
                            color='primary'
                            fullWidth
                            variant='contained'
                            startIcon={<TimeToLeaveIcon />}
                        >
                            ثبت خودروی جدید
                        </Button>
                    </Grid>

                    {licensePlateArray.map((l, index) => {
                        return (
                            <CarList
                                iran={l.LicensePlate.d}
                                three={l.LicensePlate.c}
                                letter={l.LicensePlate.b}
                                two={l.LicensePlate.a}
                                chassi={l.vChassisNo}
                                motor={l.vEngineNo}
                                litter={l.iLiter}
                                carId={l.vCustomerCarId}
                            />
                        )
                    })}
                </Grid>
                <Grid className={classes.productBox}>
                    {productList.map((p, index) => {
                        return (
                            <ProductList
                                iCode={p.iCode}
                                title={p.vTitle}
                                volume={p.iLiter}
                                api={p.vAPI}
                                viscosity={p.vSAE}
                                brand={p.vBrand}
                                image={p.vLink}
                                // price={p.iPrice.toLocaleString("en-US")}
                                price={p.iPrice}
                            />
                        )
                    })}

                </Grid>
                <Grid className={classes.sideBar}>
                    <Basket />
                </Grid>
                {/* <Modal/> */}
            </Grid>
        </Grid>
    )
}
