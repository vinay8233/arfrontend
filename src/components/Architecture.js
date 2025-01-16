// import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';

// const apiUrl = process.env.REACT_APP_API_URL;


// const Architecture = () => {

//     const [categrylist, setCategrylist] = useState([]); 

    



//      const find_architecture_category = () => {

//         fetch(`${apiUrl}/find_architecture_category`).then((res) => res.json()).then((data) => {
//             setCategrylist(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


    

//     useEffect(() => {
//         find_architecture_category();
//     }, []);

//     return(


//         <>
//         <div className="categry_nav container">
//         {categrylist.map((item, index) => (
//         <Link to="#" className="categry_nav_link">{categrylist.Name}</Link>
//         ))}
//         </div>
        
//         </>
//     )



// }

// export default Architecture;





import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const Architecture = () => {
  // const [categrylist, setCategrylist] = useState([]);

  // const find_architecture_category = () => {
  //   fetch(`${apiUrl}/find_architecture_category`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategrylist(data.data || []); // Ensure data is an array
  //     })
  //     .catch((err) => console.error("Error:", err));
  // };

  // useEffect(() => {
  //   find_architecture_category();
  // }, []);

  return (
    <>
      {/* <div className="categry_nav container">
        {categrylist.map((item, index) => (
          <Link to={`/${encodeURIComponent(item.Name)}`} key={index} className="architecture_categry_nav_link">
            {item.Name}
          </Link>
        ))}
      </div> */}

        <div className="container categry_nav text-center">

        <Link className="architecture_categry_nav_link" to='/architeecture/township'>Master Planning / Township</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/housing-projects'>Housing Projects</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/office-building'>Office Building</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/retail&entertainment'>Retail & Entertainment</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/private-houses'>Private Houses</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/education'>Education</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/culture'>Culture</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/hospitality'>Hospitality</Link>
        <Link className="architecture_categry_nav_link" to='/architeecture/villas'>Villas</Link>

        </div>
      

    </>
  );
};

export default Architecture;
