import {useSelector, useDispatch} from "react-redux"
import { actions as productActions } from "../../global/slices/productSlice";

export default function SearchBar (){

    const {searchTerm} = useSelector(state => state.products);

    const dispatch = useDispatch()

    return (
       <form onSubmit={(e)=>e.preventDefault()} action="" className="d-flex ms-md-0 ms-lg-3">
        <input type="text"
        placeholder="Search Product" 
        onChange={(e)=>{ dispatch(productActions.setSearchTerm(e.target.value))}}
        className="form-control ms-md-auto me-2"
        value={searchTerm}
        />
       </form>
    )
}