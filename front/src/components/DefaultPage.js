import NavigateBar from './NavigateBar';
import Buttonbar from './BottonBar';
import Dropdown from './Dropdown';
import Search from './Search';
function DefaultPage(){

    return(
    
        <div key="navigation">
    <NavigateBar key="navigation1"/>
        <Search></Search>
    {/* <Buttonbar/> */}
 
</div>

    
   )
}

export default DefaultPage