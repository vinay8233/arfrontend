// // import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;


// const Architecture_list = () => {

//         const [name, setName] = useState('');
//         const{categrylist,setCategrylist}=useState([]);

//         const handleSubmit = (e) => {
//                 e.preventDefault();
//                 const formData = { name };

//                 fetch(`${apiUrl}/add_architecture_category`, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.data) {
//                             resetForm();
//                             find_architecture_category();
//                         }
//                     })
//                     .catch((err) => console.error('Error:', err));
//             }



//             const find_architecture_category = () => {
//                 fetch(`${apiUrl}/find_architecture_category`)
//                   .then((res) => res.json()).then((data) => {
//                     setCategrylist(data.data);
//                     })
//                   .catch((err) => console.error('Error:', err));
//               };



//               const resetForm = () => {
//                   setName('');
//                   setCategrylist('');

//                 };

//                useEffect(() => {
//                 find_architecture_category();
//                 }, []);






//     return (

//         <>

// <div className="container-fluid"> 
//   <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
//     <div className="col">
//       <div className="p-3">
//       <div className="accordion" id="accordionExample">
// <div className="accordion-item">
//     <h2 className="accordion-header">
//         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                     Add Architecture Categry

//         </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//             <form onSubmit={handleSubmit} action="">
//                 <label htmlFor="">Categry</label>
//                 <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control mt-1" />
//                 <button className="btn btn-danger mt-2" type="submit">ADD</button>
//             </form>
//         </div>
//     </div>
// </div>
// <div className="accordion-item">
//     <h2 className="accordion-header">
//         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Architecture Categry's List
//         </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//             <ul>
//                 {categrylist.map((item) => (
//                     <li>{item.Name}</li>
//                 ))}
//             </ul>
//     </div>
// </div>
// </div>
// </div> 
//       </div>
//     </div>
//     <div className="col">
//       <div className="p-3">Row column</div>
//     </div>

//   </div>
// </div>

//         </>




//     )
// }
// export default Architecture_list;








// import { useState, useEffect } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Architecture_list = () => {
//     const [name, setName] = useState('');
//     const [categrylist, setCategrylist] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name };

//         fetch(`${apiUrl}/add_architecture_category`, {
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
//                     find_architecture_category();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     };



//     const find_architecture_category = () => {

//         fetch(`${apiUrl}/find_architecture_category`).then((res) => res.json()).then((data) => {
//             setCategrylist(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


//     const resetForm = () => {
//         setName('');
//     };

//     useEffect(() => {
//         find_architecture_category();
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
//                                             Add Architecture Category
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
//                                             Architecture Categories List
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
//                                             Add Architecture Itoms
//                                         </button>
//                                     </h2>
//                                     <div
//                                         id="collapseThree"
//                                         className="accordion-collapse collapse "
//                                         data-bs-parent="#accordionExample"
//                                     >
//                                         <div className="accordion-body">
//                                             <form action="">
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

// export default Architecture_list;





// import { useState, useEffect } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Architecture_list = () => {

//     const [name, setName] = useState('');
//     const [categrylist, setCategrylist] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name };

//         fetch(`${apiUrl}/find_architecture_category`, {
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
//                     find_architecture_category();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     };



//     const find_architecture_category = () => {

//         fetch(`${apiUrl}/find_interior_categry`).then((res) => res.json()).then((data) => {
//             setCategrylist(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


//     const resetForm = () => {
//         setName('');
//     };

//     useEffect(() => {
//         find_architecture_category();
//     }, []);



//     return (

//         <>

