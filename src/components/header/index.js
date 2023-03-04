import React from 'react'
import clsx from 'clsx';
import { Grid, Hidden } from '@material-ui/core'
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Logo from '../../assets/images/pido.jpg'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactlessIcon from '@material-ui/icons/Contactless';



export default function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 240;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid className={classes.root}>




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
                                    سامانه توزیع روغن پیـــدو
                                </Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    className={classes.IconButtonFunc}
                                >
                                    <DriveEtaIcon />
                                </IconButton>
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
                                <ListItemText ><a href={'/aboutus'}>درباره پیدو</a></ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><LocalGasStationIcon /> </ListItemIcon>
                                <ListItemText ><a href={"app.pido.co.ir"}>درخواست سوخت  </a></ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><InfoIcon /> </ListItemIcon>
                                <ListItemText ><a href={'/guid'}> راهنمای انتخاب روغن</a></ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><QuestionAnswerIcon /> </ListItemIcon>
                                <ListItemText ><a href={'/faq'}> سوالات متداول</a></ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><ContactlessIcon /> </ListItemIcon>
                                <ListItemText ><a href={'/contactus'}> تماس با ما</a></ListItemText>
                            </ListItem>

                    </List>
                    <Divider />
                    <Grid style={{display:'flex' , flexDirection:'column', justifyContent:'flex-end' , alignItems:'center', height:'100%', margin:10}}>
                        <img src={Logo} style={{ width: 50 }} />
                        <span style={{ textAlign: 'center', marginTop:10 }}>کلیه حقوق متعلق به شرکت تجارت الکترونیک آیریک پارسیان (پیــدو ) می باشد</span>
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
