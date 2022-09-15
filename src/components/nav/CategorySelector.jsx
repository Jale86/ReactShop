import {useSelector, useDispatch} from "react-redux";
import { actions as productActions } from "../../global/slices/productSlice";

export default function CategorySelector (){

   const {categories, selectedCategory} = useSelector(state => state.products)
   const dispatch = useDispatch()

    return (
       <div className="dropdown mb-3 mb-lg-0">
        <button 
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        className="btn btn-outline-success text-white dropdown-toggle">
            {selectedCategory}
        </button>
        <ul className="dropdown-menu">
            {categories.map(category=> (
                    <li
                    onMouseOver={() => dispatch(productActions.setSelectedCategory(category))} 
                    key={category}><a href="#" className="dropdown-item pointer">{category}</a></li>
                )
            )}
        </ul>
       </div>
    )
}