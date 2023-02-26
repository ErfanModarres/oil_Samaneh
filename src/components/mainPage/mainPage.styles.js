import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "165% 165%",
        animation: "gradient 15s infinite",
    },
    body:{
        display: 'flex',
        flexDirection: 'row',
    },
    productBox:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginRight:25,
        marginLeft:25,
        borderRadius:10,

    },
    sideBar:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        width:'40%',
        margin:10,
        borderRadius:10,
        height:"100vh"

    },
    productPicArea:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    productPic:{
        height:'70%',
        borderRadius:10
    },
    productData:{
        display:'flex',
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'start',
        padding:10

    },
    productOrder:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'

    },
    sideBarInfo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:10,
        textAlign:'center'
    },
    backdrop:{
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
}))
