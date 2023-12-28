import DefaultPage from '../components/DefaultPage';
import PicSlide from '../components/PicSlide';
import Slide from '../components/Slide';
function HomePage(){
    return(
    
        <div key="navigation">
            <DefaultPage/>
        <h1>HomePage</h1>
        
        {/* <PicSlide/> */}
    {/* <Buttonbar/> */}
    <Slide></Slide>
    </div>
   )
  }
  
  
  export default HomePage