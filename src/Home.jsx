import { useState } from "react";


function Home() {
    const [products, setProducts] = useState([]);

    const loadData = () => {

        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }

    return (
        <>

            <button onClick={loadData} className="btn btn-sm btn-outline-warning">Load Data</button>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-4 mb-2">
                                <div class="card">
                                    <img src={product.image} class="card-img-top" alt="..." style={ {height: "150px", objectFit: "cover"} } />
                                        <div class="card-body">
                                            <h5 class="card-title text-truncate">{product.title}</h5>
                                            <h6 class="card-title">Price: ${product.price}</h6>
                                            <a href="#" class="btn btn-primary">view details</a>
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