import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './index.styles'





export default function Header(props) {
    const classes = useStyles();


    return (
        <Grid className={classes.root}>
            <span>کلیه حقوق متعلق به شرکت تجارت اکترونیک آیریک پارسیان (پیدو) می باشد</span>
        </Grid>
    )
}
