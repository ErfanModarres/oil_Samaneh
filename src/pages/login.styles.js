import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: '100vh',
        backgroundColor: '#fff'
    },
    logoBox: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "165% 165%",
        animation: "gradient 15s infinite",
        height: "100vh"
    },
    "@keyframes gradient":{
        "0%": { opacity: '0' },
        "50%": { opacity: '0.5' },
        "100%": { opacity: '1' }
    },

    formBox: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 200
    },
    mainTitle: {
        color: '#fff'
    },
    subTitle: {
        color: '#000'
    },
    accountTitle: {
        color: '#8566ff',
        marginBottom: 0
    },
    formInput: {
        margin: theme.spacing(1),
        width: '80%',
        margin: '10px 0px'
    },
    formBtn: {
        margin: theme.spacing(1),
        width: '80%',
        margin: '10px 10px',
        backgroundColor: '#00acc1',
        color: '#fff'

    },
    policyText: {
        color: '#5b5b5b',
        marginTop: 30,
    },
    loginText: {
        color: '#5b5b5b',
        marginTop: 10
    },

    policyBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'start',
        width: '80%'
    },
    mobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start'
    },
    otpArea: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-betwwn'

    },
    reSendBtn: {
        width: 200,
        marginLeft: 10,
        height: 40,
        marginTop: 5,
        backgroundColor: '#00acc1'
    },
    pidoLogo: {
        width: 100,
        marginLeft: 50
    },
    backdrop:{
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    LoginPic:{
        width:'33%'
    }

}))
