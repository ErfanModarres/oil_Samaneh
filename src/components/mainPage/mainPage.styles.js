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
        "@media screen and (max-width: 840px)": {
        productBox : {
            display:'flex',
            flexDirection:'column'
        },
        productData:{
            display:'flex',
            flex:2,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'start',
            padding:10
        },
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
    },
    paper: {
        backgroundColor: '#fff',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '20vh',
        left: '35%',
        borderRadius: 15,
        border: '1px solid #000',
        padding: 10
    },
    addPelak: {
        display: 'flex',
        flexDirection: 'row'
    },
}))
