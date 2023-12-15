import Link from './Link';

function Deepdropdown({list}){
      const renderedLinks2 = list.map((link) => {
        return (

     <Link
            key={link.label}
            to={link.path}
            className={'dItem'}
          >
            {link.label}
          </Link>
        );
      });
      return (
        <div className="dropdown-two">
          {renderedLinks2}
        </div>
      );

}

export default Deepdropdown;