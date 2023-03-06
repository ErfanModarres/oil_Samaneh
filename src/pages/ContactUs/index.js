import React, { useState, useEffect, useSearchParams } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden, TextField } from '@material-ui/core'
import useStyles from './status.styles'
import Logo from '../../assets/images/pido.jpg'
import Call from '../../assets/images/call.png'
import './status.css'
import Messages, { language } from '../../constants/message'
import GoogleMapReact from 'google-map-react';




export default function Contactus(props) {
    const classes = useStyles();

    const defaultProps = {
        center: {
            lat: 35.747021,
            lng: 51.414036
        },
        zoom: 17
    };


    return (
        <Grid className={classes.root}>
            <Grid className={classes.formArea}>
                <image src={Logo} />
                {/* <sapn style={{ width: '70%', color: '#000' }}> {Messages.contact_message[language]} </sapn> */}
                <TextField variant='outlined' label="نام و نام خانوادگی" className={classes.textfield}></TextField>
                <TextField variant='outlined' label="شماره تلفن همراه" className={classes.textfield}></TextField>
                <TextField variant='outlined' label="متن پیام" className={classes.textfield}></TextField>
                <Button variant='contained' color='primary' size="large" className={classes.btn}>ارسال پیام</Button>
                <GoogleMapReact
                    className={classes.google}
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>

            </Grid>

            <Grid style={{zIndex:50}}>
                <img src={Call} style={{width:250, marginLeft:-120}} />
            </Grid>

            <Grid className={classes.contactArea}>

                <h3>دفتر مرکزی : تهران ، خیابان گاندی ، خیابان یکم پلاک 15 واحد 3</h3>
                <h3>انبار مرکزی : تهران ، فرودگاه مهرآباد ، خیابان حجاج بعد از پارکینگ شماره 5</h3>
                <h3>کد پستی : 8877211902</h3>
                <h3>تلفن تماس : 88772119-021</h3>
            </Grid>
        </Grid >

    )
}