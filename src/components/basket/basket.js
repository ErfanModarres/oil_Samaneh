import React, { useState, useEffect } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden, TextField } from '@material-ui/core'
import useStyles from './basket.styles'
import { useSelector, useDispatch } from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { removeFromCard, dec_count, inc_count } from '../productList/productListSlice'
import axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tipax from '../../assets/images/tipax.jpg'
import Pido from '../../assets/images/pido_oil.jpg'
import Address from '../address/address'
import RoomIcon from '@material-ui/icons/Room';





export default function Basket(props) {
    const classes = useStyles();
    const orderCount = useSelector((state) => state.counter.value)
    const totalPrice = useSelector((state) => state.counter.totalPrice)
    const carInfo = useSelector((state) => state.carInfo.value)
    const [itemCount, setItemCount] = useState(1)
    const dispatch = useDispatch()
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };



    const nav = () => {
        window.location.href = '/hamed';
    }
    const paymentHandler = (e) => {
        console.log('start ********************')
        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        setLoading(true)
        const getList = async (title, headers) => {
            console.log(`car info ${JSON.stringify(carInfo)}`)
            console.log(`order count ${JSON.stringify(orderCount)}`)
            const data = {
                vKey: key,
                iTotalLiter: 4,
                iTotalPrice: totalPrice,
                Cars: [{
                    "vChassisNo": carInfo[0].vChassisNo,
                    "vEngineNo": carInfo[0].vEngineNo,
                    "iLiter": carInfo[0].iLiter
                }],
                Products: [{
                    "iCode": orderCount[0].Id,
                    "iPrice": orderCount[0].Price,
                    "iCount": orderCount[0].count,
                    "iLiter": 4
                }]
            }
            console.log(`payment data ; ${JSON.stringify(data)}`)
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/sale_order_add', data, { headers: headers })
            // let response = await config.post('http://94.139.170.163:7700/api/oil_sales/v1/customer_car_add',  data, { headers: headers });
            // console.log(`Link ; ${JSON.stringify(response.data.data)}`)
            setOpenBackDrop(false)
            if (response.data.settings.success == 1) {
                const url = [response.data.data.vPaymentUrl];
                console.log(`URL ; ${JSON.stringify(url)}`)
                window.location.href = url
                // nav()

            }
            response = response.data

        }
        getList("", headers)
    };


    return (
        <Grid className={classes.basketBox}>
            <Backdrop className={classes.backdrop} open={openBackDrop} >
                <CircularProgress color="inherit" />
                <h3> تا لحظاتی دیگر به درگاه پرداخت الکترونیکی منتقل خواهید شد <br></br> از صبر و شکیبایی شما سپاسگزاریم</h3>
            </Backdrop>
            <Grid className={classes.basketTitel}>
                <h2>سبد خرید شما</h2>
                <span>برای خرید ابتدا حداقل یک خودرو را انتخاب نمایید</span>
            </Grid>
            <Divider variant="middle" style={{ margin: 10 }} />
            <Grid className={classes.basketBody}>
                {orderCount.map((z, index) => {
                    return (
                        <Grid className={classes.basketItem}>
                            <Grid className={classes.basketItemControl}>
                                <h3>{z.Title}</h3>
                                <ButtonGroup variant="contained" color="primary" size="small" className={classes.ButtonGroup}>
                                    <Button onClick={() => dispatch(inc_count(z.Id))}>+</Button>
                                    <Button>{z.count}</Button>
                                    <Button onClick={() => dispatch(dec_count(z.Id))} disabled={z.count == 0}>-</Button>
                                </ButtonGroup>
                                <Button onClick={() => dispatch(removeFromCard(z.Id))}>
                                    <DeleteForeverIcon color="primary" />
                                </Button>
                            </Grid>
                            <Grid className={classes.basketPrice}>
                                <Grid className={classes.priceTitle}>
                                    <ul className={classes.list}>
                                        <li>
                                            قیمت واحد :
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid className={classes.priceAmount}>
                                    <ul className={classes.list}>
                                        <li>
                                            {z.Price.toLocaleString("en-US")} ریال
                                        </li>

                                    </ul>

                                </Grid>
                            </Grid>
                            <Divider variant="middle" style={{ margin: 10 }} />

                        </Grid>
                    )
                })}
                <Grid>
                    < Grid className={classes.totalPrice}>
                        <Grid className={classes.priceTitle}>
                            <ul className={classes.list}>
                                <li>
                                    <h4>
                                        مبلغ قابل پرداخت  :
                                    </h4>
                                </li>

                            </ul>
                        </Grid>
                        <Grid className={classes.priceAmount}>

                            <ul className={classes.list}>
                                <li>
                                    <h4>
                                        {totalPrice.toLocaleString("en-US")} ریال
                                    </h4>
                                </li>
                            </ul>

                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{ margin: 10 }} />
                    <FormControl component="fieldset" style={{ width: '100%' }}>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <Grid className={classes.post}>
                                {/* <FormLabel component="legend" >انتخاب نحوه تحویل کالا</FormLabel> */}
                                <Grid className={classes.send}>
                                    <FormControlLabel value="mehrabad" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }} control={<Radio color='primary' />} label="دریافت از انبار پیدو" />
                                    <img src={Pido} style={{ height: 30, marginTop: 5 }} />
                                </Grid>
                                <Grid style={{ padding: 10 }}>
                                    {value == 'mehrabad' ? <span>محل تحویل کالا : تهران ، فرودگاه مهرآباد ، خیابان حجاج بعد از پارکینگ شماره 5</span> : null}
                                </Grid>
                                <Grid className={classes.send}>
                                    <FormControlLabel value="tipax" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%' }} control={<Radio color='primary' />} label="ارسال از طریق تیپاکس" />
                                    <img src={Tipax} style={{ height: 30, marginTop: 5 }} />
                                </Grid>
                                <Grid style={{ padding: 10 }}>
                                    {value == 'tipax' ? <span  >هزینه ارسال تیپاکس بستگی به مقصد و بصورت پس کرایه و بر عهده مشتری می باشد</span> : null}
                                    {value == 'tipax' ? <Button variant='outlined' color='primary' fullWidth size='large' startIcon={<RoomIcon />} style={{ marginTop: 5 }}>ثبت آدرس</Button> : null}

                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={paymentHandler}
                        size='large'
                        disabled={loading ? true : false}
                        style={{ marginTop: 10 }}
                    >
                        {loading ? <CircularProgress className={classes.CircularProgress} size={20} /> : null}
                        پرداخت صورتحساب
                    </Button>

                </Grid>
            </Grid>
        </Grid >
    )
}