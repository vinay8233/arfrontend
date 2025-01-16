import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const Culture = () => {

     const [iskcontempleimage, setIskcontempleimage] = useState(null);
          const [shivatempleimage, setShivatempleimage] = useState(null);
          const [shivamuseumimage, setShivamuseumimage] = useState(null);
          const [theguildimage, setTheguildimage] = useState(null);
          const [chapelimage, setChapelimage] = useState(null);
          const [bombayartsimage, setBombayartsimage] = useState(null);
        
          const [conventioncenterimage, setConventioncenterimage] = useState(null);
          const [asianartmuseumimage, setAsianartmuseumimage] = useState(null);
          const [nokhavillageimage, setNokhavillageimage] = useState(null);
        
          const find_architecture = () => {
            fetch(`${apiUrl}/find_architecture`)
              .then((res) => res.json())
              .then((data) => {
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "iskcon temple");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setIskcontempleimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "shiva temple");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setShivatempleimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "shiva museum");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setShivamuseumimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "the guild");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setTheguildimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "bombay arts society");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setBombayartsimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "chapel at murcia");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setChapelimage(filteredData[randomIndex]);
                  }
                }
        
        
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "convention center");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setConventioncenterimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "asian art museum");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setAsianartmuseumimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "nokha village community centre");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setNokhavillageimage(filteredData[randomIndex]);
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
                      {/* Iskcon Temple */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/iskcon-temple" className="text-decoration-none text-dark">
                            {iskcontempleimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${iskcontempleimage.img}`}
                                  alt="Studios 90"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{iskcontempleimage.Projectname}</h6>
                                  <p className="card-text">{iskcontempleimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
                      {/* Shiva Temple */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/shiva-temple" className="text-decoration-none text-dark">
                            {shivatempleimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${shivatempleimage.img}`}
                                  alt="Ras Township"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{shivatempleimage.Projectname}</h6>
                                  <p className="card-text">{shivatempleimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
            
            
                      {/* Shiva Museum */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/shiva-museum" className="text-decoration-none text-dark">
                            {shivamuseumimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${shivamuseumimage.img}`}
                                  alt="The Perl"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{shivamuseumimage.Projectname}</h6>
                                  <p className="card-text">{shivamuseumimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>

                        {/* The Guild */}
                        <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/the-guild" className="text-decoration-none text-dark">
                            {theguildimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${theguildimage.img}`}
                                  alt="Montenegro"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{theguildimage.Projectname}</h6>
                                  <p className="card-text">{theguildimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
                      {/*Bombay Arts Society */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/bombay-arts-society" className="text-decoration-none text-dark">
                            {bombayartsimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${bombayartsimage.img}`}
                                  alt="Shree Town"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{bombayartsimage.Projectname}</h6>
                                  <p className="card-text">{bombayartsimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
                      {/* Chapel at Murcia */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link
                            to="/architeecture/private-houses/baroda-house"
                            className="text-decoration-none text-dark"
                          >
                            {chapelimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${chapelimage.img}`}
                                  alt="Evershine Rustomjee Global City"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{chapelimage.Projectname}</h6>
                                  <p className="card-text">{chapelimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
                      {/* Convention Center */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/Convention-center" className="text-decoration-none text-dark">
                            {conventioncenterimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${conventioncenterimage.img}`}
                                  alt="Montenegro"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{conventioncenterimage.Projectname}</h6>
                                  <p className="card-text">{conventioncenterimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
            
                      {/* Asian Art Museum*/}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/culture/asian-art-museum" className="text-decoration-none text-dark">
                            {asianartmuseumimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${asianartmuseumimage.img}`}
                                  alt="Montenegro"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{asianartmuseumimage.Projectname}</h6>
                                  <p className="card-text">{asianartmuseumimage.Location}</p>
                                </div>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
            
                      {/* Nokha Village Community Centre */}
                      <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                          <Link to="/architeecture/private-houses/raipur-house" className="text-decoration-none text-dark">
                            {nokhavillageimage && (
                              <>
                                <img
                                  src={`${apiUrl}/uploads/${nokhavillageimage.img}`}
                                  alt="Montenegro"
                                  className="card-img-top"
                                  style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{nokhavillageimage.Projectname}</h6>
                                  <p className="card-text">{nokhavillageimage.Location}</p>
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

export default Culture;