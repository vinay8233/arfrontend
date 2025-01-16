
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const Interior = () => {
  // const [interiorcategry, setInteriorcategry] = useState([]);

  // const find_interior_categry = () => {
  //   fetch(`${apiUrl}/find_interior_categry`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInteriorcategry(data.data || []); // Ensure data is an array
  //     })
  //     .catch((err) => console.error("Error:", err));
  // };

  // useEffect(() => {
  //   find_interior_categry();
  // }, []);

  return (
    <>
      {/* <div className="categry_nav container text-center">
        {interiorcategry.map((item, index) => (
          <Link to="#" key={index} className="categry_nav_link">
            {item.Name}
          </Link>
        ))}
      </div> */}

      <div className="container categry_nav py-3">
              {/* For smaller screens: Scrollable Navigation */}
              <div
                className="d-flex flex-nowrap overflow-auto d-lg-none"
                style={{ whiteSpace: "nowrap" }}
              >
                <Link
                  className="mx-2 text-dark text-decoration-none"
                  to="#">
                 Residential

                </Link>
                <Link
                  className="mx-2 text-dark text-decoration-none"
                  to="#"
                >
                 Offices
                </Link>
                <Link
                  className="mx-2 text-dark text-decoration-none"
                  to="#"
                >
                  Retail
                </Link>
                <Link
                  className="mx-2 text-dark text-decoration-none"
                  to="#" >
                  Installations
                </Link>
                
              </div>
      
              {/* For larger screens: Regular Menu */}
              <div className="d-none d-lg-flex justify-content-center">
                <Link
                  className="mx-3 text-dark text-decoration-none"
                  to="#"
                >
                  Residential

                </Link>
                <Link
                  className="mx-3 text-dark text-decoration-none"
                  to="#"
                >
                  Offices
                </Link>
                <Link
                  className="mx-3 text-dark text-decoration-none"
                  to="#"
                >
                  Retail
                </Link>
                <Link
                  className="mx-3 text-dark text-decoration-none"
                  to="#"
                >
                  Installations
                </Link>
                              </div>
            </div>
    </>
    
  );
};

export default Interior;
