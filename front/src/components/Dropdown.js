import Link from './Link';
import { FaAngleDown } from "react-icons/fa";
import Deepdropdown from './DeepDropDown';
import data from '../product/Product.json'
import uniqid from 'uniqid';

function Dropdown({label,className,path}) {
  const {listDogs,listCats,listSmall,listFish,listBird } =data
  // const label=link.label
  const list=[
    { label: 'สุนัข', path: '/product' },
   { label: 'แมว', path: '/product' },
    { label: 'สัตว์เลี้ยงขนาดเล็ก', path: '/product' },
    { label: 'ปลาและสัตว์เลื่อยคลาน', path: '/product' },
    { label: 'นกและสัตว์ปีก', path: '/product' }
  ]

  const list1={
     สุนัข: listDogs,
    แมว: listCats,
     สัตว์เลี้ยงขนาดเล็ก: listSmall,
    ปลาและสัตว์เลื่อยคลาน: listFish,
      นกและสัตว์ปีก: listBird 
  }
  


  const renderedLinks1 = list.map((link) => {
    const listshow=list1[link.label]
    return (
      <div className='dropdown-one' key={link.label+link.path} >
      <Link key={uniqid} to={link.path} className={'.dItem'}>
        {link.label}
      <FaAngleDown />
       <Deepdropdown list={listshow}/>
      </Link>
      </div>
    );
  });


    return (
<div key={'linksqwer'} className={'dropdown'}>
  
  <Link key={uniqid} to={path}>
    {label}
  </Link>
  <FaAngleDown />
 {renderedLinks1} 
</div>
    )
}

export default Dropdown;