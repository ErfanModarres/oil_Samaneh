import React, { useState, useEffect } from 'react'
import { Grid, Button, Badge, Divider, ButtonGroup, Hidden, TextField } from '@material-ui/core'
import useStyles from './address.styles'






export default function Address(props) {
    const classes = useStyles();



    return (
        <Grid className={classes.root}>
            <Grid className={classes.city}>
                <TextField className={classes.textFiledHalf} variant='outlined' label='استان' size='small'>استان</TextField>
                <TextField className={classes.textFiledHalf} variant='outlined' label='شهر' size='small'>شهر</TextField>
            </Grid>
            <TextField className={classes.textFiled} variant='outlined' label='خیابان' size='small' fullWidth>خیابان</TextField>
            <TextField className={classes.textFiled} variant='outlined' label='کوچه' size='small' fullWidth>کوچه</TextField>
            <Grid className={classes.city}>
                <TextField className={classes.textFiledHalf} variant='outlined' label='پلاک' size='small' fullWidth>پلاک</TextField>
                <TextField className={classes.textFiledHalf} variant='outlined' label='واحد' size='small' fullWidth>واحد</TextField>
            </Grid>
            <TextField className={classes.textFiled} variant='outlined' label='کدپستی' size='small' fullWidth>کدپستی</TextField>
            <Button style={{margin:5}} fullWidth variant='outlined' color='primary'>ثبت آدرس</Button>

        </Grid >
    )
}