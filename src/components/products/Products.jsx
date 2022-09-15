import Product from "./Product";

export default function Products({products=[]}){
    return (

        <div className="px-lg-5 ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {products.map(product => (<Product product={product}/>))}
            </div>
            {/* <ul className="px-5">
               {products.map(product => (<Product product={product}/>))}
            </ul> */}
        </div>
        
    )
}