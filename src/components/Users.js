// import {useState , useEffect} from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import useRefreshToken from '../hooks/useRefreshToken';

// const Users = () => {
//     const [users , setUsers] = useState([]);
//     const axiosPrivate = useAxiosPrivate();
//     const navigate = useNavigate();
//     const loction = useLocation();

//     useEffect(() => {
//         let isMounted = true;
//         const controller = new AbortController();

//         const getUsers = async () => {
//             try{
//                 const response = await axiosPrivate.get('/users' , {
//                     signal: controller.signal
//                 });
//                 console.log(response.data);
//                 isMounted && setUsers(response.data);
//             } catch(err){
//                 console.log(err);
//                 navigate('/login' , {state : { from : location} , replace: true});
//             }
//         }

//         getUsers();
//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
//     }, []);
//     return(
//         <article>
//             <h2>Users List</h2>
//             {users?.length? (
//                 <ul>
//                     {users.map((user , i) => <li key={i}>{user?.username}</li>)}
//                 </ul>
//             ) : <p>No users to display</p>
//         }
//         <button onClick={() => refresh()}>Refresh</button>
//         </article>
//     )
// }

// export default Users;

// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import useRefreshToken from '../hooks/useRefreshToken';
// import { useAuth } from '../hooks/useAuth';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const axiosPrivate = useAxiosPrivate();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const refresh = useRefreshToken();
//     const { setAuth } = useAuth();

//     useEffect(() => {
//         let isMounted = true;
//         const controller = new AbortController();

//         const getUsers = async () => {
//             try {
//                 const response = await axiosPrivate.get('/users', {
//                     signal: controller.signal
//                 });
//                 console.log('Users data:', response.data);
//                 isMounted && setUsers(response.data);
//             } catch (err) {
//                 console.error('Error fetching users:', err);
//                 if (err.name !== 'AbortError') {
//                     // Navigate to login on auth failure
//                     navigate('/', { state: { from: location }, replace: true });
//                 }
//             }
//         }

//         getUsers();

//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
//     }, [axiosPrivate, navigate, location]);

//     const handleRefresh = async () => {
//         try {
//             await refresh();
//             console.log('Token refreshed successfully');
//         } catch (error) {
//             console.error('Failed to refresh token:', error);
//         }
//     }

//     const handleLogout = async () => {
//         try {
//             // Call logout endpoint to clear refresh token on server
//             await axiosPrivate.post('/logout');
//         } catch (error) {
//             console.error('Logout error:', error);
//         } finally {
//             // Clear auth state and redirect to login
//             setAuth({});
//             navigate('/', { replace: true });
//         }
//     }

//     return (
//         <div className="min-h-screen bg-black text-white p-8">
//             <div className="max-w-4xl mx-auto">
//                 <div className="flex justify-between items-center mb-8">
//                     <h2 className="text-3xl font-bold text-white">Users List</h2>
//                     <div className="space-x-4">
//                         <button 
//                             onClick={handleRefresh}
//                             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
//                         >
//                             Refresh Token
//                         </button>
//                         <button 
//                             onClick={handleLogout}
//                             className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 </div>

//                 <div className="bg-gray-900 rounded-lg p-6">
//                     {users?.length ? (
//                         <ul className="space-y-2">
//                             {users.map((user, i) => (
//                                 <li key={i} className="p-3 bg-gray-800 rounded border-l-4 border-red-500">
//                                     <span className="text-gray-300">
//                                         {user?.email || user?.username || `User ${i + 1}`}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <div className="text-center py-8">
//                             <p className="text-gray-400 text-lg">No users to display</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Users;

const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/signin", (req, res) => {
    return res.render("signin");
});

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/home", (req, res) => {
    return res.render("home", { blogs });
});



router.post("/signin" , async(req, res) => {
    const { email , password} = req.body;
    //and signin k liye hum email and password check krege hmaare database m
    //if that particular email and password exists , then we are giving him excess to the application
    //As , we are hashing the password , so , phle hme user ko uss particular email se find krna hoga .. then uss particular email k particular salt se User ka daala hua password dubara hash krna pdega
    //then we are going to compare the new hashed password and the old one stored hashed password
    //And , this can be achieved by making Mongoose Virtual Functions ..
    //and we can make a function for a particular Schema ..
    try{
        const token = await User.matchPasswordAndGenerateToken(email,password);

        return res.cookie("token" , token).redirect("/");
    } catch(error){
        return res.render("signin" , { error : "Incorrect Email or Password" });
    }
})

router.post("/signup" , async (req,res) => {
    const { fullName , email , password} = req.body;
    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect("/");
});

router.get("/logout" , (req,res) => {
    res.clearCookie("token");
    return res.redirect("/");
})

module.exports = router;