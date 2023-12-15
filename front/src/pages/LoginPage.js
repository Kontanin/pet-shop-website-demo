import DefaultPage from '../components/DefaultPage';
import Link from '../components/Link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string().min(8, "Must Contain 8 Characters").required()
    .matches(
      /^(?=.*[a-z])/,
      " Must Contain One Lowercase Character"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "  Must Contain One Uppercase Character"
    )
    .matches(
      /^(?=.*[0-9])/,
      "  Must Contain One Number Character"
    )
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),

    email: Yup.string().email('It\'s a not email type').required('Required e-mail'),
  });

function LoginPage(){
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema),
      });
      const onSubmit = (data) => console.log(data);
    return(
    
        <div key="navigation">
    <DefaultPage/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type='password'{...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      
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