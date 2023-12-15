
import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as yup from "yup";
const useStyles = makeStyles(theme => ({
}));

export default function Account() {
    const classes = useStyles();


    const accountSchema = yup.object().shape({
        email: yup
            .string() //เป็น string
            .email('Invalid email.') //type เป็นอีเมล
            .required('This field is required.'), //ต้องกรอก ถ้าไม่กรอกจะแสดง error message คือ This field is required.
        password: yup
            .string() //เป็น string
            .required('This field is required.') //ต้องกรอก ถ้าไม่กรอกจะแสดง error message คือ This field is required.
            .min(3, 'Please Enter less then 3 letters'), //ต้องมีอย่างน้อย 3 ตัว ถ้าน้อยกว่าจะแสดงข้อความ Please Enter less then 3 letters
        confirmPassword: yup
            .string()
            .required('This field is required.') //ต้องกรอก ถ้าไม่กรอกจะแสดง error message คือ This field is required.
            .min(3, 'This field at least 3 characters.') //ต้องมีอย่างน้อย 3 ตัว ถ้าน้อยกว่าจะแสดงข้อความ Please Enter less then 3 letters
            .oneOf([yup.ref('password'), null], " "), //ตรวจสอบว่า password และ confirm password ตรงกันหรือไม่ ถ้าไม่ตรงกันจะแสดงข้ความ Password not match.
    });
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
                        //ช่องสำหรับกรอก email
                        <TextField
                            id="email"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        //ช่องสำหรับกรอก password
                        <TextField
                            id="password"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >

                    <Grid item md={12} xs={12}>
                        //ช่องสำหรับกรอก confirm password
                        <TextField
                            id="confirm-password"
                            label="Confirm Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}