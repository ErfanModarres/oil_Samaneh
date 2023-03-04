import React, { useState, useEffect, useSearchParams } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden, TextField } from '@material-ui/core'
import useStyles from './status.styles'
import Logo from '../../assets/images/pido.jpg'
import './status.css'
import Messages , {language} from '../../constants/message'



export default function Contactus(props) {
    const classes = useStyles();




    return (
        <Grid className={classes.root}>
            <Grid className={classes.formArea}>
                <sapn style={{width:'70%', color:'#fff'}}> {Messages.contact_message[language]} </sapn>
                <TextField variant='outlined' label="نام و نام خانوادگی" className={classes.textfield}></TextField>
                <TextField variant='outlined' label="شماره تلفن همراه" className={classes.textfield}></TextField>
                <TextField variant='outlined' label="متن پیام" className={classes.textfield}></TextField>
                <Button variant='contained'  color='primary' size="large" className={classes.btn}>ارسال پیام</Button>
            </Grid>
            <Divider orientation='vertical' />
            <Grid className={classes.contactArea}>

            </Grid>
        </Grid >

    )
}