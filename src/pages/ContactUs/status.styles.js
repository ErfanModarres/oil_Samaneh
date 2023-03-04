import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    formArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    contactArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "165% 165%",
        animation: "gradient 15s infinite",
        width: '100%',
        height: '100vh'

    },
    "@keyframes gradient": {
        "0%": { opacity: '0' },
        "50%": { opacity: '0.5' },
        "100%": { opacity: '1' }
    },
    textfield: {
        margin: 5,
        width: '70%',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    btn: {
        margin: 5,
        width: '70%',
        borderRadius: 5
    },

}))
