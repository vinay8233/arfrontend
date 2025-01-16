

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const Housingproject = () => {

  const [evosalchemyimage, setEvosalchemyimage] = useState(null);
  const [studio90image, setStudio90image] = useState(null);
  const [panache99image, setPanache99image] = useState(null);
  const [lodhafiorenzaimage, setLodhafiorenzaimage] = useState(null);
  const [excellenseaaimage, setExcellenseaaimage] = useState(null);
  const [ishatvam9image, setIshatvam9image] = useState(null);

  const [kalpataruimage, setKalpataruimage] = useState(null);
  const [rustomjeeelanzaimage, setRustomjeeelanzaimage] = useState(null);
  const [rustomjeeorianaimage, setRustomjeeorianaimage] = useState(null);
  const [siliguriimage, setSiliguriimage] = useState(null);

  const find_architecture = () => {
    fetch(`${apiUrl}/find_architecture`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "evos alchemy");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setEvosalchemyimage(filteredData[randomIndex]);
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
          const filteredData = data.data.filter((item) => item.Projectname === "panache 99");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setPanache99image(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "lodha fiorenza");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setLodhafiorenzaimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "excellenseaa 126 by happy homes");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setExcellenseaaimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "ishatvam 9");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setIshatvam9image(filteredData[randomIndex]);
          }
        }


        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "kalpataru horizon");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setKalpataruimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "rustomjee elanza");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRustomjeeelanzaimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "rustomjee oriana");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRustomjeeorianaimage(filteredData[randomIndex]);
          }
        }
        if (data.message === "Users found") {
          const filteredData = data.data.filter((item) => item.Projectname === "siliguri");

          if (filteredData.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setSiliguriimage(filteredData[randomIndex]);
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
          {/* Evos Alchemy */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/evosalchemy" className="text-decoration-none text-dark">
                {evosalchemyimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${evosalchemyimage.img}`}
                      alt="Ras Township"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{evosalchemyimage.Projectname}</h6>
                      <p className="card-text">{evosalchemyimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>



          {/* Panache 99 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/panache" className="text-decoration-none text-dark">
                {panache99image && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${panache99image.img}`}
                      alt="The Perl"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{panache99image.Projectname}</h6>
                      <p className="card-text">{panache99image.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Lodha Fiorenza */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/lodha" className="text-decoration-none text-dark">
                {lodhafiorenzaimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${lodhafiorenzaimage.img}`}
                      alt="Shree Town"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{lodhafiorenzaimage.Projectname}</h6>
                      <p className="card-text">{lodhafiorenzaimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* EXCELLENSEAA 126 BY HAPPY HOMES */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link
                to="/architeecture/housing-projects/excellenseaa"
                className="text-decoration-none text-dark"
              >
                {excellenseaaimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${excellenseaaimage.img}`}
                      alt="Evershine Rustomjee Global City"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{excellenseaaimage.Projectname}</h6>
                      <p className="card-text">{excellenseaaimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Ishatvam 9 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/ishatvam-9" className="text-decoration-none text-dark">
                {ishatvam9image && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${ishatvam9image.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{ishatvam9image.Projectname}</h6>
                      <p className="card-text">{ishatvam9image.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>


          {/* Kalpataru Horizon */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/kalpataru-horizon" className="text-decoration-none text-dark">
                {kalpataruimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${kalpataruimage.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{kalpataruimage.Projectname}</h6>
                      <p className="card-text">{kalpataruimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Rustomjee Elanza */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/rustomjee-elenza" className="text-decoration-none text-dark">
                {rustomjeeelanzaimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${rustomjeeelanzaimage.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{rustomjeeelanzaimage.Projectname}</h6>
                      <p className="card-text">{rustomjeeelanzaimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Rustomjee Oriana, */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/rustomjee-oriana" className="text-decoration-none text-dark">
                {rustomjeeorianaimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${rustomjeeorianaimage.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{rustomjeeorianaimage.Projectname}</h6>
                      <p className="card-text">{rustomjeeorianaimage.Location}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>
          </div>

          {/* Siliguri */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <Link to="/architeecture/housing-projects/siliguri" className="text-decoration-none text-dark">
                {siliguriimage && (
                  <>
                    <img
                      src={`${apiUrl}/uploads/${siliguriimage.img}`}
                      alt="Montenegro"
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{siliguriimage.Projectname}</h6>
                      <p className="card-text">{siliguriimage.Location}</p>
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

export default Housingproject;
