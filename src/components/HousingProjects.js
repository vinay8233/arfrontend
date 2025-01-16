import React from 'react';
import { Link } from 'react-router-dom';

const HousingProjects = () => {
    return (
        <>
        
<div className="container categry_nav">

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

export default HousingProjects;