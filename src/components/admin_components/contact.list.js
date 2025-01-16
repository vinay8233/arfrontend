// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const apiUrl = process.env.REACT_APP_API_URL;


// const ContactList = () => {
//     const [contacts, setContacts] = useState([]);

//     const findcontact = () => {

//         fetch(`${apiUrl}/findcontact`).then((res) => res.json()).then((data) => {
//             setContacts(data.data);
//         }).catch((err) => console.error('Error:', err));
//     }


//     const handleDelete = (id) => {
//         fetch(`${apiUrl}/deletecontact/${id}`, {
//             method: "DELETE",
//         }).then((res) => res.json()).then((data) => {
//             if (data.data) {
//                 findcontact();
//             }
//         }).catch((err) => console.error('Error:', err));
//     }


//     useEffect(() => {
//         findcontact();
//     }, []);

//     return (
//         <>
//             <div className="container mt-5">
//                <div className='d-flex'>
//                <Link to="/admin" className="btn btn-primary d-block mb-4">Back To Dashbord</Link>
//                <h2 className="text-center w-50 mb-4">Contact Messages</h2>
//                 <Link to="#" className="btn btn-primary d-block mb-4 me-auto">Resume/Application list</Link>
//                </div>
//                 <div className="table-responsive">
//                     <table className="table table-striped table-hover table-bordered shadow-sm">
//                         <thead className="bg-dark text-white text-center">
//                             <tr>
//                                 <th scope="col">Sr No.</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Message</th>
//                                 <th scope="col">Subject</th>
//                                 <th scope="col">Action</th>

//                             </tr>
//                         </thead>
//                         <tbody>
//                             {contacts.map((item, index) => (
//                                 <tr key={item._id}>
//                                     <td className="text-center">{index + 1} </td>
//                                     <td>{item.Name}</td>
//                                     <td>{item.Email}</td>
//                                     <td>{item.Message}</td>
//                                     <td>{item.Subject}</td>
//                                     <td className="text-center">
//                                         <button className="btn btn-primary btn-sm me-2">Reply</button>
//                                         <button onClick={() => handleDelete(item._id)} className="btn btn-danger btn-sm">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default ContactList;







import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Admin.css';

const apiUrl = process.env.REACT_APP_API_URL;

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const[email,setEmail]=useState('');
  const[subject,setSubject]=useState('');
  const[message,setMessage]=useState('');
  

  const fetchContacts = () => {
    fetch(`${apiUrl}/findcontact`)
      .then((res) => res.json())
      .then((data) => setContacts(data.data))
      .catch((err) => console.error("Error:", err));
  };

  const handleDelete = (id) => {
    fetch(`${apiUrl}/deletecontact/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          fetchContacts();
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    fetchContacts();
  }, []);


  // const findreplytoclient = (id) => {
  //   fetch(`${apiUrl}/findreplytoclient/${id}`,
  //   {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if(data.data){
  //         setEmail(data.data.Email);
  //         setSubject(data.data.Subject);
  //       }
  //     })
  //     .catch((err) => console.error("Error:", err));
  // }

  


  const findreplytoclient = (id) => {
    fetch(`${apiUrl}/findreplytoclient/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // Populate modal fields with contact data
          setEmail(data.email || ""); // Set email
          setSubject(data.subject || ""); // Set subject
          setMessage(data.message || ""); // Set message
        }
      })
      .catch((err) => console.error("Error:", err));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {  email, subject, message };

    fetch(`${apiUrl}/replytoclient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          
          // replytoclient();
        }
      })
      .catch((err) => console.error("Error:", err));

  };


      
      


  return (

<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold text-uppercase" to="#">
          Admin Panel
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin/Architecturelist"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin/contactlist"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-light mx-2"
                to="/admin/aboutawards"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className="container mt-5">
     
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
        <h2 className="text-center mb-0">Contact Messages</h2>
        <Link to="#" className="btn btn-primary">
          Resume/Application List
        </Link>
      </div>

      
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Subject</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item, index) => (
              <tr key={item._id}>
                <td className="text-center">{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Message}</td>
                <td>{item.Subject}</td>
                <td className="text-center">
                  <button onClick={()=>{findreplytoclient(item._id)}}  className="btn btn-primary btn-sm me-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
                    Reply
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>

                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>




{/* moadal for reply */}
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input onChange={(e)=> {setEmail(e.target.value)}} value={email}  type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="col-form-label">Subject:</label>
            <input onChange={(e)=> {setSubject(e.target.value)}} value={subject} type="text" className="form-control" id="subject" />
            </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text" defaultValue={""} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        
        <button onSubmit={handleSubmit}  type="submit" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>













</>
  );
};

export default ContactList;
