import React, { useEffect } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;


const AboutUs = () => {

    const [awardslist2021, setAwardslist2021] = React.useState([])
    const [awardslist2020, setAwardslist2020] = React.useState([])
    const [awardslist2019, setAwardslist2019] = React.useState([])
    const [awardslist2018, setAwardslist2018] = React.useState([])
    const [awardslist2017, setAwardslist2017] = React.useState([])
    const [awardslist2016, setAwardslist2016] = React.useState([])
    const [awardslist2015, setAwardslist2015] = React.useState([])
    const [awardslist2014, setAwardslist2014] = React.useState([])
    const [awardslist2013, setAwardslist2013] = React.useState([])
    const [awardslist2012, setAwardslist2012] = React.useState([])
    const [awardslist2011, setAwardslist2011] = React.useState([])
    const [awardslist2010, setAwardslist2010] = React.useState([])
    const [awardslist2009, setAwardslist2009] = React.useState([])



    const find_awards = () => {
        fetch(`${apiUrl}/find_awards`)
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2021");
                setAwardslist2021(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2020");
                setAwardslist2020(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2019");
                setAwardslist2019(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2018");
                setAwardslist2018(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2017");
                setAwardslist2017(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2016");
                setAwardslist2016(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2015");
                setAwardslist2015(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2014");
                setAwardslist2014(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2013");
                setAwardslist2013(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2012");
                setAwardslist2012(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2011");
                setAwardslist2011(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2010");
                setAwardslist2010(filteredData); 
            }
            if (data.message === "awards found") {
                const filteredData = data.data.filter((item) => item.Year === "2009");
                setAwardslist2009(filteredData); 
            }
          })
          .catch((err) => console.error("Error:", err));
      };

     useEffect(() => {
        find_awards();
         }, []);



    return (


        <>


        <h2>ABOUT</h2>

       <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-1 g-2 g-lg-3">
    <div className="col">
      <div className="p-3">
        <p>‘Number 32 on Archello’s list of Top 100 architects worldwide‘
        ‘Top 100 Architects Worldwide’</p>
        <small>Archdaily</small>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
        <p>‘Top 130 design firms worldwide’</p>
        <small>Architizer, New York</small>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
        <p>‘Top 100 architectural firms’</p>
        <small>World Architecture Community, UK</small>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
        <small>Winning the CDA 2023 Paris Best residential project worldwide, The LOOP Design Awards -Best Large architectural firm, The Best Completed
</small>
<small>Building – Production Energy & Logistics in the World Architecture Festival, Singapore 2023, The Best housing Project worldwide in the World Architecture Festival, Lisbon 2022, The LEAF Awards London, Best interior project 2021, the firm has won over 450 awards including 300 International design awards.
</small>
      </div>
    </div>
    <div className="col">
      <div className="p-3"><p>Evolving design solutions that are contextual and sustainable and creating spaces that explore spatial perceptions, with new design directions forms the essence of the firm’s design philosophy – Sanjay Puri</p></div>
    </div>
  </div>
</div>





        


<div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
    <div className="col">
      <div className="p-3">
        <h3>SANJAY PURI</h3>
        <small>Principal Architect</small>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
        <h3>NINA PURI</h3>
        <small>Principal Architect</small>
      </div>
    </div>
  </div>
</div>




<div className="container about">
  <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
    <div className="col">
      <div className="p-3"><p>Sanjay strongly believes that every project should be designed contextually evolving spaces that are perceived in new ways. Each design takes cognizes of the climate and integrates sustainability in cohesive way. This ideology is reflected in the extensive work done by the firm in the 3 decades since its inception.

</p>
<p>Sanjay Puri graduated from the Academy of Architecture, Mumbai in 1988</p></div>
    </div>
    <div className="col">
      <div className="p-3"><p>He worked with Architect Hafeez Contractor throughout the five years of education from 1983 to 1988 and was made an Associate of the firm in 1988 upon graduation. He continued to work there for 4 years more as a Senior Associate prior to commencing Sanjay Puri Architects in 1992.</p></div>
    </div>
    <div className="col">
      <div className="p-3"><p>Nina Puri Architects – is leading design firm, that specializes in residential and commercial interiors and has established its presence throughout the country. Known for simplicity in her design approach, Architect Nina Puri juxtaposes the orthogonal nature of clean lines with a luxurious mix of materials colors and texture in order to create a distinct look for each project. She strongly believes that no space is too small to be designed as creativity has no size, nor limits.</p>
      <p>She had her team employ meticulous attention to details in order to create holistic design, that not only reflects the firm’s design aesthetic but also expresses the client’s personality. Recently awarded the</p></div>
    </div>
    <div className="col">
      <div className="p-3">
        <p>WADE (Women Architects & Designer) Role Model Award for outstanding contribution in designing spaces. Nina and her team continue to create exceptional interior spaces throughout the country. Her repertoire of projects includes private homes and office rendered with a wide palette of materials, colors and textures in a contemporary language. Her portfolio of discerningly selected projects ensures a distinct and strong sense of identity and individuality to each one.

        </p>
        <p>Nina Puri graduated from the Academy of Architecture, Mumbai in 1988 and after brief stints with Architect Ajit Bhuta, her brother and Architect Hafeez Contractor, begun her practice in 1992.</p>
      </div>
    </div>
  </div>
</div>





<h3 className='text-center'>INTERNATIONAL AWARDS</h3>

<div class="accordion container" id="accordionPanelsStayOpenExample">
   
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#award2021" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2021
      </button>
    </h2>
    <div id="award2021" class="accordion-collapse collapse show">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2021.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2020" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2020
      </button>
    </h2>
    <div id="award2020" class="accordion-collapse collapse hide ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2020.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2019" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2019
      </button>
    </h2>
    <div id="award2019" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2019.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2018" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2018
      </button>
    </h2>
    <div id="award2018" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2018.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2017" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2017
      </button>
    </h2>
    <div id="award2017" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2017.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2016" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2016
      </button>
    </h2>
    <div id="award2016" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2016.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2015" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2015
      </button>
    </h2>
    <div id="award2015" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2015.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2014" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2014
      </button>
    </h2>
    <div id="award2014" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2014.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2013" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2013
      </button>
    </h2>
    <div id="award2013" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2013.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2012" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2012
      </button>
    </h2>
    <div id="award2012" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2012.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2011" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2011
      </button>
    </h2>
    <div id="award2011" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2011.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2010" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2010
      </button>
    </h2>
    <div id="award2010" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2010.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>
    

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#award2009" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        2009
      </button>
    </h2>
    <div id="award2009" class="accordion-collapse collapse ">
   
      <div class="accordion-body">
      
    <div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
  {awardslist2009.map((item, index) => (
    <div className="col">
      <div className="p-0">

      <div className="card" >
  <div className="card-header">
    <img src={`${apiUrl}/uploads/${item.Img}`} alt="" />
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.Awardsname}</li>
    <li className="list-group-item">{item.Year}</li>
    <li className="list-group-item">{item.Place}</li>
    <li className="list-group-item">{item.Location}</li>

  </ul>
</div>

      </div>

    </div>
    ))} 
  </div>
</div>

    
     </div>
     
    </div>
  </div>  

  <p>In addition to over 300 International Awards, we have won over 100 national awards for some of our Architectural &amp; Interior projects.</p>
</div>


        </>

    );
};

export default AboutUs;