//             <div className="container-fluid">
//                 <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">                   
//                       <div className="col">
//                     <div className="p-3">
//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">                              
//                                  <h2 className="accordion-header">
//                                 <button
//                                     className="accordion-button"
//                                     type="button"
//                                     data-bs-toggle="collapse"
//                                     data-bs-target="#collapseOne"
//                                     aria-expanded="true"
//                                     aria-controls="collapseOne"
//                                 >
//                                     Add Architecture Category
//                                 </button>
//                             </h2>
//                                 <div
//                                     id="collapseOne"
//                                     className="accordion-collapse collapse show"
//                                     data-bs-parent="#accordionExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <form onSubmit={handleSubmit} action="">
//                                             <label htmlFor="">Category</label>
//                                             <input
//                                                 value={name}
//                                                 onChange={(e) => setName(e.target.value)}
//                                                 name="name"
//                                                 type="text"
//                                                 className="form-control mt-1"
//                                             />
//                                             <button className="btn btn-danger mt-2" type="submit">
//                                                 ADD
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed"
//                                         type="button"
//                                         data-bs-toggle="collapse"
//                                         data-bs-target="#collapseTwo"
//                                         aria-expanded="false"
//                                         aria-controls="collapseTwo"
//                                     >
//                                         Architecture Categories List
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="collapseTwo"
//                                     className="accordion-collapse collapse"
//                                     data-bs-parent="#accordionExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <ul>
//                                             {categrylist.map((item, index) => (
//                                                 <li key={index}>{item.Name}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button"
//                                         type="button"
//                                         data-bs-toggle="collapse"
//                                         data-bs-target="#collapseThree"
//                                         aria-expanded="true"
//                                         aria-controls="collapseOne"
//                                     >
//                                         Add Architecture Itoms
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="collapseThree"
//                                     className="accordion-collapse collapse "
//                                     data-bs-parent="#accordionExample"
//                                 >
//                                     <div className="accordion-body">
//                                         {/* <form action="">
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

//                                             </form> */}
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                     <div className="col">
//                         <div className="p-3">Row column</div>
//                     </div>
//                 </div>
//             </div>

//         </>

//     )


// }


// export default Architecture_list;








// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Architecturelist = () => {
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

//         fetch(`${apiUrl}/add_architecture_category`, {
//             method: "POST",

//             body: JSON.stringify(formData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.data) {
//                     resetForm();
//                     find_architecture_category();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     };



//     const find_architecture_category = () => {

//         fetch(`${apiUrl}/find_architecture_category`).then((res) => res.json()).then((data) => {
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
//         find_architecture_category();
//         find_architecture();
//     }, []);

//     let formData = new FormData();
//     formData.append('img', img);
//     formData.append('Category', Category);
//     formData.append('location', location);
//     formData.append('projectname', projectname);

//     function handleUpload(e) {

//         e.preventDefault()

//         fetch(`${apiUrl}/add_achitecture`, {
//             method: 'POST',
//             body: formData
//         })
//             .then((res) => { return res.json() }).then((data) => {
//                 // console.log(data)
//                 find_architecture()
//                 resetForm()
//             })

//     }


//     const find_architecture = () => {

//         fetch(`${process.env.REACT_APP_API_URL}/find_architecture`)
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
//                 <h2 className="text-center w-50 mb-4">Architecture Project</h2>
//                 <Link to='/admin/interiorlist' className="btn btn-primary d-block mb-4 me-auto">Interior Projects</Link>
//             </div>



//             <div className="container-fluid project-table">
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
//                                             Add Architecture Category
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
//                                             Architecture Categories List
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
//                                             Add Architecture Itoms
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
//                         <div className="p-0">

//                             <table className="table  table-striped table-hover table-bordered shadow-sm">
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

// export default Architecturelist







// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import './Admin.css';

// const apiUrl = process.env.REACT_APP_API_URL;

// const Architecturelist = () => {
//   const [name, setName] = useState("");
//   const [projectname, setProjectname] = useState("");
//   const [categrylist, setCategrylist] = useState([]);
//   const [Category, setCategory] = useState("");
//   const [img, setImg] = useState(null);
//   const [location, setLocation] = useState("");
//   const [product, setProduct] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { name };

