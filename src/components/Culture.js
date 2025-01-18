import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const Culture = () => {
  const [projects, setProjects] = useState([]);

  const find_architecture = () => {
    fetch(`${apiUrl}/find_architecture`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Users found") {
          const filteredData = data.data.filter(
            (item) => item.Category === "Culture"
          );
          const uniqueProjects = removeDuplicates(filteredData);
          setProjects(uniqueProjects);
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  const removeDuplicates = (projects) => {
    const uniqueProjects = [];
    const projectNames = new Set();

    const groupedProjects = projects.reduce((acc, project) => {
      if (!acc[project.Projectname]) {
        acc[project.Projectname] = [];
      }
      acc[project.Projectname].push(project);
      return acc;
    }, {});

    Object.keys(groupedProjects).forEach((name) => {
      const group = groupedProjects[name];
      const randomProject = group[Math.floor(Math.random() * group.length)];
      const randomImage = randomProject.img;

      group.forEach((project) => {
        project.randomImage = randomImage;
        if (!projectNames.has(project.Projectname)) {
          uniqueProjects.push(project);
          projectNames.add(project.Projectname);
        }
      });
    });

    return uniqueProjects;
  };

  useEffect(() => {
    find_architecture();
  }, []);

  const handleCardClick = (projectName) => {
    // Open the page with all images for the project in a new tab
    window.open(`/project-images/${projectName}`);
  };

  return (
    <>
      <div className="container categry_nav py-3">
        {/* For smaller screens: Scrollable Navigation */}
        <div className="d-flex flex-nowrap overflow-auto d-lg-none" style={{ whiteSpace: "nowrap" }}>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/township">Master Planning / Township</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/housing-projects">Housing Projects</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/office-building">Office Building</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/retail&entertainment">Retail & Entertainment</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/private-houses">Private Houses</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/education">Education</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/culture">Culture</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/hospitality">Hospitality</Link>
          <Link className="mx-2 text-dark text-decoration-none" to="/architeecture/villas">Villas</Link>
        </div>

        {/* For larger screens: Regular Menu */}
        <div className="d-none d-lg-flex justify-content-center">
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/township">Master Planning / Township</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/housing-projects">Housing Projects</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/office-building">Office Building</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/retail&entertainment">Retail & Entertainment</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/private-houses">Private Houses</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/education">Education</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/culture">Culture</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/hospitality">Hospitality</Link>
          <Link className="mx-3 text-dark text-decoration-none" to="/architeecture/villas">Villas</Link>
        </div>
      </div>

        <div className="container text-center py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((proj, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm" onClick={() => handleCardClick(proj.Projectname)}>
                  <img
                    src={`${apiUrl}/uploads/${proj.randomImage || proj.img}`}
                    alt={proj.Projectname}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{proj.Projectname}</h6>
                    <p className="card-text">{proj.Location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
};

export default Culture;