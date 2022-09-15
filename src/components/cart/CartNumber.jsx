import {useSelector} from "react-redux";
import Price from "../extra/Price";

export default function CartNumbers () {

    const {cartNumbers} = useSelector(state => state.cart)
    
    const rows = [
        {title: "Subtotal", price : cartNumbers.subtotal},
        {title: "Shipping", price : cartNumbers.shipping},
        {title: "Tax", price : cartNumbers.tax},
        {title: "Total (USD)", price : cartNumbers.total},
    ]

    return (
        <div id="cart-numbers">
            {rows.map(row =>
                <li key={row.title} className="list-group-item d-flex justify-content-between">
                   <span>{row.title}</span>
                   <span className="text-muted"><Price value={row.price} decimal={2}/></span>
               </li>
                )}
                
{/* distract all elements */}
            {/* {rows.map({title, price} =>
                <li key={title} className="list-group-item d-flex justify-content-between">
                   <span>{title}</span>
                   <span className="text-muted">{price}</span>
               </li>
                )} */}
         
        </div>
    )
}