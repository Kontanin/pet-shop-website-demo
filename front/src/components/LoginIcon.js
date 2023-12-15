import Link from './Link';
import { useState } from 'react';
function LoginIcon(){


  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
      };
   
    // console.log(document.addEventListener('click', handleClick, true))
    return(
 

<div>   
   <button onClick={handleClick}> 
    <h6>Account</h6>
    </button>

   {isOpen && (
        <div>

    <Link to={'/Login'}>Login</Link>
    <Link to={'/SignUp'}>SignUp</Link>  
        </div>
      )}

</div>
    )
}
export default LoginIcon;