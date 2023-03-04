import React, { useState, useEffect, useSearchParams } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden } from '@material-ui/core'
import useStyles from './status.styles'
import Logo from '../../assets/images/pido.jpg'
import './status.css'
import { useLocation } from 'react-router';
import queryString from 'query-string';



export default function Status(props) {
    const classes = useStyles();
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const log = searchParams.get('status')
    console.log(`params is :${log}`);



    return (
        <Grid className={classes.root}>
            <Grid className={classes.statusArea}>
                <img src={Logo} style={{ marginTop: -165, border: '5px solid #fff', borderRadius: 10, marginBottom: 100 }} />
                <h1>عملیات موفق</h1>
                <h3>پرداخت شما با موفقیت انجام شد</h3>
                <Button href={'/home'}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size='large'
                    style={{ marginTop: 50 }}
                >بازگشت به سایت
                </Button>
            </Grid >
        </Grid >

    )
}