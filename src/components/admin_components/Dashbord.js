import { Link } from "react-router-dom";
import './Admin.css';


const Dashboard = () => {



    return (
       
//        <nav className="navbar navbar-expand-lg ">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="#">Navbar</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active m-2 btn btn-primary text-light" aria-current="page" to='/admin'>Dashbord</Link>
//         </li>
//         <li className="nav-item">
//           <Link  className="nav-link active m-2 btn btn-primary text-light" to='/admin/Architecturelist'>Project</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active m-2 btn btn-primary text-light" to="/admin/contactlist">Contact</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active m-2 btn btn-primary text-light" to="#">About Us</Link>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>


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



    )
}   
export default Dashboard;