// import { useState, useEffect } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Interior_list = () => {
//     const [name, setName] = useState('');
//     const [categrylist, setCategrylist] = useState([]); 

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name };

//         fetch(`${apiUrl}/add_interior_categry`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.data) {
//                     resetForm();
//                     find_interior_categry();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     };



//      const find_interior_categry = () => {

//         fetch(`${apiUrl}/find_interior_categry`).then((res) => res.json()).then((data) => {
//             setCategrylist(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


//     const resetForm = () => {
//         setName('');
//     };

//     useEffect(() => {
//         find_interior_categry();
//     }, []);

//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
//                     <div className="col">
//                         <div className="p-3">
//                             <div className="accordion" id="accordionExample">
//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseOne"
//                                             aria-expanded="true"
//                                             aria-controls="collapseOne"
//                                         >
//                                             Add Interior Category
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseOne"
//                                         className="accordion-collapse collapse show"
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <form onSubmit={handleSubmit} action="">
//                                                 <label htmlFor="">Category</label>
//                                                 <input
//                                                     value={name}
//                                                     onChange={(e) => setName(e.target.value)}
//                                                     name="name"
//                                                     type="text"
//                                                     className="form-control mt-1"
//                                                 />
//                                                 <button className="btn btn-danger mt-2" type="submit">
//                                                     ADD
//                                                 </button>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button collapsed"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseTwo"
//                                             aria-expanded="false"
//                                             aria-controls="collapseTwo"
//                                         >
//                                             Interior Categories List
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseTwo"
//                                         className="accordion-collapse collapse"
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <ul>
//                                                 {categrylist.map((item, index) => (
//                                                     <li key={index}>{item.Name}</li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseThree"
//                                             aria-expanded="true"
//                                             aria-controls="collapseOne"
//                                         >
//                                             Add Interior Itoms
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseThree"
//                                         className="accordion-collapse collapse "
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                         <form action="">
//                                                 <label htmlFor="">Select Category</label>

//                                                 <select className='form-control mb-2' id="Category" name="Category">
//                                                 {categrylist.map((item, index) => (
//                                                     <option key={index} value={item.Name}>{item.Name}</option>
//                                                 ))}

//                                                 </select>

//                                                 <label htmlFor="">Location</label>
//                                                 <input className='form-control mb-2' type="text" />

//                                                 <label htmlFor="">Upload Image</label>
//                                                 <input className='form-control mb-2' type="file" name="" id="" />

//                                                 <button className="btn btn-danger mt-2" type="submit">
//                                                     ADD
//                                                 </button>

//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>    
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="p-3">Row column</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Interior_list;







// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Interior_list = () => {
//     const [name, setName] = useState('');
//     const [projectname, setProjectname] = useState([]);
//     const [categrylist, setCategrylist] = useState([]);
//     const [Category, setCategory] = useState('');
//     const [img, setImg] = useState('');
//     const [location, setLocation] = useState('');
//     const [product, setProduct] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name };

//         fetch(`${apiUrl}/add_interior_categry`, {
//             method: "POST",

//             body: JSON.stringify(formData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.data) {
//                     resetForm();
//                     find_interior_categry();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     };



//     const find_interior_categry = () => {

//         fetch(`${apiUrl}/find_interior_categry`).then((res) => res.json()).then((data) => {
//             setCategrylist(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


//     const resetForm = () => {
//         setName('');
//         setImg('');
//         setCategory('');
//         setLocation('');
//         setProjectname('');
//     };

//     useEffect(() => {
//         find_interior_categry();
//         find_interior();
//     }, []);

//     let formData = new FormData();
//     formData.append('img', img);
//     formData.append('Category', Category);
//     formData.append('location', location);
//     formData.append('projectname', projectname);

//     function handleUpload(e) {

//         e.preventDefault()

//         fetch(`${apiUrl}/add_interior`, {
//             method: 'POST',
//             body: formData
//         })
//             .then((res) => { return res.json() }).then((data) => {
//                 // console.log(data)
//                 find_interior()
//                 resetForm()
//             })

//     }


//     const find_interior = () => {

