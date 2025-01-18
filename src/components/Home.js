import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/getcrouselproduct`)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data)
        setProduct(data.data)




      })
  }, []);



  const [product, setProduct] = useState([]);
  return (
    <>


<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {product.map((item, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={item.id}
      >
        <img
          className="d-block w-100"
          src={`${process.env.REACT_APP_API_URL}/uploads/${item.img}`}
          alt="Product"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
    ))}
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
  )
}

export default Home
