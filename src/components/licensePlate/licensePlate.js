import React from 'react'
import { Grid, Button } from '@material-ui/core'
import useStyles from './licensePlate.styles'
import Iran from '../../assets/images/iran.png'
import Flag from '../../assets/images/pelak.png'



export default function LicensePlate(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid className={classes.iran}>
                <img src={Iran} style={{width:30, marginBottom:-15, marginTop:3}} />
                <h3>{props.iran}</h3>
            </Grid>

            <Grid className={classes.right}>
                <h2>{props.three}</h2>
            </Grid>
            <Grid className={classes.letter}>
                <h2>{props.letter}</h2>
            </Grid>
            <Grid className={classes.left}>
                <h2>{props.two}</h2>
            </Grid>
            <Grid className={classes.flag}>
                <img src={Flag}  style={{width:20, height:41}}/>
            </Grid>
        </Grid>
    )
}
