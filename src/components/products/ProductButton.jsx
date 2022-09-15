import {useDispatch, useSelector} from "react-redux"
import { actions as cartActions } from "../../global/slices/cartSlice"
import Condition from "../extra/Condition"

export default function ProductButton (props) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cart)//prati stanje stata cart items da li je proizvod dodat u korpu
    const isInCart = Boolean(items.find(i => i.id === props.product.id))

    return <Condition test = {isInCart} 
            success = { <button onClick={() => dispatch(cartActions.removeFromCart(props.product))} 
                className="btn btn-outline-danger d-block w-100">
                    Remove From Card
                </button>}
            fail = {<button onClick={() => dispatch(cartActions.addToCart(props.product))} 
                className="btn btn-outline-success d-block w-100">
                    Add To Card
                </button>}
            />

}