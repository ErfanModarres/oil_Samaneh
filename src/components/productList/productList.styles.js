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
        margin:10,
        borderRadius:10,
        justifyContent:'center',
        border:'2px solid #fff',
        backgroundColor:'#fff',
        padding:'10px 10px'
    },
    "@media screen and (max-width: 840px)": {
        productBox : {
            display:'flex',
            flexDirection:'column',
            width:'100%',
            margin:10,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center'

        },
        productData:{
            alignItems:'center',

        }
    },
    productPicArea:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    
    productPic:{
        height:250,
        borderRadius:10,
    },


    productData:{
        display:'flex',
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'start',
        padding:50,
        lineHeight:0,

    },
    productOrder:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        lineHeight:1,
        margin:'0px 20px'

    },
}))
