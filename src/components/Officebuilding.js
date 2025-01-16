import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const OfficeBuilding = () => {
    const [akshaya27image, setAkshaya27image] = useState(null);
      const [infosyssoftwareimage, setInfosyssoftwareimage] = useState(null);
      const [kalpatarusynergyimage, setKalpatarusynergyimage] = useState(null);
      const [stellarimage, setStellarimage] = useState(null);
      const [silvermetropolisimage, setSilvermetropolisimage] = useState(null);
      const [emamigroupimage, setEmamigroupimage] = useState(null);
    
      const [screensimage, setScreensimage] = useState(null);
      const [courtyardsofficeimage, setCourtyardsofficeimage] = useState(null);
      const [interstellarimage, setInterstellarimage] = useState(null);
      const [melloraimage, setMelloraimage] = useState(null);

      const [stellaimage, setStellaimage] = useState(null);
      const [mahimaimage, setMahimaimage] = useState(null);
    
      const find_architecture = () => {
        fetch(`${apiUrl}/find_architecture`)
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "akshaya 27");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setAkshaya27image(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "infosys software development building");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setInfosyssoftwareimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "kalpataru synergy");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setKalpatarusynergyimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "stellar");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setStellarimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "silver metropolis");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setSilvermetropolisimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "emami group");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setEmamigroupimage(filteredData[randomIndex]);
              }
            }
    
    
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "72 screens");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setScreensimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "the courtyards office");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setCourtyardsofficeimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "interstellar");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setInterstellarimage(filteredData[randomIndex]);
              }
            }
            if (data.message === "Users found") {
              const filteredData = data.data.filter((item) => item.Projectname === "mellora");
    
              if (filteredData.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredData.length);
                setMelloraimage(filteredData[randomIndex]);
              }
            }


            if (data.message === "Users found") {
                const filteredData = data.data.filter((item) => item.Projectname === "stella");
      
                if (filteredData.length > 0) {
                  const randomIndex = Math.floor(Math.random() * filteredData.length);
                  setStellaimage(filteredData[randomIndex]);
                }
              }
              if (data.message === "Users found") {
                const filteredData = data.data.filter((item) => item.Projectname === "mahima");
      
                if (filteredData.length > 0) {
                  const randomIndex = Math.floor(Math.random() * filteredData.length);
                  setMahimaimage(filteredData[randomIndex]);
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
                            {/* AKSHAYA 27 */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/akshay27" className="text-decoration-none text-dark">
                                  {akshaya27image && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${akshaya27image.img}`}
                                        alt="Studios 90"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{akshaya27image.Projectname}</h6>
                                        <p className="card-text">{akshaya27image.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                            {/* Infosys Software Development Building */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/infosys" className="text-decoration-none text-dark">
                                  {infosyssoftwareimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${infosyssoftwareimage.img}`}
                                        alt="Ras Township"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{infosyssoftwareimage.Projectname}</h6>
                                        <p className="card-text">{infosyssoftwareimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                  
                  
                            {/* Kalpataru Synergy */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/Kalpataru-synergy" className="text-decoration-none text-dark">
                                  {kalpatarusynergyimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${kalpatarusynergyimage.img}`}
                                        alt="The Perl"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{kalpatarusynergyimage.Projectname}</h6>
                                        <p className="card-text">{kalpatarusynergyimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                            {/* Stellar */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/stellar" className="text-decoration-none text-dark">
                                  {stellarimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${stellarimage.img}`}
                                        alt="Shree Town"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{stellarimage.Projectname}</h6>
                                        <p className="card-text">{stellarimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                            {/* Silver Metropolis */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link
                                  to="/architeecture/office-building/silver-metropolis"
                                  className="text-decoration-none text-dark"
                                >
                                  {silvermetropolisimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${silvermetropolisimage.img}`}
                                        alt="Evershine Rustomjee Global City"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{silvermetropolisimage.Projectname}</h6>
                                        <p className="card-text">{silvermetropolisimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                    
                            {/* Emami Group */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/emami-group" className="text-decoration-none text-dark">
                                  {emamigroupimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${emamigroupimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{emamigroupimage.Projectname}</h6>
                                        <p className="card-text">{emamigroupimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                  
                            {/*72 Screens*/}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/72-screens" className="text-decoration-none text-dark">
                                  {screensimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${screensimage.img}`}
                                        alt="Montenegro"
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
                  
                            {/* THE COURTYARDS OFFICE */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/the-courtyads-office" className="text-decoration-none text-dark">
                                  {courtyardsofficeimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${courtyardsofficeimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{courtyardsofficeimage.Projectname}</h6>
                                        <p className="card-text">{courtyardsofficeimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                            {/* Interstellar */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/interstellar" className="text-decoration-none text-dark">
                                  {interstellarimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${interstellarimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{interstellarimage.Projectname}</h6>
                                        <p className="card-text">{interstellarimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                            {/* Mellora */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/mellora" className="text-decoration-none text-dark">
                                  {melloraimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${melloraimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{melloraimage.Projectname}</h6>
                                        <p className="card-text">{melloraimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                         


                         {/* Stella  */}
                         <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/Stella" className="text-decoration-none text-dark">
                                  {stellaimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${stellaimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{stellaimage.Projectname}</h6>
                                        <p className="card-text">{stellaimage.Location}</p>
                                      </div>
                                    </>
                                  )}
                                </Link>
                              </div>
                            </div>
                  
                            {/* Mahima */}
                            <div className="col">
                              <div className="card h-100 border-0 shadow-sm">
                                <Link to="/architeecture/office-building/mahima" className="text-decoration-none text-dark">
                                  {mahimaimage && (
                                    <>
                                      <img
                                        src={`${apiUrl}/uploads/${mahimaimage.img}`}
                                        alt="Montenegro"
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                      />
                                      <div className="card-body">
                                        <h6 className="card-title">{mahimaimage.Projectname}</h6>
                                        <p className="card-text">{mahimaimage.Location}</p>
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

export default OfficeBuilding;