



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

const Township = () => {

  const [rasimage, setRasimage] = useState(null);
  const [studio90image, setStudio90image] = useState(null);
  const [thepearlimage, setThepearlimage] = useState(null);
  const [shreetownimage, setShreetownimage] = useState(null);
  const [rustomjeeimage, setRustomjeeimage] = useState(null);
  const [montenegroimage, setMontenegroimage] = useState(null);

  const find_architecture = () => {
    fetch(`${apiUrl}/find_architecture`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "ras township");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRasimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "studios 90");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setStudio90image(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "the pearl");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setThepearlimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "shree town");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setShreetownimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "evershine rustomjee global city");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRustomjeeimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "montenegro");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setMontenegroimage(filteredData[randomIndex]);
          }
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    find_architecture();
  }, []);

  return (
    <>
      {/* <div className="container categry_nav">
        <Link className="architecture_categry_nav_link" to="/architeecture/township">
          Master Planning / Township
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/housing-projects">
          Housing Projects
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/office-building">
          Office Building
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/retail&entertainment">
          Retail & Entertainment
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/private-houses">
          Private Houses
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/education">
          Education
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/culture">
          Culture
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/hospitality">
          Hospitality
        </Link>
        <Link className="architecture_categry_nav_link" to="/architeecture/villas">
          Villas
        </Link>
      </div> */}

      {/* <div className="container categry_nav py-3">
  <div
    className="d-flex flex-nowrap overflow-auto"
    style={{ whiteSpace: "nowrap" }}
  >
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/township"
    >
      Master Planning / Township
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/housing-projects"
    >
      Housing Projects
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/office-building"
    >
      Office Building
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/retail&entertainment"
    >
      Retail & Entertainment
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/private-houses"
    >
      Private Houses
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/education"
    >
      Education
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/culture"
    >
      Culture
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/hospitality"
    >
      Hospitality
    </Link>
    <Link
      className="btn btn-outline-primary mx-2 architecture_categry_nav_link"
      to="/architeecture/villas"
    >
      Villas
    </Link>
  </div>
</div> */}

      <div className="container categry_nav py-3">
        {/* For smaller screens: Scrollable Navigation */}
        <div
          className="d-flex flex-nowrap overflow-auto d-lg-none"
          style={{ whiteSpace: "nowrap" }}
        >
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/township"
          >
            Master Planning / Township
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/housing-projects"
          >
            Housing Projects
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/office-building"
          >
            Office Building
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/retail&entertainment"
          >
            Retail & Entertainment
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/private-houses"
          >
            Private Houses
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/education"
          >
            Education
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/culture"
          >
            Culture
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/hospitality"
          >
            Hospitality
          </Link>
          <Link
            className="mx-2 text-dark text-decoration-none"
            to="/architeecture/villas"
          >
            Villas
          </Link>
        </div>

        {/* For larger screens: Regular Menu */}
        <div className="d-none d-lg-flex justify-content-center">
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/township"
          >
            Master Planning / Township
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/housing-projects"
          >
            Housing Projects
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/office-building"
          >
            Office Building
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/retail&entertainment"
          >
            Retail & Entertainment
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/private-houses"
          >
            Private Houses
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/education"
          >
            Education
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/culture"
          >
            Culture
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/hospitality"
          >
            Hospitality
          </Link>
          <Link
            className="mx-3 text-dark text-decoration-none"
            to="/architeecture/villas"
          >
            Villas
          </Link>
        </div>
      </div>







      <div className="container text-center py-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Ras Township */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/township/ras-township" className="text-decoration-none text-dark">
                {rasimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${rasimage.img}`}
                      alt="Ras Township"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{rasimage.Projectname}</h6>
                      <p className="card-text">{rasimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Studios 90 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/township/Studios-90" className="text-decoration-none text-dark">
                {studio90image && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${studio90image.img}`}
                      alt="Studios 90"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{studio90image.Projectname}</h6>
                      <p className="card-text">{studio90image.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* The Perl */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/township/the-perl" className="text-decoration-none text-dark">
                {thepearlimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${thepearlimage.img}`}
                      alt="The Perl"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{thepearlimage.Projectname}</h6>
                      <p className="card-text">{thepearlimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Shree Town */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/township/shreetown" className="text-decoration-none text-dark">
                {shreetownimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${shreetownimage.img}`}
                      alt="Shree Town"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{shreetownimage.Projectname}</h6>
                      <p className="card-text">{shreetownimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Evershine Rustomjee Global City */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link
                to="/architeecture/township/evershine-rustomjee-global-city"
                className="text-decoration-none text-dark"
              >
                {rustomjeeimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${rustomjeeimage.img}`}
                      alt="Evershine Rustomjee Global City"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{rustomjeeimage.Projectname}</h6>
                      <p className="card-text">{rustomjeeimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Montenegro */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/township/montenegro" className="text-decoration-none text-dark">
                {montenegroimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${montenegroimage.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{montenegroimage.Projectname}</h6>
                      <p className="card-text">{montenegroimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Township;

