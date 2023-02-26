import React,{useState} from 'react'
import { Grid, Divider, Button, TextField } from '@material-ui/core'
import useStyles from './index.styles'
import Flag from '../../assets/images/pelak.png'
// import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'






function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function Modal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [plakNumber, setPlakNumber] = useState({ a: "", b: "", c: "", d: "" })
    const [chassi, setChassi] = useState('')
    const [engine, setEngine] = useState('')
    const [checked, setChecked] = React.useState(false);




    const PelakLetters = [
        'الف', 'ب', 'پ', 'ت', 'ث', 'ج', 'د', 'ر', 'س', 'ص', 'ط', 'ع', 'ف', 'ق', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'
    ]


    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    function handleDPlakChange(e) {
        plakNumber.d = e.target.value;
    }

    function handleCPlakChange(e) {
        plakNumber.c = e.target.value;
    }

    function handleBPlakChange(e,) {
        plakNumber.b = PelakLetters[parseInt(e.target.getAttribute('data-option-index'))];
    }


    function handleAPlakChange(e) {
        plakNumber.a = e.target.value;
    }


    const addCarHandler = (e) => {
        const key = localStorage.getItem(`key`);
        const authorization = localStorage.getItem('authorization');
        const title = { title: 'React POST Request Example' };
        const config = axios.create({});
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization };
        const getList = async (title, headers) => {
            let response = await config.post('http://192.168.90.36:7700/api/oil_sales/v1/customer_car_add', { vKey: key, vChassisNo: chassi, vEngineNo: engine, LicensePlate: plakNumber }, { headers: headers })
            if (response.data.settings.success == 1) {
                const plakArray = [response.data.data];
                
            }
            response = response.data
            console.log(`${JSON.stringify(response)}`);

        }
        getList("", headers)
    };



    return (
        <Grid className={classes.paper}>
        <h3>برای ثبت خودروی جدید اطلاعات زیر را کامل نمایید </h3>
        <Grid className={classes.addPelak}>
            <TextField placeholder='11' variant='filled' size='medium' onChange={handleDPlakChange} style={{ width: 50, height: 57, border: '1px solid #000', marginBottom: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5, textDecoration: 'none' }} ></TextField>
            <TextField placeholder='987' variant='filled' size='medium' onChange={handleCPlakChange} style={{ width: 60, height: 57, border: '1px solid #000', borderRight: 'none', marginBottom: 10 }}></TextField>
            {/* <Autocomplete
                options={PelakLetters}
                closeIcon='center'
                onChange={handleBPlakChange}
                getOptionLabel={(option) => option}
                style={{ width: 50, height: 57, border: '1px solid #000', borderRight: 'none', marginBottom: 10 }}
                renderInput={(params) => <TextField placeholder='ب' variant='filled' {...params} />}
            /> */}
            <TextField placeholder='12' onChange={handleAPlakChange} variant='filled' size='medium' style={{ fontWeight: 'bold', fontSize: 20, width: 50, height: 57, border: '1px solid #000', borderLeft: 'none', marginBottom: 10, marginRight: -2 }}></TextField>
            <img src={Flag} style={{ marginTop: -1, marginLeft: -2, height: 59 }} />
        </Grid>
        <TextField variant='outlined' label='شماره شاسی' size='medium' style={{ marginTop: 10, width: '75%' }} onChange={event => setChassi(event.target.value.toUpperCase())}>شماره شاسی</TextField>
        <TextField variant='outlined' label='شماره موتور' size='medium' style={{ marginTop: 10, width: '75%' }} onChange={event => setEngine(event.target.value.toUpperCase())}>شماره موتور</TextField>
        <Button
            style={{ margin: 10, width: '75%', backgroundColor: '#00acc1' }}
            onClick={addCarHandler}
            size='large'
            variant='contained'
        >اضافه کردن خودرو
        </Button>

    </Grid>
    )
}
