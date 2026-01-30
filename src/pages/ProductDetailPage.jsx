import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function ProductDetailPage() {

    const params = useParams();

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoaading] = useState(false);

    const getSingleProduct = () => {
        setIsLoaading(true);
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .finally(() => { setIsLoaading(false) })

    }

    useEffect(() => {

        getSingleProduct();

    }, []);

    return (
        <>
            {
                (isLoading == true) ? <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : null
            }
            {product.title}
        </>
    )
}

export default ProductDetailPage