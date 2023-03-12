import { Grid, Button, Hidden } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useStyles from './login.styles'
import Logo_oil from '../assets/images/oil.png'
import Constants from '../constants'
import TextField from '@material-ui/core/TextField';
import './login.css'
import LoginPic from '../assets/images/login.png'
import CircularProgress from '@material-ui/core/CircularProgress';




export default function Login() {
    const classes = useStyles();
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [otp, setOtp] = useState('')
    const [key, setKey] = useState('')
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState();



    // useEffect(() => {
    //     var timer = setInterval(() => {
    //         if (seconds > 0) { setSeconds(seconds - 1) }
    //         else {
    //             setSeconds(0)
    //         }
    //     }, 1000);
    //     // clearing interval
    //     return () => clearInterval(timer);
    // });


    var url = 'http://192.168.90.36:7700/api/oil_sales/v1/verify_cellphone_otp'
    const client = axios.create({});
    const addPosts = async (title, body) => {
        let response = await client.post(url, { vMobileNumber: number, vNationalCode: id })
        response = response.data
        if (response.settings.success === 1) {
            setKey(response.data.vKey);
            setLoading(true);
            console.log(`response : ${JSON.stringify(response)}`);
        } else if (response.settings.success !== 1) {
            alert(response.settings.message);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, body);
        TextField.idCode = '';
        TextField.phoneNumber = '';
    };

    const otpClient = axios.create({});
    const addPosts1 = async (title, body) => {
        let response = await otpClient.post('http://192.168.90.36:7700/api/oil_sales/v1/user_login', { iVerificationCode: otp, vKey: key })
        response = response.data
        console.log(`${JSON.stringify(response)}`);
        if (response.settings.success === 1) {
            const authorization = response.data.authorization
            localStorage.setItem('authorization', authorization, `key`, key);
            localStorage.setItem(`key`, key);
            window.location.href = `/home`;
        } else if (response.settings.success !== 1) {
            alert(response.settings.message);
        }
    };

    const handleOtp = (e) => {
        e.preventDefault();
        addPosts1(title, body);
        setNumber("");
        setId("");
    };



    return (
        <Grid className={classes.root}>
            <Grid className={classes.logoBox}>
                <Hidden smDown>
                    <img alt="" src={Logo_oil} className={classes.logo} />
                </Hidden>
                <h1 className={classes.mainTitle}>
                    {Constants.mainTitle}
                </h1>
                <Grid className={classes.subTitle}>
                    {Constants.subTitle}
                </Grid>
            </Grid>
            <Grid className={classes.formBox}>
                <img alt="" src={LoginPic} className={classes.LoginPic} />
                <TextField
                    className={classes.formInput}
                    id="idCode"
                    maxLength={10}
                    helperText="کدملی را بصورت 10 رقمی و بدون خط تیره وارد نمایید"
                    onChange={event => setId(event.target.value)}
                    type='number'
                    label="کدملی "
                    required={true}
                    autoFocus={true}
                    size="small"
                    variant="outlined" />
                <TextField
                    className={classes.formInput}
                    helperText='شماره تماس با 09 شروع میشود'
                    id="phoneNumber"
                    onChange={event => setNumber(event.target.value)}
                    type='number'
                    label="شماره موبایل"
                    required={true}
                    size="small"
                    variant="outlined" />
                <Button
                    className={classes.formBtn}
                    onClick={handleSubmit}
                    color='primary'
                    size='large'
                    disabled={loading == true ? true : false}
                    variant='contained'>
                    {loading ? <CircularProgress className={classes.CircularProgress} size={20} /> : null}
                    دریافت کد ورود یکبار مصرف
                </Button>
                <Grid className={classes.otpArea}>
                    <TextField
                        className={classes.formInput}
                        id="otp"
                        inputProps={{ maxLength: 5 }}
                        onChange={event => setOtp(event.target.value)}
                        label="کد یکبار مصرف"
                        required={true}
                        size="small"
                        type='number'
                        variant="outlined" />
                    <Button
                        className={classes.reSendBtn}
                        color='primary'
                        onClick={handleOtp}
                        size="small"
                        disabled={!otp || !key}
                        variant='contained'>
                        ارسال
                    </Button>
                </Grid>
            </Grid>

        </Grid>
    )
}
