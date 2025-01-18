import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const AboutAwards = () => {

    const [awardsname, setAwardsname] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [place, setPlace] = React.useState('');
    const [year, setYear] = React.useState('');
    const [img, setImg] = React.useState('');
    const [awardslist, setAwardslist] = React.useState([])


    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("awardsname", awardsname); // Ensure consistency
      formData.append("location", location);
      formData.append("place", place);
      formData.append("year", year);
      formData.append("img", img);
    
      fetch(`${apiUrl}/add_awards`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            console.log("Success:", data);
            find_awards(); // Refresh the awards list
            setAwardsname(data.awardslist)
            setLocation(data.location)
            setPlace(data.place)
            setYear(data.year)
            
          }
          resetForm();
        })
        .catch((err) => console.error("Error:", err));
    };
    


    const find_awards = () => {
      fetch(`${apiUrl}/find_awards`)
        .then((res) => res.json())
        .then((data) => {
          setAwardslist(data.data || []);
        })
        .catch((err) => console.error("Error:", err));
    };



     const resetForm = () => {
      setAwardsname('');
        setLocation('');
        setPlace('');
        setYear('');
        setImg('');
      };
    
      useEffect(() => {
        find_awards()
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
                to="#"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <div className="container mt-4">
  <div className="row g-4">
    {/* Awards List Section */}
    <div className="col-lg-8">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="fw-bold mb-0">Awards List</h3>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Award Name</th>
                <th>Year</th>
                <th>Place</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {awardslist.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`${apiUrl}/uploads/${item.Img}`}
                      alt="award"
                      className="img-thumbnail"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.Awardsname}</td>
                  <td>{item.Year}</td>
                  <td>{item.Place}</td>
                  <td>{item.Location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Add New Award Form */}
    <div className="col-lg-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="fw-bold mb-0">Add New Award</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="award" className="form-label">
                Award Name
              </label>
              <input
                type="text"
                id="award"
                className="form-control"
                value={awardsname}
                onChange={(e) => setAwardsname(e.target.value)}
                placeholder="Enter award name"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="text"
                id="year"
                className="form-control"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter year"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="img" className="form-label">
                Image
              </label>
              <input
                type="file"
                id="img"
                className="form-control"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="place" className="form-label">
                Place
              </label>
              <input
                type="text"
                id="place"
                className="form-control"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Enter place"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    );
};

export default AboutAwards;