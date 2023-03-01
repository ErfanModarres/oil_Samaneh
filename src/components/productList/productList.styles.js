import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },
    productBox:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:300,
        margin:10,
        borderRadius:10,
        justifyContent:'center',
        border:'2px solid #fff'

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
        padding:50,
        lineHeight:0

    },
    productOrder:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        lineHeight:1

    },
}))
