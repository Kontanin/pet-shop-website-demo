import { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import Link from './Link';
function Cart(){


  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
      };
   
    // console.log(document.addEventListener('click', handleClick, true))
    return(
 

<div>   
   <button onClick={handleClick}>  <CiShoppingCart /></button>
   {isOpen && (
        <div>

    <Link to={'/Order'}>Edit</Link>
        
        </div>
      )}

</div>
    )
  }
export default Cart;