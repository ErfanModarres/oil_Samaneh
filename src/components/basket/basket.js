import React, { useState, useEffect } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden } from '@material-ui/core'
import useStyles from './basket.styles'
import { useSelector, useDispatch } from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BasketIcon from '../../assets/images/basket.png'
import { removeFromCard ,dec_count,inc_count  } from '../productList/productListSlice'





export default function Basket(props) {
    const classes = useStyles();
    const orderCount = useSelector((state) => state.counter.value)
    const totalPrice=useSelector((state) => state.counter.totalPrice)
    // const itemCount=useSelector((state)=> state.counter.value.count)
    
    const [itemCount, setItemCount] = useState(1)
    const dispatch = useDispatch()

    // function counterPlus(e) {
    //     setItemCount(itemCount + 1)
    // }
    // function counterMinus(e) {
    //     if (itemCount > 0) {
    //         setItemCount(itemCount - 1)
    //     }
    // }

    console.log(JSON.stringify(orderCount));

    return (
        <Grid className={classes.basketBox}>
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
                                    <Button onClick={()=> dispatch(inc_count(z.Id))}>+</Button>
                                    {/* <Button>{itemCount}</Button> */}
                                    <Button>{z.count}</Button>
                                    <Button onClick={()=> dispatch(dec_count(z.Id))}>-</Button>
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
                                        مبلغ کل صورتحساب :
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
                                        رایگان
                                    </h4>
                                </li>


                            </ul>

                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        پرداخت صورتحساب
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}
