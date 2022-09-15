import CartBuyButton from "../components/cart/CartBuyButton";
import CartItem from "../components/cart/CartItem";
import CartNumbers from "../components/cart/CartNumber";
import NoContent from "../components/extra/NoContent";
import {useSelector} from "react-redux";

export default function Cart(){

    const {items} = useSelector(state => state.cart)

    if (items.length ===0) return <NoContent text="Nothing in your cart" btnText="Browse Products"/>
       
    return (
        <div className="row py-3">
            <div className="col-12 col-md-10 col-xl-8 mx-auto">
                <div id="cart" className="border p-3 bg-white text-dark my-md-0 rounded">
                    <h4 className="mb-3 px-1">
                        Cart
                    </h4>
                    {/* CartItem component */}
                    <ul className="list-group mb-3 cart-list">
                        {items.map(i => <CartItem key={i.id} item={i}/>)}
                    </ul>
                    {/* CartNumber component */}
                    <CartNumbers/>

                    <CartBuyButton/>
                </div>
            </div>
        </div>
    )
        
 
   
}