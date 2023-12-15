import DefaultPage from '../components/DefaultPage';
import FilterBar from '../components/FilterBar';
import { FaBorderAll } from "react-icons/fa";
import { RiListUnordered } from "react-icons/ri";
import Search from '../components/Search';
function Productpage(){

  return(
      <div key="navigation">
            {/* <DefaultPage/> */}
            <div>
            <img src="https://manoonpetshop.com/upload-img/bow/Product/Product.jpg" alt="Girl in a jacket" width="1400" height="300"/>
            </div>
            <h3 >CATEGORIES</h3>
            <FilterBar/>

            {/* <label >Choose a car:</label>
            <select id="tags">
              <option value="volvo">Lastest</option>
              <option value="saab">Oldest</option>
              <option value="opel">Sort A to Z</option>
              <option value="audi">Sort Z to A</option>
              <option value="audi">Price:Low to High</option>
              <option value="audi">Price:High to Low</option>
              <option value="audi">Best Seller</option>
              <option value="audi">Recommend</option>
            </select>
            <button><FaBorderAll /></button>
            <button><RiListUnordered /></button>
            <Search/> */}
  </div>

 )
}


export default Productpage