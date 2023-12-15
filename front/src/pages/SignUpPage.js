import DefaultPage from '../components/DefaultPage';
import Link from '../components/Link';
import React, { useState } from 'react';
function SignUpPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [error ,setError] = useState('');


    const handleFormSubmit=(e)=>{
        console.log(password,"password")
        e.preventDefault();
        if(!email||!password){
            setError('Please fill all fields');
            return;

        }
        if(password.length<2){
            setError('Please fill more then')
            return;
        }
        if(Cpassword!==password){
            setError('Please pass not macth fill Confirm Password again')
            return;
        }
        
    }
    const handleEmail=(e)=>{
         setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
   }
   const handleCPassword=(e)=>{
    setCPassword(e.target.value)
}
    return(
        <div key="navigation">
            <DefaultPage/>
            <h1>
                SignUp
                        </h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleFormSubmit}>

                <label>Email</label>
                    <input  type="email" name="email" placeholder="Email"value={email} onChange={handleEmail}/>

                <label>Password</label>
                    <input  type="password" name="password"  placeholder="Password" value={password} onChange={handlePassword}/>

                <label>Confirm Password</label>
                    <input type="password" name="Cpassword" placeholder="Confirm Password" value={Cpassword} onChange={handleCPassword} />


                <label >โดยการคลิกและกดตกลงที่ช่องนี้ ท่านได้ตกลงยินยอมให้ข้อมูลส่วนตัวดังกล่าวข้างต้น และยินยอมให้ผู้ให้บริการเว็บไซต์ และ/หรือผู้ที่ได้รับมอบหมาย สามารถเก็บหรือใช้ข้อมูลที่ท่านได้ใส่มาในแบบฟอร์มนี้ในการติดต่อกับท่าน รวมถึงให้ข้อมูลต่างๆ เกี่ยวกับบริการอื่นๆ ของ เรา ทั้งนี้ ข้อมูลส่วนบุคคลนี้จะได้รับการปฏิบัติตามนโยบายความเป็นส่วนตัวของเรา ศึกษารายละเอียดเพิ่มเติมได้ที่นี่ คลิก</label>
                    <input type="checkbox" value="checkbox"/>

                    <input type="submit" value="SignUp" onClick={handleFormSubmit}/>
            </form>
<div>
<h1>You already  have a Account</h1>
<Link to={'/Login'}>Login</Link>
</div>
    </div>
   )
  }
  
  
  export default SignUpPage