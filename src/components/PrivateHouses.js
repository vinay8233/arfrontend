import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const PrivateHouses = () => {

    const [courtyardsimage, setCourtyardsimage] = useState(null);
      const [origamihouseimage, setOrigamihouseimage] = useState(null);
      const [screensimage, setScreensimage] = useState(null);
      const [fluidurbanhouseimage, setFluidurbanhouseimage] = useState(null);
      const [barodahouseimage, setBarodahouseimage] = useState(null);
      const [zenspacesimage, setZenspacesimage] = useState(null);
    
      const [miraihouseimage, setMiraihouseimage] = useState(null);
      const [raipurhouseimage, setRaipurhouseimage] = useState(null);
      const [narsigharimage, setNarsigharimage] = useState(null);
    
      const find_architecture = () => {
        fetch(`${apiUrl}/find_architecture`)
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "the courtyards house");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setCourtyardsimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "origami house");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setOrigamihouseimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "18 screens");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setScreensimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "fluid urban house");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setFluidurbanhouseimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "baroda house");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setBarodahouseimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "zen spaces");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setZenspacesimage(filteredData[randomIndex]);
              }
            }
    
    
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "mirai house of arches");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setMiraihouseimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "raipur house");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setRaipurhouseimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "narsighar");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setNarsigharimage(filteredData[randomIndex]);
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
                {/* The Courtyards House */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/the-courtyards-house" className="text-decoration-none text-dark">
                      {courtyardsimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${courtyardsimage.img}`}
                            alt="Studios 90"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{courtyardsimage.Projectname}</h6>
                            <p className="card-text">{courtyardsimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
                {/* Origami House */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/origami-house" className="text-decoration-none text-dark">
                      {origamihouseimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${origamihouseimage.img}`}
                            alt="Ras Township"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{origamihouseimage.Projectname}</h6>
                            <p className="card-text">{origamihouseimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
      
      
                {/* 18 Screens */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/18-screens" className="text-decoration-none text-dark">
                      {screensimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${screensimage.img}`}
                            alt="The Perl"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{screensimage.Projectname}</h6>
                            <p className="card-text">{screensimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
                {/* Fluid Urban House */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/fluid-urban-house" className="text-decoration-none text-dark">
                      {fluidurbanhouseimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${fluidurbanhouseimage.img}`}
                            alt="Shree Town"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{fluidurbanhouseimage.Projectname}</h6>
                            <p className="card-text">{fluidurbanhouseimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
                {/* Baroda House */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link
                      to="/architeecture/private-houses/baroda-house"
                      className="text-decoration-none text-dark"
                    >
                      {barodahouseimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${barodahouseimage.img}`}
                            alt="Evershine Rustomjee Global City"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{barodahouseimage.Projectname}</h6>
                            <p className="card-text">{barodahouseimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
                {/* ZEN SPACES*/}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/zen-sapce" className="text-decoration-none text-dark">
                      {zenspacesimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${zenspacesimage.img}`}
                            alt="Montenegro"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{zenspacesimage.Projectname}</h6>
                            <p className="card-text">{zenspacesimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
      
                {/* Mirai House of Arches */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/mirai-house-of-arches" className="text-decoration-none text-dark">
                      {miraihouseimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${miraihouseimage.img}`}
                            alt="Montenegro"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{miraihouseimage.Projectname}</h6>
                            <p className="card-text">{miraihouseimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
                {/* Raipur House */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/raipur-house" className="text-decoration-none text-dark">
                      {raipurhouseimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${raipurhouseimage.img}`}
                            alt="Montenegro"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{raipurhouseimage.Projectname}</h6>
                            <p className="card-text">{raipurhouseimage.Location}</p>
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
      
                {/* Narsighar */}
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <Link to="/architeecture/private-houses/narsighar" className="text-decoration-none text-dark">
                      {narsigharimage && (
                        <>
                          <img
                            src={`${apiUrl}/uploads/${narsigharimage.img}`}
                            alt="Montenegro"
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{narsigharimage.Projectname}</h6>
                            <p className="card-text">{narsigharimage.Location}</p>
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

export default PrivateHouses;