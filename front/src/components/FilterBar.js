import Link from './Link';
import { FaAngleDown } from "react-icons/fa";
function FilterBar(){

    const links = [
        { label: 'All', path: '/home' },
        { label: 'Uncategory', path: '/product' },
        { label: 'Dog', path: '/about' },
        { label: 'Cat', path: '/contact' },
        { label: 'Small Pet', path: '/contact' },
        { label: 'Fish,Reptile', path: '/contact' },  
        { label: 'Bird,Poultry', path: '/contact' },        
      ];
    
      const renderedLinks = links.map((link) => {

        
        return (<div>
<Link key={link.label+11234} to={link.path} >
              {link.label}
      </Link>
      {/* < FaAngleDown/> */}
        </div>

        );
      });
    
      return (
        <div  >
          {renderedLinks}
        </div>
      );
  }
  
  
  export default FilterBar