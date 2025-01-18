


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
                to="/admin/dashboard"
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
                to="/admin/aboutawards"
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
            {/* <div className="accordion-item">
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
            </div> */}

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





// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import './Admin.css';

// const apiUrl = process.env.REACT_APP_API_URL;

// const InteriorList = () => {
//   const [name, setName] = useState("");
//   const [projectName, setProjectName] = useState("");
//   const [categoryList, setCategoryList] = useState([]);
//   const [category, setCategory] = useState("");
//   const [img, setImg] = useState(null);
//   const [location, setLocation] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       alert("Category name is required.");
//       return;
//     }

//     try {
//       const response = await fetch(`${apiUrl}/add_interior_categry`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name }),
//       });

//       const data = await response.json();
//       if (data.data) {
//         resetForm();
//         fetchCategories();
//       } else {
//         alert("Failed to add category.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(`${apiUrl}/find_interior_categry`);
//       const data = await response.json();
//       setCategoryList(data.data || []);
      
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch(`${apiUrl}/find_interior`);
//       const data = await response.json();
//       setProducts(data.data || []);
//       console.log(data.data)
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!category || !projectName.trim() || !img || !location.trim()) {
//       alert("All fields are required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("img", img);
//     formData.append("Category", category);
//     formData.append("location", location);
//     formData.append("projectname", projectName);

//     try {
//       const response = await fetch(`${apiUrl}/add_achitecture`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       if (data.success) {
//         resetForm();
//         fetchProjects();
//       } else {
//         alert("Failed to add project.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const resetForm = () => {
//     setName("");
//     setImg(null);
//     setCategory("");
//     setLocation("");
//     setProjectName("");
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchProjects();
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
//         <div className="container-fluid">
//           <Link className="navbar-brand fw-bold text-uppercase" to="#">
//             Admin Panel
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-primary text-light mx-2" to="/admin">
//                   Dashboard
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/Architecturelist">
//                   Projects
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/contactlist">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/aboutawards">
//                   About Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <Link to="/admin" className="btn btn-primary">Back to Dashboard</Link>
//           <h2 className="text-center mb-0">Architecture Projects</h2>
//           <Link to="/admin/interiorlist" className="btn btn-primary">Interior Projects</Link>
//         </div>

//         <div className="row">
//           {/* Left Side */}
//           <div className="col-lg-4">
//             <div className="accordion" id="accordionExample">
//               {/* Add Category */}
//               <div className="accordion-item">
//                 <h2 className="accordion-header">
//                   <button
//                     className="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#addCategory"
//                     aria-expanded="true"
//                     aria-controls="addCategory"
//                   >
//                     Add Architecture Category
//                   </button>
//                 </h2>
//                 <div id="addCategory" className="accordion-collapse collapse show">
//                   <div className="accordion-body">
//                     <form onSubmit={handleSubmit}>
//                       <label>Category Name</label>
//                       <input
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="form-control mt-1"
//                         type="text"
//                         placeholder="Enter category name"
//                       />
//                       <button className="btn btn-primary mt-2" type="submit">
//                         Add Category
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               {/* Categories List */}
//               <div className="accordion-item">
//                 <h2 className="accordion-header">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#categoryList"
//                     aria-expanded="false"
//                     aria-controls="categoryList"
//                   >
//                     Architecture Categories List
//                   </button>
//                 </h2>
//                 <div id="categoryList" className="accordion-collapse collapse">
//                   <div className="accordion-body">
//                     <ul className="list-group">
//                       {categoryList.map((item, index) => (
//                         <li key={index} className="list-group-item">
//                           {item.Name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Add Project */}
//               <div className="accordion-item">
//                 <h2 className="accordion-header">
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#addProject"
//                     aria-expanded="false"
//                     aria-controls="addProject"
//                   >
//                     Add Architecture Projects
//                   </button>
//                 </h2>
//                 <div id="addProject" className="accordion-collapse collapse">
//                   <div className="accordion-body">
//                     <form onSubmit={handleUpload}>
//                       <label>Category</label>
//                       <select
//                         className="form-control mb-2"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                       >
//                         <option value="" disabled>Select a category</option>
//                         {categoryList.map((item, index) => (
//                           <option key={index} value={item.Name}>
//                             {item.Name}
//                           </option>
//                         ))}
//                       </select>
//                       <label>Project Name</label>
//                       <input
//                         className="form-control mb-2"
//                         value={projectName}
//                         onChange={(e) => setProjectName(e.target.value)}
//                         type="text"
//                         placeholder="Enter project name"
//                       />
//                       <label>Image</label>
//                       <input
//                         className="form-control mb-2"
//                         type="file"
//                         onChange={(e) => setImg(e.target.files[0])}
//                         multiple />
//                       <label>Location</label>
//                       <input
//                         className="form-control mb-2"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         type="text"
//                         placeholder="Enter location"
//                       />
//                       <button className="btn btn-success mt-2" type="submit">
//                         Add Project
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="col-lg-8">
//             <table className="table table-striped table-hover table-bordered shadow-sm">
//               <thead className="bg-dark text-white text-center">
//                 <tr>
//                   <th>#</th>
//                   <th>Project Name</th>
//                   <th>Image</th>
//                   <th>Location</th>
//                   <th>Category</th>
//                 </tr>
//               </thead>
//               <tbody className="text-center">
//                 {products.map((item, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.Projectname}</td>
//                     <td>
//                       <img
//                         src={`${apiUrl}/uploads/${item.img}`}
//                         alt={item.Projectname}
//                         style={{ width: "100px", height: "100px" }}
//                       />
//                     </td>
//                     <td>{item.Location}</td>
//                     <td>{item.Category}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InteriorList;
