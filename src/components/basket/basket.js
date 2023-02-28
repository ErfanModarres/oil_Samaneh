import React, { useState, useEffect } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden } from '@material-ui/core'
import useStyles from './basket.styles'
import { useSelector, useDispatch } from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BasketIcon from '../../assets/images/basket.png'
import { removeFromCard, dec_count, inc_count } from '../productList/productListSlice'
import axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { totalOrderLiter } from './basketSlice'





export default function Basket(props) {
    const classes = useStyles();
    const orderCount = useSelector((state) => state.counter.value)
    const totalPrice = useSelector((state) => state.counter.totalPrice)
    const carInfo = useSelector((state) => state.carInfo.value)
    const [itemCount, setItemCount] = useState(1)
    const dispatch = useDispatch()
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    // const total = dispatch(totalOrderLiter.totalOrderLiter)



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
        setOpenBackDrop(true)
        const getList = async (title, headers) => {
            // console.log(`car info ${JSON.stringify(carInfo)}`)
            // console.log(`order count ${JSON.stringify(orderCount)}`)
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
            console.log(`Link ; ${JSON.stringify(response.data.data)}`)
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
                                    {/* <Button>{itemCount}</Button> */}
                                    <Button>{z.count}</Button>
                                    <Button onClick={() => dispatch(dec_count(z.Id))}>-</Button>
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

                                <li>
                                    <h4>
                                        هزینه ارسال  :
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
                                <li>
                                    <h4>
                                        محاسبه نشده
                                    </h4>
                                </li>


                            </ul>

                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={paymentHandler}
                    >
                        پرداخت صورتحساب
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}
