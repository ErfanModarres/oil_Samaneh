import React from 'react'
import { Grid, Button, Divider, Hidden } from '@material-ui/core'
import useStyles from './productList.styles'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from './productListSlice'
import Best from '../../assets/images/best.png'




export default function ProductList(props) {
    // const count = useSelector((state) => state.counter.value)
    // const price = useSelector((state) => state.counter.price)
    const Title = useSelector((state) => state.counter.productTitle)
    const quota = useSelector((state) => state.counter.quota)
    const dispatch = useDispatch()
    const classes = useStyles();


   return (
        <Grid className={classes.productBox}>
            <Grid className={classes.productPicArea}>
                <img alt="" src={props.image} className={classes.productPic} />
            </Grid>
            <Grid className={classes.productData}>
                <h2 style={{ lineHeight: 1.5 }}>{props.title}</h2>
                <h4>حجم : {props.volume} لیتر</h4>
                <h4>استاندارد : {props.api}</h4>
                <h4>درجه گرانروی : {props.viscosity}</h4>
                <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                    <h4>تولیدکننده : {props.brand}</h4>
                    <img src={props.brandLogo} style={{ height: 30, marginRight: 20 }} />
                </Grid>
            </Grid>
            <Hidden smDown>
                <img src={Best} style={{ height: 200, marginTop: -12 , marginLeft:50}} />
            </Hidden>
            <Hidden smDown>
                <Divider variant="middle" orientation="vertical" style={{ marginRight: 25 }} />
            </Hidden>
            <Grid className={classes.productOrder}>
                <h2>{props.price.toLocaleString("en-US")}  ریال</h2>
                <h4>قیمت مصرف کننده <br />با احتساب مالیات ارزش افزوده</h4>
                <Button
                    variant="contained"
                    color='primary'
                    size="large"
                    fullWidth
                    disabled={quota < 4}
                    onClick={() => dispatch(addToCard({ Title: props.title, Price: props.price, Id: props.iCode, liter: props.volume }))}
                >افزودن به سبد خرید</Button>
            </Grid>

        </Grid>
    )
}
