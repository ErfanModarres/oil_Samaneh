import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import useStyles from './index.styles'
import Logo from '../../assets/images/pido.jpg'





export default function Header(props) {
    const classes = useStyles();


    return (
        <Grid className={classes.root}>

            <Grid className={classes.logoBox}>
                <img src={Logo} className={classes.logo} />
            </Grid>
            <Grid className={classes.titleBox}>
                <h2>سامانه توزیع روغن موتور پیدو</h2>
                <span>تحت نظارت وزارت صنعت ، معدن و تجارت جمهوری اسلامی ایران </span>
            </Grid>
        </Grid>


    )
}
