import {useNavigate} from "react-router-dom";
import Price from "../extra/Price";
import ProductButton from "./ProductButton";

export default function Product({product={product}}){

    const nav = useNavigate();

    return (

            <div className="col text-dark gy-3">
                <div key={product.id} id="product" className="card h-100">
                    <img onClick={()=>nav(`/single/${product.id}`)} 
                    src={require(`../../images/${product.id}.jpg`)}
                    className="card-img-top" title={product.name}
                    />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h6 className="fw-bolder">
                               {product.name}
                            </h6>
                            <span>
                                <Price value={product.price}/>
                            </span>
                        </div>
                    </div>

                    <div className="card-footer p-4 -t-0 border-top-0 bg-transparent">
                           <ProductButton product={product}/>
                    </div>
                   
                </div>
            </div>
        
    )
}