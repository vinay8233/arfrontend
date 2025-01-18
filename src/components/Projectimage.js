import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;



const ProjectImages = () => {
    const { projectName } = useParams();
    const [projectImages, setProjectImages] = useState([]);
  
    const findProjectImages = () => {
      fetch(`${apiUrl}/find_architecture`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data); 
          if (data.message === "Users found") {
            const projectData = data.data.filter(
              (item) => item.Projectname.toLowerCase() === projectName.toLowerCase()
            );
            setProjectImages(projectData);
          }
        })
        .catch((err) => console.error("Error:", err));
    };
  
    useEffect(() => {
      findProjectImages();
    }, [projectName]);
  
    return (
      <div className="container py-4">
        <h2 className="text-center">Images for {projectName}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectImages.length > 0 ? (
            projectImages.map((proj, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={`${apiUrl}/uploads/${proj.img}`}
                    alt={proj.Projectname}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                    onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} // Fallback image
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No images available for this project.</p>
          )}
        </div>
      </div>
    );
  };
  

export default ProjectImages;
