// import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;


// const Contact = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [subject, setSubject] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name, email, subject, message };

//         fetch(`${apiUrl}/contactus`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.data) {
//                     resetForm();
//                     findcontact();
//                 }
//             })
//             .catch((err) => console.error('Error:', err));
//     }



//     const findcontact = () => {
//         fetch(`${apiUrl}/findcontact`)
//           .then((res) => res.json())
//           .catch((err) => console.error('Error:', err));
//       };



//       const resetForm = () => {
//           setName('');
//           setEmail('');
//           setSubject('');
//           setMessage('');

//         };
      
//        useEffect(() => {
//         findcontact();
//         }, []);



//     return (
       
// <>
// <h2 className="elment-heading text-center">CONTACT US</h2>



// <div className="container ">
//   <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
//     <div className="col">
//       <div className="p-3">
//       <p><strong>SANJAY PURI ARCHITECTS</strong></p>
//       <p>20 Famous Studio Lane, Off. Dr. E.Moses Road, Mahalaxmi, Mumbai – 400011, India</p>
//       <p>PHONE: +91-22- 66662111 / 35135934 / 35135935</p>
//       <p>Mobile: +91 98927 24692</p>
//       <p>EMAIL - Office : <Link to="mailto:info@sanjaypuriarchitects.com">info@sanjaypuriarchitects.com</Link> , <Link to="mailto:career@sanjaypuriarchitects.com">career@sanjaypuriarchitects.com</Link></p>
//       </div>
//     </div>


//     <div className="col">
//       <div className="p-3">
//         <form onSubmit={handleSubmit} action="">
//             <label htmlFor="">Your name</label>
//             <input value={name} onChange={(e) => setName(e.target.value)} name="name" className="form-control" type="text" />

//             <label htmlFor="">Your email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="form-control" type="email" />

//             <label htmlFor="">Subject</label>
//             <input value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" className="form-control" type="text" />

//             <label htmlFor="">Your message (optional)</label>
//             <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="form-control"  id=""></textarea>

//             <button className="btn btn-danger" type="submit">SUBMIT</button>
//         </form>
//       </div>
//     </div>
    
//   </div>
// </div>






// </>



//     )
// }   
// export default Contact;






import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, subject, message };

    fetch(`${apiUrl}/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          resetForm();
          findcontact();
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  const findcontact = () => {
    fetch(`${apiUrl}/findcontact`)
      .then((res) => res.json())
      .catch((err) => console.error("Error:", err));
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  useEffect(() => {
    findcontact();
  }, []);

  return (
    <>
      <h2 className="text-center my-4">CONTACT US</h2>

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded shadow">
              <h5><strong>SANJAY PURI ARCHITECTS</strong></h5>
              <p>20 Famous Studio Lane, Off. Dr. E.Moses Road, Mahalaxmi, Mumbai – 400011, India</p>
              <p>PHONE: +91-22-66662111 / 35135934 / 35135935</p>
              <p>Mobile: +91 98927 24692</p>
              <p>
                EMAIL - Office: <Link to="mailto:info@sanjaypuriarchitects.com">info@sanjaypuriarchitects.com</Link>,
                <Link to="mailto:career@sanjaypuriarchitects.com"> career@sanjaypuriarchitects.com</Link>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-light p-4 rounded shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="form-control"
                    type="email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name="subject"
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message (optional)</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="form-control"
                    rows="4"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100" type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
