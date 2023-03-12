import React, { useState, useEffect, useSearchParams } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden } from '@material-ui/core'
import useStyles from './status.styles'
import Logo from '../../assets/images/pido.jpg'
import './status.css'
import Success from './../../assets/images/success.png'
import Wrong from './../../assets/images/wrong.png'
import Warning from './../../assets/images/warning.png'




export default function Status(props) {
    const classes = useStyles();
    const params = window.location.pathname.split('=').pop()
    console.log(`params is :${params}`);

    return (
        <Grid className={classes.root}>
            <Grid className={classes.statusArea}>
                <img src={Logo} style={{ marginTop: -165, border: '5px solid #fff', borderRadius: 10, marginBottom: 100 }} />

                {params == 1 ? <img src={Success} /> : null}
                {params == 2 ? <img src={Wrong} /> : null}
                {params == 3 ? <img src={Warning} /> : null}


                {params == 1 ? <h1>عملیات موفق</h1> : null}
                {params == 2 ? <h1>عملیات ناموفق</h1> : null}
                {params == 3 ? <h1>عملیات ناموفق</h1> : null}

                {params == 1 ? <h3>پرداخت شما با موفقیت انجام شد</h3> : null}
                {params == 2 ? <h3> خطایی در عملیات پرداخت صورت گرفته مجددا تلاش فرمائید</h3> : null}
                {params == 3 ? <h3>با پشتیبانی تماس بگیرید</h3> : null}


                <Button href={'/home'}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size='large'
                    style={{ marginTop: 50, marginBottom:20 }}
                >بازگشت به سایت
                </Button>
                {params == 3 ? <Button variant='outlined' fullWidth size='large'>تماس با پشتیبانی</Button> : null}
            </Grid >
        </Grid >

    )
}