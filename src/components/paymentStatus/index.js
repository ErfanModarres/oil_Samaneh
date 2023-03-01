import React, { useState, useEffect } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden } from '@material-ui/core'
import useStyles from './status.styles'
import Logo from '../../assets/images/pido.jpg'
import './status.css'
import { useLocation } from 'react-router';
import queryString from 'query-string';



export default function Status(props) {
    const classes = useStyles();
    // const { search } = useLocation(window.location.search);
    // const status = new URLSearchParams(search).get("status");
    // const queryParams = new URLSearchParams(window.location.search)
    //  const location = useLocation();
    let city = (new URLSearchParams(window.location.search)).get("status")
    console.log(city);

    return (
        <Grid className={classes.root}>
            <Grid className={classes.statusArea}>
                <img src={Logo} style={{marginTop:-165,border:'5px solid #fff', borderRadius:10, marginBottom:100}} />
                <h1>عملیات موفق</h1>
                <h3>پرداخت شما با موفقیت انجام شد</h3>
                <Button href={'/home'}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size='large'
                    style={{marginTop:50}}
                >بازگشت به سایت
                </Button>
            </Grid >
        </Grid >

    )
}