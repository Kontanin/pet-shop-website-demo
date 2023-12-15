

function Button({ children, className, activeClassName }) {
    
    const handleClick = () => {
        console.log('Button clicked!',children);
    
    };   

    return (
        <div>
            <button type="button" onClick={handleClick}>Click Me{children}</button>
        </div>
    );
};

export default Button