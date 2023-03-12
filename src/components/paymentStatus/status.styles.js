import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "165% 165%",
        animation: "gradient 15s infinite",
        width:'100%',
        height:'100vh'
    },
    "@keyframes gradient":{
        "0%": { opacity: '0' },
        "50%": { opacity: '0.5' },
        "100%": { opacity: '1' }
    },
    statusArea: {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        borderRadius:15,
        border:'2px solid #e1e1e1',
        marginTop:50,
        padding:50,
        backgroundColor:'#fff',

    },

}))
