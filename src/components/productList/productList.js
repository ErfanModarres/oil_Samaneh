import React from 'react'
import { Grid, Button } from '@material-ui/core'
import useStyles from './productList.styles'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from './productListSlice'




export default function ProductList(props) {
    // const count = useSelector((state) => state.counter.value)
    // const price = useSelector((state) => state.counter.price)
    const Title = useSelector((state) => state.counter.productTitle)

    const dispatch = useDispatch()
    const classes = useStyles();

    return (
        <Grid className={classes.productBox}>
            <Grid className={classes.productPicArea}>
                <img alt="" src={props.image} className={classes.productPic} />
            </Grid>
            <Grid className={classes.productData}>
                <h2>{props.title}</h2>
                <h4>حجم : {props.volume} لیتر</h4>
                <h4>استاندارد : {props.api}</h4>
                <h4>درجه گرانروی : {props.viscosity}</h4>
                <h4>تولیدکننده : {props.brand}</h4>
                
            </Grid>
            <Grid className={classes.productOrder}>
                <h2>{props.price.toLocaleString("en-US")}  ریال</h2>
                <h4>قیمت مصرف کننده <br />با احتساب مالیات ارزش افزوده</h4>
                <Button
                    variant="contained"
                    color='primary'
                    size="large"
                    onClick={() => dispatch(addToCard({Title:props.title, Price:props.price, Id:props.iCode,liter:props.iLiter}))}
                >افزودن به سبد خرید</Button>
            </Grid>

        </Grid>
    )
}
