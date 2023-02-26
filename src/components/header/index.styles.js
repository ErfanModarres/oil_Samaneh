import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: 20,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#fff'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 85
    },

    logoBox: {
        backgroundColor: '#fff',
        width:80,
        height:80,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:20
    },
    titleBox:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },


}))