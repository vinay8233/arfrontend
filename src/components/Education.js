import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const Education = () => {

    const [rajasthanschoolimage, setRajasthanschoolimage] = useState(null);
          const [streetimage, setStreetimage] = useState(null);
          const [prestigeuniversityimage, setPrestigeuniversityimage] = useState(null);
          const [hitkarniuniversityimage, setHitkarniuniversityimage] = useState(null);
          const [learningcurvesimage, setLearningcurvesimage] = useState(null);
          const [learningcourtyardimage, setLearningcourtyardimage] = useState(null);
        
          const [courtyardschoolimage, setCourtyardschoolimage] = useState(null);
          const [nokhavillageschoolimage, setNokhavillageschoolimage] = useState(null);
          
        
          const find_architecture = () => {
            fetch(`${apiUrl}/find_architecture`)
              .then((res) => res.json())
              .then((data) => {
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "the rajasthan school");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setRajasthanschoolimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "the street");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setStreetimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "prestige university");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setPrestigeuniversityimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "hitkarni university");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setHitkarniuniversityimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "learning curves");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setLearningcurvesimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "learning courtyard");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setLearningcourtyardimage(filteredData[randomIndex]);
                  }
                }
        
        
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "the courtyard school");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setCourtyardschoolimage(filteredData[randomIndex]);
                  }
                }
                if (data.message === "Users found") {
                  const filteredData = data.data.filter((item) => item.Projectname === "nokha village school");
        
                  if (filteredData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredData.length);
                    setNokhavillageschoolimage(filteredData[randomIndex]);
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
                        {/* The Rajasthan School */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/the-rajasthan-school" className="text-decoration-none text-dark">
                              {rajasthanschoolimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${rajasthanschoolimage.img}`}
                                    alt="Studios 90"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{rajasthanschoolimage.Projectname}</h6>
                                    <p className="card-text">{rajasthanschoolimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
                        {/*The street */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/the-street" className="text-decoration-none text-dark">
                              {streetimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${streetimage.img}`}
                                    alt="Ras Township"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{streetimage.Projectname}</h6>
                                    <p className="card-text">{streetimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
              
              
                        {/* Prestige University */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/prestige-university" className="text-decoration-none text-dark">
                              {prestigeuniversityimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${prestigeuniversityimage.img}`}
                                    alt="The Perl"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{prestigeuniversityimage.Projectname}</h6>
                                    <p className="card-text">{prestigeuniversityimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
                        {/* Hitkarni University */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/hitkarni-university" className="text-decoration-none text-dark">
                              {hitkarniuniversityimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${hitkarniuniversityimage.img}`}
                                    alt="Shree Town"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{hitkarniuniversityimage.Projectname}</h6>
                                    <p className="card-text">{hitkarniuniversityimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
                        {/* Learning Curves */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link
                              to="/architeecture/education/learning-curve"
                              className="text-decoration-none text-dark"
                            >
                              {learningcurvesimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${learningcurvesimage.img}`}
                                    alt="Evershine Rustomjee Global City"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{learningcurvesimage.Projectname}</h6>
                                    <p className="card-text">{learningcurvesimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
                        {/* Learning Courtyard */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/learning-courtyard" className="text-decoration-none text-dark">
                              {learningcourtyardimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${learningcourtyardimage.img}`}
                                    alt="Montenegro"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{learningcourtyardimage.Projectname}</h6>
                                    <p className="card-text">{learningcourtyardimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
              
                        {/* The Courtyard School*/}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/the-courtyard-school" className="text-decoration-none text-dark">
                              {courtyardschoolimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${courtyardschoolimage.img}`}
                                    alt="Montenegro"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{courtyardschoolimage.Projectname}</h6>
                                    <p className="card-text">{courtyardschoolimage.Location}</p>
                                  </div>
                                </>
                              )}
                            </Link>
                          </div>
                        </div>
              
                        {/* Nokha Village School */}
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/education/nokha-village-school" className="text-decoration-none text-dark">
                              {nokhavillageschoolimage && (
                                <>
                                  <img
                                    src={`${apiUrl}/uploads/${nokhavillageschoolimage.img}`}
                                    alt="Montenegro"
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                  />
                                  <div className="card-body">
                                    <h6 className="card-title">{nokhavillageschoolimage.Projectname}</h6>
                                    <p className="card-text">{nokhavillageschoolimage.Location}</p>
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

export default Education;