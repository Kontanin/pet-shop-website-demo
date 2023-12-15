import DefaultPage from '../components/DefaultPage';
import Botton from '../components/Botton';

function OrderPage(){
    return(
    <div>            
        <DefaultPage/>
    <h1>OrderPage</h1>
    <Botton >+</Botton>
    <Botton >-</Botton>
    </div>
    );
}

export default OrderPage;