import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as yup from "yup";
const useStyles = makeStyles(theme => ({
}));


export default function Information() {

    const informationSchema = yup.object().shape({
        firstName: yup.string().required('This field is required.'), //firstName เป็น string, ต้องกรอก ถ้าไม่กรอกจะแสดงerror message เป็น 'This field is required.
        lastName: yup.string().required('This field is required.'), //lastName เป็น string, ต้องกรอก ถ้าไม่กรอกจะแสดงerror message เป็น 'This field is required.
        nickname: yup.string().required('This field is required.'), //nickname เป็น string, ต้องกรอก ถ้าไม่กรอกจะแสดงerror message เป็น 'This field is required.
    });




    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                        //ช่องสำหรับกรอก input firstname
                        <TextField
                            id="firstName"
                            label="Firstname"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        //ช่องสำหรับกรอก input firstname
                        <TextField
                            id="lastName"
                            label="Lastname"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                        <Grid item md={12} xs={12}>
                            //ช่องสำหรับกรอก input nickname
                            <TextField
                                id="nickname"
                                label="Nickname"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}