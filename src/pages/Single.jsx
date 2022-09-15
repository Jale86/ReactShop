import {useParams} from "react-router-dom";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import {useSelector,useDispatch} from "react-redux";
import { actions as productActions } from "../global/slices/productSlice";
import { useEffect } from "react";
import Price from "../components/extra/Price";

export default function Single(){

    const {single, singleSimilarProducts} = useSelector(state => state.products)
    const {id} = useParams();
    const dispatch = useDispatch()

    useEffect(() => { dispatch(productActions.setSingle(id)) },[id])
    
    // const product = single.find(product=>product.id === +id)
    // console.log(product);


    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6">
                <img src={require(`../images/${single.id}.jpg`)} 
                className="card-img-top mb-5 mb-md-0 p-0 p-lg-5" alt=""/>
                </div>

                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">{single.name}</h2>
                    <div className="fs-5 mb-2">
                        <Price value={single.price}/>
                    </div>
                    <p className="lead">
                        {single.description}
                    </p>
                    <ProductButton product={single}/>
                </div>
                {/* <div className="col-6">
                    <img src={require(`../images/${product.id}.jpg`)} className="w-50" alt=""/>
                </div>
                <div className="col-6">
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>

                </div> */}
            </div>

            <Line/>

            <h2 className="text-white my-4 text-center">Similar Products</h2>

            <Products products={singleSimilarProducts}/>
        </div>
    )
}