//         fetch(`${process.env.REACT_APP_API_URL}/find_interior`)
//             .then((res) => { return res.json() })
//             .then((data) => {
//                 console.log(data)
//                 setProduct(data.data)

//             })
//     }




//     return (
//         <>



//             <div className='d-flex'>
//                 <Link to="/admin" className="btn btn-primary d-block mb-4">Back To Dashbord</Link>
//                 <h2 className="text-center w-50 mb-4">Interior Projects</h2>
//                 <Link to='/admin/Architecturelist' className="btn btn-primary d-block mb-4 me-auto">Architecture Project</Link>
//             </div>
//             <div className="container-fluid">
//                 <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
//                     <div className="col">
//                         <div className="p-3">
//                             <div className="accordion position-fixed" id="accordionExample">
//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseOne"
//                                             aria-expanded="true"
//                                             aria-controls="collapseOne"
//                                         >
//                                             Add Interior Category
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseOne"
//                                         className="accordion-collapse collapse show"
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <form onSubmit={handleSubmit} action="">
//                                                 <label htmlFor="">Category</label>
//                                                 <input
//                                                     value={name}
//                                                     onChange={(e) => setName(e.target.value)}
//                                                     name="name"
//                                                     type="text"
//                                                     className="form-control mt-1"
//                                                 />
//                                                 <button className="btn btn-danger mt-2" type="submit">
//                                                     ADD
//                                                 </button>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button collapsed"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseTwo"
//                                             aria-expanded="false"
//                                             aria-controls="collapseTwo"
//                                         >
//                                             Interior Categories List
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseTwo"
//                                         className="accordion-collapse collapse"
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <ul>
//                                                 {categrylist.map((item, index) => (
//                                                     <li key={index}>{item.Name}</li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="accordion-item">
//                                     <h2 className="accordion-header">
//                                         <button
//                                             className="accordion-button"
//                                             type="button"
//                                             data-bs-toggle="collapse"
//                                             data-bs-target="#collapseThree"
//                                             aria-expanded="true"
//                                             aria-controls="collapseOne"
//                                         >
//                                             Add Interior Itoms
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseThree"
//                                         className="accordion-collapse collapse "
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <form>
//                                                 {/* Select Category */}
//                                                 <label htmlFor="Category">Select Category</label>
//                                                 <select
//                                                     onChange={(e) => setCategory(e.target.value)}
//                                                     value={Category}
//                                                     className="form-control mb-2"
//                                                     id="Category"
//                                                     name="Category"
//                                                 >
//                                                     <option value="" disabled>Select a category</option> {/* Default placeholder */}
//                                                     {categrylist.map((item, index) => (
//                                                         <option key={index} value={item.Name}>
//                                                             {item.Name}
//                                                         </option>
//                                                     ))}
//                                                 </select>

//                                                 <label htmlFor="">Project Name</label>
//                                                 <input
//                                                     onChange={(e) => setProjectname(e.target.value)}
//                                                     value={projectname}
//                                                     className="form-control mb-2"
//                                                     name="projectname"
//                                                     type="text"
//                                                 />

//                                                 {/* Upload Image */}
//                                                 <label htmlFor="img">Image</label>
//                                                 <input
//                                                     onChange={(e) => setImg(e.target.files[0])}
//                                                     className="form-control"
//                                                     type="file"
//                                                     name="img"
//                                                     id="img"
//                                                     accept="image/*" // Optional: restrict file types to images
//                                                 />

//                                                 {/* Location Input */}
//                                                 <label htmlFor="location">Location</label>
//                                                 <input
//                                                     onChange={(e) => setLocation(e.target.value)}
//                                                     value={location}
//                                                     className="form-control"
//                                                     type="text"
//                                                     name="location"
//                                                     id="location"
//                                                 />

//                                                 {/* Submit Button */}
//                                                 <button
//                                                     type="button"
//                                                     className="btn btn-primary mt-2"
//                                                     onClick={handleUpload} // Trigger handleUpload function
//                                                 >
//                                                     Upload
//                                                 </button>
//                                             </form>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="p-3">

//                             <table className="table table-striped table-hover table-bordered shadow-sm">
//                                 <thead className="bg-dark text-white text-center">
//                                     <tr>
//                                         <th>S.no</th>
//                                         <th>Project Name</th>
//                                         <th>Image</th>
//                                         <th>location</th>
//                                         <th>category</th>

