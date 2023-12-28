import data from "../product/img.json"
import { useState } from "react"
function PicSlide(){

    const [count, setCount] = useState(0);
const RData=data.Slide



return(
   <div>
<img src=    {RData[count].img}/>
<button onClick={ ()=>{setCount(count+1)}}>456</button>
   </div>
)



}
export default PicSlide