import Link from './Link';
import Cart from './Cart';
import Dropdown from './Dropdown';

import uniqid from 'uniqid';
import LoginIcon from './LoginIcon';


function NavigateBar(Links) {
  const links = [
    { label: 'หน้าหลัก', path: '/home' },
    { label: 'สินค้า', path: '/product' },
    { label: 'เกี่ยวกับเรา', path: '/about' },
    { label: 'ติดต่อเรา', path: '/contact' }
  ];

  const renderedLinks = links.map((link) => {
    if(link.label==='สินค้า'){
        return (<Dropdown key={"product"} label={link.label}  path={link.path}> </Dropdown>
        )
    }
    
    return (
  <Link key={link.label} to={link.path} className={"dropdown"}>
          {link.label}
  </Link>
    );
  });

  return (
    <div key={uniqid} className={'navbar'}>
      {renderedLinks}
<Cart></Cart>
<LoginIcon></LoginIcon>

    </div>
  );
}

export default NavigateBar;
