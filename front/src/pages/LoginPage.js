import DefaultPage from '../components/DefaultPage';
import Link from '../components/Link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import React, { useState } from 'react';


const SignupSchema = Yup.object().shape({
  password: Yup.string()
  .required('Please Enter your password')
  .matches(
    //eslint-disable-next-line
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),

    email: Yup.string().email('It\'s a not email type').required('Required e-mail'),
  });

function LoginPage(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema),
      });
      const onSubmit = (data) => console.log(data);
      const [type, setType] = useState('password');


      const handleToggle = () => {
        if (type==='password'){

          setType('text')
        } else {

          setType('password')
        }
      }



    return(
    
    <div key="navigation">
    <DefaultPage/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          
          <label>qwer</label>
          <input type={type}
                      {...register("password")}
                />
            {errors.password && <p>{errors.password.message}</p>}
          <button type ="button" onClick={handleToggle}>show password</button>
          <button type="submit">Submit</button>
        </form>
        <h1>you don't have a Account</h1>
        <div>
        <Link to={'/SignUp'}>SignUp</Link>  
        </div>
    </div>
  )
  }
  
  
  export default LoginPage