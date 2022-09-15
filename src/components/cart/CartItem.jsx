import {useDispatch} from "react-redux";
import { actions as cartActions } from "../../global/slices/cartSlice"
import Price from "../extra/Price";

export default function Cartitem ({item={}}) {

    const dispatch = useDispatch()

    const increpmentQuantity = (amount) => {
        dispatch(cartActions.increpmentitemQuantity({item, amount}))
    }

    return (
        <li className="list-group-item">
            <div className="my-0 d-flex justify-content-between align-tems-center">
                <span className="fw-bolder fs-6 me-auto">
                   {item.name} <Price value={item.price}/>
                </span>
                <div className="btn btn-border">
                    <button onClick={()=> increpmentQuantity(-1)} className="btn border">-</button>
                    <button className="btn btn-light border"disabled>{item.quantity}</button>
                    <button onClick={()=> increpmentQuantity(1)} className="btn border">+</button>
                </div>

            </div>
            <p className="text-muted mb-0 col-3 description w-100">
                {item.description}
            </p>
        </li>
    )
}