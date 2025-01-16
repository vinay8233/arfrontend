import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const Entertainment = () => {
    const [suburbiaclubimage, setSuburbiaclubimage] = useState(null);
    const [streetsimage, setStreetsimage] = useState(null);
    const [happybenchmarkimage, setHappybenchmarkimage] = useState(null);
    const [triosemallimage, setTriosemallimage] = useState(null);
    const [rasclubimage, setRasclubimage] = useState(null);
    const [nirvana63image, setNirvana63image] = useState(null);

    const [emamiclubimage, setEmamiclubimage] = useState(null);

    const find_architecture = () => {
        fetch(`${apiUrl}/find_architecture`)
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "suburbia club");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setSuburbiaclubimage(filteredData[randomIndex]);
                    }
                }
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "9 streets");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setStreetsimage(filteredData[randomIndex]);
                    }
                }
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "happy benchmark");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setHappybenchmarkimage(filteredData[randomIndex]);
                    }
                }
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "triose mall");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setTriosemallimage(filteredData[randomIndex]);
                    }
                }
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "ras club");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setRasclubimage(filteredData[randomIndex]);
                    }
                }
                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "nirvana 63");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setNirvana63image(filteredData[randomIndex]);
                    }
                }


                if (data.message === "Users found") {
                    const filteredData = data.data.filter((item) => item.Projectname === "emami club");

                    if (filteredData.length > 0) {
                        const randomIndex = Math.floor(Math.random() * filteredData.length);
                        setEmamiclubimage(filteredData[randomIndex]);
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
                    {/* Suburbia Club */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/retail&entertainmen/suburbia" className="text-decoration-none text-dark">
                                {suburbiaclubimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${suburbiaclubimage.img}`}
                                            alt="Studios 90"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{suburbiaclubimage.Projectname}</h6>
                                            <p className="card-text">{suburbiaclubimage.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>
                    {/* 9 Streets */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/retail&entertainmen/streets" className="text-decoration-none text-dark">
                                {streetsimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${streetsimage.img}`}
                                            alt="Ras Township"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{streetsimage.Projectname}</h6>
                                            <p className="card-text">{streetsimage.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>



                    {/* Happy Benchmark */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/retail&entertainmen/happy-benchmark" className="text-decoration-none text-dark">
                                {happybenchmarkimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${happybenchmarkimage.img}`}
                                            alt="The Perl"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{happybenchmarkimage.Projectname}</h6>
                                            <p className="card-text">{happybenchmarkimage.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Triose Mall */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/retail&entertainmen/triose-mall" className="text-decoration-none text-dark">
                                {triosemallimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${triosemallimage.img}`}
                                            alt="Shree Town"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{triosemallimage.Projectname}</h6>
                                            <p className="card-text">{triosemallimage.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Ras Club */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link
                                to="/architeecture/retail&entertainmen/ras-club"
                                className="text-decoration-none text-dark"
                            >
                                {rasclubimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${rasclubimage.img}`}
                                            alt="Evershine Rustomjee Global City"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{rasclubimage.Projectname}</h6>
                                            <p className="card-text">{rasclubimage.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Nirvana 63 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/retail&entertainmen/nirvana-63" className="text-decoration-none text-dark">
                                {nirvana63image && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${nirvana63image.img}`}
                                            alt="Montenegro"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{nirvana63image.Projectname}</h6>
                                            <p className="card-text">{nirvana63image.Location}</p>
                                        </div>
                                    </>
                                )}
                            </Link>
                        </div>
                    </div>


                    {/* Emami Club */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <Link to="/architeecture/office-building/72-screens" className="text-decoration-none text-dark">
                                {emamiclubimage && (
                                    <>
                                        <img
                                            src={`${apiUrl}/uploads/${emamiclubimage.img}`}
                                            alt="Montenegro"
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{emamiclubimage.Projectname}</h6>
                                            <p className="card-text">{emamiclubimage.Location}</p>
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

export default Entertainment;