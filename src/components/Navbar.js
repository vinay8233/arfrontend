import { Link } from "react-router-dom";



const Navbar = () => {



    return (
      

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="#">
      Navbar
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
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item m-2">
          <Link className="nav-link active text-dark fw-semibold" aria-current="page" to="#">
            HOME
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link text-dark fw-semibold" to="/aboutus">
            ABOUT US
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link text-dark fw-semibold" to="/architecture">
            ARCHITECTURE
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link text-dark fw-semibold" to="/interior">
            INTERIOR
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link text-dark fw-semibold" to="#">
            PUBLICATION
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link className="nav-link text-dark fw-semibold" to="/Contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    )
}   
export default Navbar;