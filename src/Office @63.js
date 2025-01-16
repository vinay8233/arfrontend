
import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const Office63  = () => {
    const [product, setProduct] = useState([]);

    const find_interior = () => {
        fetch(`${apiUrl}/find_interior`)
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "office @63");
                    setProduct(filteredData); 
                }
            })
            .catch((err) => console.error('Error:', err));
    };

    useEffect(() => {
        find_interior();
    }, []);
    

    return (
        <>




            <h5 className="township-heading text-center">Office @63</h5>

            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {product.map((item, index) => (
                        <div key={index} className="col">
                            <div className="p-0">
                                <img
                                    src={`${apiUrl}/uploads/${item.img}`}
                                    alt="Product"
                                    style={{ width: '90%', height: '150px' }}
                                    className="img-fluid"
                                />
                                <h6>{item.Projectname}</h6>
                                <p>{item.Location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Office63 ;
