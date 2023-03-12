import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: "95%",
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
    },
    control: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e1e1e1',
        borderRadius:5
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom:0


    },
    licensePlate: {
        width: 300
    },
    motor: {
        display: 'flex',
        flexDirection: 'column',
        padding:'0px 0px 10px 20px'

    },
    info: {
        display: 'flex',
        flexDirection: 'column',

    },


}))