//     fetch(`${apiUrl}/add_architecture_category`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.data) {
//           resetForm();
//           findArchitectureCategories();
//         }
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   const findArchitectureCategories = () => {
//     fetch(`${apiUrl}/find_architecture_category`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCategrylist(data.data);
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   const findArchitectureProjects = () => {
//     fetch(`${apiUrl}/find_architecture`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data.data);
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("img", img);
//     formData.append("Category", Category);
//     formData.append("location", location);
//     formData.append("projectname", projectname);

//     fetch(`${apiUrl}/add_achitecture`, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then(() => {
//         resetForm();
//         findArchitectureProjects();
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   const resetForm = () => {
//     setName("");
//     setImg(null);
//     setCategory("");
//     setLocation("");
//     setProjectname("");
//   };

//   useEffect(() => {
//     findArchitectureCategories();
//     findArchitectureProjects();
//   }, []);

//   return (

// <>


// <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
//       <div className="container-fluid">
        
//         <Link className="navbar-brand fw-bold text-uppercase" to="#">
//           Admin Panel
//         </Link>

      
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

       
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link
//                 className="nav-link btn btn-primary text-light mx-2"
//                 to="/admin"
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link btn btn-primary text-light mx-2"
//                 to="/admin/Architecturelist"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link btn btn-primary text-light mx-2"
//                 to="/admin/contactlist"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link btn btn-primary text-light mx-2"
//                 to="/admin/aboutawards"
//               >
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <Link to="/admin" className="btn btn-primary">Back to Dashboard</Link>
//         <h2 className="text-center mb-0">Architecture Projects</h2>
//         <Link to="/admin/interiorlist" className="btn btn-primary">Interior Projects</Link>
//       </div>

//       <div className="row">
        
//         <div className="col-lg-4">
//           <div className="accordion " id="accordionExample">
            
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#addCategory"
//                   aria-expanded="true"
//                   aria-controls="addCategory"
//                 >
//                   Add Architecture Category
//                 </button>
//               </h2>
//               <div id="addCategory" className="accordion-collapse collapse show">
//                 <div className="accordion-body">
//                   <form onSubmit={handleSubmit}>
//                     <label>Category Name</label>
//                     <input
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="form-control mt-1"
//                       type="text"
//                       placeholder="Enter category name"
//                     />
//                     <button className="btn btn-primary mt-2" type="submit">
//                       Add Category
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>

         
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#categoryList"
//                   aria-expanded="false"
//                   aria-controls="categoryList"
//                 >
//                   Architecture Categories List
//                 </button>
//               </h2>
//               <div id="categoryList" className="accordion-collapse collapse">
//                 <div className="accordion-body">
//                   <ul className="list-group">
//                     {categrylist.map((item, index) => (
//                       <li key={index} className="list-group-item">
//                         {item.Name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

    
//             <div className="accordion-item ">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#addProject"
//                   aria-expanded="false"
//                   aria-controls="addProject"
//                 >
//                   Add Architecture Projects
//                 </button>
//               </h2>
//               <div id="addProject" className="accordion-collapse collapse">
//                 <div className="accordion-body">
//                   <form onSubmit={handleUpload}>
//                     <label>Category</label>
//                     <select
//                       className="form-control mb-2"
//                       value={Category}
//                       onChange={(e) => setCategory(e.target.value)}
//                     >
//                       <option value="" disabled>Select a category</option>
//                       {categrylist.map((item, index) => (
//                         <option key={index} value={item.Name}>
//                           {item.Name}
//                         </option>
//                       ))}
//                     </select>
//                     <label>Project Name</label>
//                     <input
//                       className="form-control mb-2"
//                       value={projectname}
//                       onChange={(e) => setProjectname(e.target.value)}
//                       type="text"
//                       placeholder="Enter project name"
//                     />
//                     <label>Image</label>
//                     <input
//                       className="form-control mb-2"
//                       type="file"
//                       onChange={(e) => setImg(e.target.files[0])}
//                     />
//                     <label>Location</label>
//                     <input
//                       className="form-control mb-2"
//                       value={location}
//                       onChange={(e) => setLocation(e.target.value)}
//                       type="text"
//                       placeholder="Enter location"
//                     />
//                     <button className="btn btn-success mt-2" type="submit">
//                       Add Project
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

      


      
//         <div className="col-lg-8">
//           <table className="table table-striped table-hover table-bordered shadow-sm">
//             <thead className="bg-dark text-white text-center">
//               <tr>
//                 <th>#</th>
//                 <th>Project Name</th>
//                 <th>Image</th>
//                 <th>Location</th>
//                 <th>Category</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {product.map((item, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.Projectname}</td>
//                   <td>
//                     <img
//                       src={`${apiUrl}/uploads/${item.img}`}
//                       alt={item.Projectname}
//                       style={{ width: "100px", height: "100px" }}
//                     />
//                   </td>
//                   <td>{item.Location}</td>
//                   <td>{item.Category}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

// </>

//   );
// };

// export default Architecturelist;



import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Admin.css';

const apiUrl = process.env.REACT_APP_API_URL;

const ArchitectureList = () => {
  const [name, setName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/add_architecture_category`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      if (data.data) {
        resetForm();
        fetchCategories();
      } else {
        alert("Failed to add category.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/find_architecture_category`);
      const data = await response.json();
      setCategoryList(data.data || []);
      
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${apiUrl}/find_architecture`);
      const data = await response.json();
      setProducts(data.data || []);
      console.log(data.data)
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!category || !projectName.trim() || !img || !location.trim()) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("img", img);
    formData.append("Category", category);
    formData.append("location", location);
    formData.append("projectname", projectName);

    try {
      const response = await fetch(`${apiUrl}/add_achitecture`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        resetForm();
        fetchProjects();
      } else {
        alert("Failed to add project.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const resetForm = () => {
    setName("");
    setImg(null);
    setCategory("");
    setLocation("");
    setProjectName("");
  };

  useEffect(() => {
    fetchCategories();
    fetchProjects();
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
                <Link className="nav-link btn btn-primary text-light mx-2" to="/admin">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/Architecturelist">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/contactlist">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-light mx-2" to="/admin/aboutawards">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/admin" className="btn btn-primary">Back to Dashboard</Link>
          <h2 className="text-center mb-0">Architecture Projects</h2>
          <Link to="/admin/interiorlist" className="btn btn-primary">Interior Projects</Link>
        </div>

        <div className="row">
          {/* Left Side */}
          <div className="col-lg-4">
            <div className="accordion" id="accordionExample">
              {/* Add Category */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#addCategory"
                    aria-expanded="true"
                    aria-controls="addCategory"
                  >
                    Add Architecture Category
                  </button>
                </h2>
                <div id="addCategory" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <form onSubmit={handleSubmit}>
                      <label>Category Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control mt-1"
                        type="text"
                        placeholder="Enter category name"
                      />
                      <button className="btn btn-primary mt-2" type="submit">
                        Add Category
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Categories List */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#categoryList"
                    aria-expanded="false"
                    aria-controls="categoryList"
                  >
                    Architecture Categories List
                  </button>
                </h2>
                <div id="categoryList" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <ul className="list-group">
                      {categoryList.map((item, index) => (
                        <li key={index} className="list-group-item">
                          {item.Name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Add Project */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#addProject"
                    aria-expanded="false"
                    aria-controls="addProject"
                  >
                    Add Architecture Projects
                  </button>
                </h2>
                <div id="addProject" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <form onSubmit={handleUpload}>
                      <label>Category</label>
                      <select
                        className="form-control mb-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" disabled>Select a category</option>
                        {categoryList.map((item, index) => (
                          <option key={index} value={item.Name}>
                            {item.Name}
                          </option>
                        ))}
                      </select>
                      <label>Project Name</label>
                      <input
                        className="form-control mb-2"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        type="text"
                        placeholder="Enter project name"
                      />
                      <label>Image</label>
                      <input
                        className="form-control mb-2"
                        type="file"
                        onChange={(e) => setImg(e.target.files[0])}
                      />
                      <label>Location</label>
                      <input
                        className="form-control mb-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="Enter location"
                      />
                      <button className="btn btn-success mt-2" type="submit">
                        Add Project
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-8">
            <table className="table table-striped table-hover table-bordered shadow-sm">
              <thead className="bg-dark text-white text-center">
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Image</th>
                  <th>Location</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {products.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Projectname}</td>
                    <td>
                      <img
                        src={`${apiUrl}/uploads/${item.img}`}
                        alt={item.Projectname}
                        style={{ width: "100px", height: "100px" }}
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

export default ArchitectureList;
