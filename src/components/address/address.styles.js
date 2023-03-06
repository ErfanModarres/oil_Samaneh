import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        backgroundColor: '#e1e1e1',
        borderRadius: 5,
        padding: 15,

    },
    city: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        margin:0,
        padding:0
    },
    textFiled :{
        margin:5,
        backgroundColor:'#fff',
        borderRadius:5,
        height:38,
        width:'100%'
    },
    textFiledHalf:{
        display:'flex',
        flex:1,
        marginLeft:5,
        marginTop:5,
        backgroundColor:'#fff',
        borderRadius:5,
        height:38,
        width:'100%',
        marginBottom:5

    }
}))
