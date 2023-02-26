import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'row',
        height:40,
        width:200,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    iran:{
        display:'flex',
        flexDirection:'column',
        height:40,
        width:40,
        border:'2px solid #000',
        padding:0,
        backgroundColor:'#fff',
        // justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        borderRight:'none'

    },
    right:{
        display:'flex',
        flexDirection:'row',
        height:40,
        width:60,
        border:'2px solid #000',
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'none'
   
    },
    letter:{
        display:'flex',
        flexDirection:'row',
        height:40,
        width:40,
        border:'2px solid #000',
        borderLeft:'none',
        borderRight:'none',
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'none'
   
    },
    left:{
        display:'flex',
        flexDirection:'row',
        height:40,
        width:40,
        border:'2px solid #000',
        borderLeft:'none',
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'   
    },
    flag:{
        display:'flex',
        flexDirection:'row',
        height:42,
        width:20,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:-2,
   
    },
    

}))

