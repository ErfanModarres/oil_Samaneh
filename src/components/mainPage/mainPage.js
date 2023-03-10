import React, { useState, useEffect } from 'react'
import { Button, Grid, Divider, Modal, TextField, Hidden } from '@material-ui/core'
import axios from 'axios'
import useStyles from './mainPage.styles'
import ProductList from '../productList/productList'
import Basket from '../basket/basket'
import CarList from '../carInfo/car'
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import './mainPage.css'
import Header from '../header'
import { useSelector, useDispatch } from 'react-redux'
import { getCarList } from './mainPageSlice'
import Flag from '../../assets/images/pelak.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Loading from '../loading'
import TireList from '../productList/tireList'
import TireImage from '../../assets/images/Tire.169.jpg'
import BrandLogo from '../../assets/images/barez.png'
import BehranLogo from '../../assets/images/behran.svg'




function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}




export default function Login(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [licensePlateArray, setLicensePlateArray] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [plakNumber, setPlakNumber] = useState({ a: "", b: "", c: "", d: "" })
    const [chassi, setChassi] = useState('')
    const [engine, setEngine] = useState('')
    const [checked, setChecked] = React.useState(false);
    const allocate = []
    const order = useSelector((state) => state.counter.value)
    const [progress, setProgress] = useState ()



    useEffect(() => {
        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            // let response = await config.post('http://94.139.170.162:7700/api/oil_sales/v1/inprocess_sale_order_by_key, { vKey: key }, { headers: headers });
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/inprocess_sale_order_by_key', { vKey: key }, { headers: headers });
            if (response.data.settings.success === 1) {
                setProgress(response.data);
                console.log(`progress : ${JSON.stringify(progress)}`);

            }else {
            console.log(`%%%%%%%%%%%%% : ${JSON.stringify(progress)}`);
            response = response.data }
        }
        getList(title, headers);
    }, []);






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
                dispatch(getCarList(response.data.data));
                setLoading(false);
            }
            response = response.data
        }
        getList(article, headers);

    }, []);



    const PelakLetters = [
        '??????', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??'
    ]

    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    function handleDPlakChange(e) {
        plakNumber.d = e.target.value;
    }

    function handleCPlakChange(e) {
        plakNumber.c = e.target.value;
    }


    function handleBPlakChange(e,) {
        plakNumber.b = PelakLetters[parseInt(e.target.getAttribute('data-option-index'))];
    }


    function handleAPlakChange(e) {
        plakNumber.a = e.target.value;
    }


    const addCarHandler = (e) => {
        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const title = { title: 'React POST Request Example' };
        const data = {
            vKey: key,
            vChassisNo: chassi,
            vEngineNo: engine,
            LicensePlate: plakNumber
        }
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/customer_car_add', data, { headers: headers })
            // let response = await config.post('http://94.139.170.162:7700/api/oil_sales/v1/customer_car_add', {vKey: key, vChassisNo: chassi,  vEngineNo: engine, LicensePlate: plakNumber}, { headers: headers })
            console.log(`add car :${JSON.stringify(response)}`);
            if (response.data.settings.success == 1) {
                const plakArray = [response.data.data];
                handleClose();
                alert("???????????? ???????? ?????? ???? ???????????? ?????????? ????")
                window.location.reload();

            }
            response = response.data

        }
        getList("", headers)
    };




    return (
        <Grid className={classes.root}>
            <Grid className={classes.header}>
                <Header />
            </Grid>
            <Grid className={classes.body}>
                <Hidden mdDown>
                    <Grid className={classes.sideBar}>
                        <Grid className={classes.sideBarInfo}>
                            <span>???????? ?????????? ???? ?????????? ???????? ?????????????? <br /> ??????????(??????) ?????? ???? ?????? ???? ???????????? ????????????</span>
                            <Button
                                style={{ marginTop: 10 }}
                                color='primary'
                                fullWidth
                                variant='contained'
                                startIcon={<TimeToLeaveIcon />}
                                onClick={handleOpen}
                                size='large'
                            >
                                ?????? ???????????? ????????
                            </Button>
                        </Grid>
                        {loading ? <Loading /> : null}
                        {licensePlateArray.map((l, index) => {
                            const code = l.codeMessage
                            const vMessage = l.vMessage

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
                                    // tire={2}
                                    message = {code !=0 ? vMessage : null}
                                />
                            )
                        })}
                    </Grid>
                </Hidden>
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
                                price={p.iPrice}
                                brandLogo={BehranLogo}

                            />
                        )
                    })}

                    <TireList
                        title={"???????????? ???????? ???????? 13"}
                        price={6331073}
                        brand={'???????? ??????????'}
                        model={'P648'}
                        image={TireImage}
                        size={'165/65R13'}
                        brandLogo={BrandLogo}
                    />
                </Grid>
                <Hidden mdDown>
                    {order != 0 ? <Grid className={classes.sideBar}>
                        <Basket />
                    </Grid> : null}
                </Hidden>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <Grid className={classes.paper}>
                    <h3>???????? ?????? ???????????? ???????? ?????????????? ?????? ???? ???????? ???????????? </h3>
                    <Grid className={classes.addPelak}>
                        <TextField placeholder='11' variant='filled' size='medium' onChange={handleDPlakChange} style={{ width: 50, height: 57, border: '1px solid #000', marginBottom: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5, textDecoration: 'none' }} ></TextField>
                        <TextField placeholder='987' variant='filled' size='medium' onChange={handleCPlakChange} style={{ width: 60, height: 57, border: '1px solid #000', borderRight: 'none', marginBottom: 10 }}></TextField>
                        <Autocomplete
                            options={PelakLetters}
                            onChange={handleBPlakChange}
                            getOptionLabel={(option) => option}
                            style={{ width: 50, height: 57, border: '1px solid #000', borderRight: 'none', marginBottom: 10 }}
                            renderInput={(params) => <TextField placeholder='??' variant='filled' {...params} />}
                        />
                        <TextField placeholder='12' onChange={handleAPlakChange} variant='filled' size='medium' style={{ fontWeight: 'bold', fontSize: 20, width: 50, height: 57, border: '1px solid #000', borderLeft: 'none', marginBottom: 10, marginRight: -2 }}></TextField>
                        <img src={Flag} style={{ marginTop: -1, marginLeft: -2, height: 59 }} />
                    </Grid>
                    <TextField variant='outlined' label='?????????? ????????' size='medium' style={{ marginTop: 10, width: '75%' }} onChange={event => setChassi(event.target.value.toUpperCase())}>?????????? ????????</TextField>
                    <TextField variant='outlined' label='?????????? ??????????' size='medium' style={{ marginTop: 10, width: '75%' }} onChange={event => setEngine(event.target.value.toUpperCase())}>?????????? ??????????</TextField>
                    <Button
                        style={{ margin: 10, width: '75%', backgroundColor: '#00acc1' }}
                        onClick={addCarHandler}
                        size='large'
                        variant='contained'
                    >?????????? ???????? ??????????
                    </Button>
                    <Button
                        style={{ margin: 10, width: '75%' , backgroundColor: '#ff0000', color:'#fff'}}
                        onClick={handleClose}
                        size='large'
                        variant='contained'
                    >????????????
                    </Button>
                </Grid>
            </Modal>
        </Grid>
    )
}
