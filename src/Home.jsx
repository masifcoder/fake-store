import { useState, useEffect } from "react";


function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = () => {
        setIsLoading(true);

        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);

            }).finally(() => {
                setIsLoading(false);
            })
    }


    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="row">

                {
                    (isLoading == true) ? <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : null
                }

                {
                    products.map((product) => {
                        return (
                            <div className="col-md-4 mb-2" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{product.title}</h5>
                                        <h6 className="card-title">Price: ${product.price}</h6>
                                        <a href="#" className="btn btn-primary">view details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home