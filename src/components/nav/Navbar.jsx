import {useNavigate} from "react-router-dom";
import CategorySelector from "./CategorySelector";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";


export default function Navbar({title}) {

const nav = useNavigate()

    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
            <div className="container-fluid">
                <span onClick={() => nav("/")} id="name" className="navbar-brand fw-bold pointer">
                   {title}
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"></div>
                 <CategorySelector/>
                 <SearchBar/>
                 <CartButton/>
                 </div>
       </nav>
    )
}