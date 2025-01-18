import { Link } from "react-router-dom";
import './Admin.css';
import { useEffect, useState } from "react";


const Dashboard = () => {

   
  const [img,setImg] =useState('');
  
   const [product,setProduct] = useState([]);

   const [userID,setuserID]=useState('') 

   let formData = new FormData();
    formData.append('img', img);
    


  function handleUpload (e)  {
    
    e.preventDefault()
    console.log(formData)

    fetch(`${process.env.REACT_APP_API_URL}/addcrouselproduct`, {
      method: 'POST',
      body: formData
    })
    .then((res) =>{return res.json()}).then((data) => {
        console.log(data)
        if(data._id){
          getcrouselproduct()
        }
    })
    }
 useEffect(() => {
  getcrouselproduct()

 }, []);

  const getcrouselproduct = () => {

    fetch(`${process.env.REACT_APP_API_URL}/getcrouselproduct`)
    .then((res) =>{return res.json()})
    .then((data) => {
        console.log(data)
        setProduct(data.data)

      
    })
  }

  function handeldelete(id){
    fetch(`${process.env.REACT_APP_API_URL}/deletereg/${id}`,{
      method:"DELETE"
    })
    .then((res) =>{return res.json()})
    .then((data) => {
        console.log(data)
        if(data._id){
          getcrouselproduct()
        }
    }
    )
  }
  function handelupdate(id){
    fetch(`${process.env.REACT_APP_API_URL}/update/${id}`,{
      method:"PUT"
    })
    .then((res) =>{return res.json()})
    .then((data) => {
        console.log(data)
        if(data._id){
          getcrouselproduct()
        }
    }
    )
  }
  
   


    return (
       
//       

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

<button type="button" class="btn btn-primary mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add crouser
</button>

<table className="table table-hover w-75 m-auto">
 <thead>
  <tr>
    <th>S.no</th>
    <th>Image</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
      {product.map((item,key)=>(
          <tr>
       
        <td>{key + 1}</td>
      <td>
        <img
          src={`${process.env.REACT_APP_API_URL}/uploads/${item.img}`}
          alt="Product"
          style={{ width: '100px', height: 'auto' }} 
        />
      </td>
     
      <td><i class="bi bi-pencil-square"></i></td>
      <td><i onClick={()=>{handeldelete(item._id)}} className="bi bi-trash3"></i></td>
         
          
          </tr>
         ))}
</tbody>




</table>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <form  class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">add architure</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <label htmlFor=""> Image</label>
            <input  onChange={(e)=>{setImg(e.target.files[0])}} className='form-control' type="file" name='img'id='' />

            
            
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpload}
                data-bs-dismiss="modal"
              >
                Upload
              </button>
      </div>
    </div>
  </form>
</div>

{/* update modal  */}

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">update</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <label htmlFor=""> image</label>
            <input  onChange={(e)=>{setImg(e.target.files[0])}} className='form-control' type="file" name='img'id='' />

           

            

        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button onClick={()=>{handelupdate(userID)}} type="button" className="btn btn-primary" data-bs-dismiss="modal">update user</button>
      </div>
    </div> 
  </div>
</div>
    </>
  )
}

       



 
export default Dashboard;