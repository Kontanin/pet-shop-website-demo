import classNames from 'classnames';


function Link({ to, children, className, activeClassName }) {


  const classes = classNames(
    'text-blue-500',
    className
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
 

     
 
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;