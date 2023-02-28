import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    basketBox: {
        display: 'flex',
        flexDirection: 'column',
        width: "95%",
        backgroundColor:'#fff',
        borderRadius:10,
        margin:10,
        padding:15,

    },
    badge:{
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    basketTitel:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    basketBody:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'100%'
    },
    basketPrice:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center', 
    },
    priceTitle:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'start',
        width:'100%',
        alignItems:'start',
        textAlign:'end' 
    },
    priceAmount:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'end',
        width:'100%' 
    },
    basketItem:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'100%' 
    },
    list:{
        listStyle:'none',
    },
    basketItemControl:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center'
    },
    ButtonGroup:{
        margin : 10,
        borderRadius : 10
    },
    totalPrice:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center', 
    },
    backdrop:{
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
}))
