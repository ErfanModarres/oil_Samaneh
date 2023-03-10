import React, { useState } from 'react'
import clsx from 'clsx';
import { Button, CardActions, Grid, Hidden } from '@material-ui/core'
import useStyles from './index.styles'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Logo from '../../assets/images/pido.jpg'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Car from '../carInfo/car'
import Badge from '@material-ui/core/Badge';


export default function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 240;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [licensePlateArray, setLicensePlateArray] = useState([]);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Grid className={classes.root}>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <Button variant='contained' color='primary' size='small' fullWidth style={{ marginRight: 10, marginLeft: 10, width: '93%' }}>?????? ???????????? ????????</Button>
                <Car
                    iran='77'
                    three='148'
                    letter='??'
                    two='78'
                    chassi='naap03ed2cj538025'
                    motor='14190050097'
                    litter='6'
                    tire='2'
                />
            </Menu>

            <div className={classes.rootDrawer}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0px 25px' }}>
                            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap>
                                    ???????????? ?????????? ???????? ??????????????
                                </Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Badge badgeContent={2} color="error" className={classes.badge}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.IconButtonFunc}
                                        onClick={handleClick}
                                    >
                                        <DriveEtaIcon />
                                    </IconButton>
                                </Badge>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.IconButtonFunc}

                                    >
                                        <ShoppingCartIcon />
                                    </IconButton>
                                <img src={Logo} className={classes.logo} />

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button  >
                            <ListItemIcon><InboxIcon /> </ListItemIcon>
                            <ListItemText ><a href={'/aboutus'} style={{ color: '#000', textDecoration: 'none' }}>???????????? ????????</a></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><LocalGasStationIcon /> </ListItemIcon>
                            <ListItemText ><a href={"app.pido.co.ir"} style={{ color: '#000', textDecoration: 'none' }}>?????????????? ????????  </a></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><InfoIcon /> </ListItemIcon>
                            <ListItemText ><a href={'/guid'} style={{ color: '#000', textDecoration: 'none' }}> ?????????????? ???????????? ????????</a></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><QuestionAnswerIcon /> </ListItemIcon>
                            <ListItemText ><a href={'/faq'} style={{ color: '#000', textDecoration: 'none' }}> ???????????? ????????????</a></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><ContactSupportIcon /> </ListItemIcon>
                            <ListItemText ><a href={'/contactus'} style={{ color: '#000', textDecoration: 'none' }}>   ????????????????</a></ListItemText>
                        </ListItem>

                    </List>
                    <Divider />
                    <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', height: '100%', margin: 10 }}>
                        <img src={Logo} style={{ width: 50 }} />
                        <span style={{ textAlign: 'center', marginTop: 10 }}>???????? ???????? ?????????? ???? ???????? ?????????? ?????????????????? ?????????? ?????????????? (???????????? ) ???? ????????</span>
                    </Grid>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                </main>
            </div>
        </Grid>


    )
}