//                                     </tr>
//                                 </thead>
//                                 <tbody className="text-center">
//                                     {product.map((item, key) => (
//                                         <tr>

//                                             <td className='pt-5' >{key + 1}</td>
//                                             <td className='pt-5'>{item.Projectname}</td>

//                                             <td>

//                                                 <img
//                                                     src={`${apiUrl}/uploads/${item.img}`}
//                                                     alt="Product"
//                                                     style={{ width: '90%', height: '150px' }}
//                                                 />
//                                             </td>
//                                             <td className='pt-5'>{item.Location}</td>
//                                             <td className='pt-5'>{item.Category}</td>



//                                         </tr>
//                                     ))}
//                                 </tbody>




//                             </table>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Interior_list




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const apiUrl = process.env.REACT_APP_API_URL;

const InteriorList = () => {
  const [name, setName] = useState("");
  const [projectname, setProjectname] = useState("");
  const [categrylist, setCategrylist] = useState([]);
  const [Category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/add_interior_categry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          resetForm();
          fetchCategories();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("Category", Category);
    formData.append("location", location);
    formData.append("projectname", projectname);

    fetch(`${apiUrl}/add_interior`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        fetchProducts();
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const fetchCategories = () => {
    fetch(`${apiUrl}/find_interior_categry`)
      .then((res) => res.json())
      .then((data) => setCategrylist(data.data))
      .catch((err) => console.error(err));
  };

  const fetchProducts = () => {
    fetch(`${apiUrl}/find_interior`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.error(err));
  };

  const resetForm = () => {
    setName("");
    setProjectname("");
    setCategory("");
    setImg("");
    setLocation("");
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (

<>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold text-uppercase" to="#">
          Admin Panel
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin/Architecturelist"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin/contactlist"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="#"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

<div className="container-fluid">
      
      <div className="d-flex justify-content-between align-items-center my-4">
        <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
        <h2 className="text-center">Interior Projects</h2>
        <Link to="/admin/Architecturelist" className="btn btn-primary">
          Architecture Projects
        </Link>
      </div>

      <div className="row">
       
        <div className="col-lg-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#addCategory"
                >
                  Add Interior Category
                </button>
              </h2>
              <div id="addCategory" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="categoryName" className="form-label">
                      Category Name
                    </label>
                    <input
                      id="categoryName"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter category name"
                    />
                    <button type="submit" className="btn btn-danger mt-3">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#addItems"
                >
                  Add Interior Items
                </button>
              </h2>
              <div id="addItems" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <form onSubmit={handleUpload}>
                    <label htmlFor="categorySelect" className="form-label">
                      Select Category
                    </label>
                    <select
                      id="categorySelect"
                      className="form-control mb-3"
                      value={Category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select a category</option>
                      {categrylist.map((item, index) => (
                        <option key={index} value={item.Name}>
                          {item.Name}
                        </option>
                      ))}
                    </select>

                    <label htmlFor="projectName" className="form-label">
                      Project Name
                    </label>
                    <input
                      id="projectName"
                      type="text"
                      className="form-control mb-3"
                      value={projectname}
                      onChange={(e) => setProjectname(e.target.value)}
                    />

                    <label htmlFor="uploadImage" className="form-label">
                      Upload Image
                    </label>
                    <input
                      id="uploadImage"
                      type="file"
                      className="form-control mb-3"
                      onChange={(e) => setImg(e.target.files[0])}
                    />

                    <label htmlFor="locationInput" className="form-label">
                      Location
                    </label>
                    <input
                      id="locationInput"
                      type="text"
                      className="form-control mb-3"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />

                    <button type="submit" className="btn btn-primary">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-lg-6">
          <table className="table table-hover table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Project Name</th>
                <th>Image</th>
                <th>Location</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Projectname}</td>
                  <td>
                    <img
                      src={`${apiUrl}/uploads/${item.img}`}
                      alt="Interior"
                      className="img-fluid"
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>{item.Location}</td>
                  <td>{item.Category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


</>

    
  );
};

export default InteriorList;
