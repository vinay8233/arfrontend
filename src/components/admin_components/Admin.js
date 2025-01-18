// // import React, { useState } from 'react';
// // const apiUrl = process.env.REACT_APP_API_URL;

// import { useState } from "react";

// // const Admin = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch(`${apiUrl}/findadmin`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ email, password }),
// //             });

// //             const data = await response.json();

// //             if (response.ok) {
// //                 alert('Login successful');
// //                 window.location.href = '/dashboard';
// //             } else {
// //                 setErrorMessage(data.message || 'Login failed');
// //             }
// //         } catch (error) {
// //             setErrorMessage('An error occurred. Please try again.');
// //         }
// //     };

// //     return (
// //         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// //             <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
// //                 <h1 className="text-center text-primary mb-4">Admin Login</h1>
// //                 <form onSubmit={handleLogin}>
// //                     <div className="mb-3">
// //                         <label htmlFor="email" className="form-label">Email</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             className="form-control"
// //                             placeholder="Enter your email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             required
// //                         />
// //                     </div>
// //                     <div className="mb-3">
// //                         <label htmlFor="password" className="form-label">Password</label>
// //                         <input
// //                             type="password"
// //                             id="password"
// //                             className="form-control"
// //                             placeholder="Enter your password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             required
// //                         />
// //                     </div>
// //                     {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}
// //                     <button type="submit" className="btn btn-primary w-100">Login</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Admin;import React, { useState } from 'react';
// const apiUrl = process.env.REACT_APP_API_URL;

// const Admin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`${apiUrl}/findadmin`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             .then((res) => res.json())
            
//             if (data.data.email=== "vinay@gmail.com") {
//                 localStorage.setItem('token', data.token); // Store the token
//                 alert('Login successful');
//                 window.location.href = '/dashboard'; // Redirect to the dashboard
//             } else {
//                 setErrorMessage(data.message || 'Invalid email or password');
//             }
//         } catch (error) {
//             setErrorMessage('An error occurred. Please try again.');
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
//                 <h1 className="text-center text-primary mb-4">Admin Login</h1>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="form-control"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}
//                     <button type="submit" className="btn btn-primary w-100">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Admin;





import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // You can remove this if no functionality is needed in the effect.
    }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");

    //     try {
    //         const response = await fetch(`${apiUrl}/login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });
    //         const data = await response.json();

    //         if (data && data.data && data.data.email)
    //             { console.log(data.data.Email)
    //             if (data.data.email === "admin@gmail.com") {
    //                 // Redirect to the /admin/dashboard page after successful login
    //                 window.open('/admin/dashboard');
    //             } else {
    //                 setError("Invalid email or password");
    //             }
    //         } else {
    //             setError(data.message || "Invalid response from the server");
    //         }
    //     } catch (error) {
    //         console.error("Error during login:", error);
    //         setError("An unexpected error occurred. Please try again.");
    //     }
    // };




    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
   
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data); // Log the response data
   
            if (data && data.data && data.data.email) {
                if (data.data.email === "admin@gmail.com") {
                    window.open('/admin/dashboard');
                } else {
                    setError("Invalid email or password");
                }
            } else {
                setError(data.message || "Invalid response from the server");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An unexpected error occurred. Please try again.");
        }
    };
   






    return (
        <>
            <form onSubmit={handleSubmit} className="form-control w-50 m-auto mt-5">
                <h1 className="w-100 m-3 text-center">Login Form</h1>
                {error && <p className="text-danger text-center">{error}</p>}
                <label htmlFor="email">Email ID</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="email"
                    id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    id="password"
                />

                <button type="submit" className="btn btn-danger d-flex m-auto mt-4">
                    Login
                </button>
            </form>
        </>
    );
};

export default Admin;
