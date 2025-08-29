// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from '../api/axios';
// import { Link } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if button enabled with JS hack
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//         try {
//             const response = await axios.post(REGISTER_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             // TODO: remove console.logs before deployment
//             console.log(JSON.stringify(response?.data));
//             //console.log(JSON.stringify(response))
//             setSuccess(true);
//             //clear state and controlled inputs
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('Username Taken');
//             } else {
//                 setErrMsg('Registration Failed')
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             Username:
//                             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>


//                         <label htmlFor="password">
//                             Password:
//                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>


//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must match the first password input field.
//                         </p>

//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                     </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             <Link to="/">Sign In</Link>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Register

import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NAME_REGEX = /^[a-zA-Z\s]{2,50}$/;

const Register = ({ onRegister, isLoading }) => {
    const emailRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [name, email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const v1 = NAME_REGEX.test(name);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(pwd);
        const v4 = pwd === matchPwd;

        if (!v1 || !v2 || !v3 || !v4) {
            setErrMsg("Invalid Entry - Please check all fields");
            return;
        }

        try {
            const response = await onRegister(email, pwd, name);
            
            if (response.success) {
                setSuccess(true);
                // Clear form
                setName('');
                setEmail('');
                setPwd('');
                setMatchPwd('');
                
                // Auto redirect to dashboard after 2 seconds
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                setErrMsg(response.message || 'Registration failed');
                errRef.current?.focus();
            }
        } catch (err) {
            console.error('Registration error:', err);
            setErrMsg('Registration failed. Please try again.');
            errRef.current?.focus();
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

            {success ? (
                <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
                    <div className="text-center p-8">
                        <h1 className="text-3xl font-bold text-white mb-4">Success!</h1>
                        <p className="text-gray-400 mb-6">Your account has been created successfully.</p>
                        <p className="text-gray-500 mb-6 text-sm">Redirecting to dashboard...</p>
                        <div className="flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-red-600/30 border-t-red-600 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
                    <div className="text-center pb-6 pt-6">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Register
                        </h1>
                        <p className="text-gray-500 text-base">
                            Create your new account.
                        </p>
                    </div>

                    <div className="space-y-6 p-6">
                        {errMsg && (
                            <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
                                <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive">
                                    {errMsg}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-4">
                                {/* Name Field */}
                                <div className="relative group">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name:
                                        <FontAwesomeIcon 
                                            icon={faCheck} 
                                            className={`ml-2 ${validName ? "text-green-400" : "hidden"}`} 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faTimes} 
                                            className={`ml-2 ${validName || !name ? "hidden" : "text-red-400"}`} 
                                        />
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        autoComplete="name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="namenote"
                                        onFocus={() => setNameFocus(true)}
                                        onBlur={() => setNameFocus(false)}
                                        placeholder="Enter your full name"
                                        className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {nameFocus && name && !validName && (
                                        <div id="namenote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
                                            <p className="text-blue-400 text-sm">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                                Full name must be 2-50 characters long and contain only letters and spaces.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="relative group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email:
                                        <FontAwesomeIcon 
                                            icon={faCheck} 
                                            className={`ml-2 ${validEmail ? "text-green-400" : "hidden"}`} 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faTimes} 
                                            className={`ml-2 ${validEmail || !email ? "hidden" : "text-red-400"}`} 
                                        />
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        ref={emailRef}
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        placeholder="Enter your email"
                                        className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {emailFocus && email && !validEmail && (
                                        <div id="emailnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
                                            <p className="text-blue-400 text-sm">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                                Please enter a valid email address.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="relative group">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                        Password:
                                        <FontAwesomeIcon 
                                            icon={faCheck} 
                                            className={`ml-2 ${validPwd ? "text-green-400" : "hidden"}`} 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faTimes} 
                                            className={`ml-2 ${validPwd || !pwd ? "hidden" : "text-red-400"}`} 
                                        />
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                        placeholder="Enter password"
                                        className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {pwdFocus && !validPwd && (
                                        <div id="pwdnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
                                            <p className="text-blue-400 text-sm">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                                8 to 24 characters.<br />
                                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password Field */}
                                <div className="relative group">
                                    <label htmlFor="confirm_pwd" className="block text-sm font-medium text-gray-300 mb-2">
                                        Confirm Password:
                                        <FontAwesomeIcon 
                                            icon={faCheck} 
                                            className={`ml-2 ${validMatch && matchPwd ? "text-green-400" : "hidden"}`} 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faTimes} 
                                            className={`ml-2 ${validMatch || !matchPwd ? "hidden" : "text-red-400"}`} 
                                        />
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        autoComplete="new-password"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                        placeholder="Confirm password"
                                        className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {matchFocus && !validMatch && (
                                        <div id="confirmnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
                                            <p className="text-blue-400 text-sm">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                                Must match the first password input field.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button 
                                type="submit"
                                disabled={!validName || !validEmail || !validPwd || !validMatch || isLoading}
                                className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
                            >
                                <span className="relative z-10">
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Creating Account...</span>
                                        </div>
                                    ) : (
                                        'Sign Up'
                                    )}
                                </span>
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-gray-950 px-4 text-gray-600">or</span>
                            </div>
                        </div>

                        <div className="text-center text-gray-500">
                            <div className="flex items-center justify-center space-x-1">
                                <span>Already registered?</span>
                                <Link 
                                    to="/auth"
                                    className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;

// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const Register = () => {
//     const { register, isAuthenticated } = useAuth();
//     const emailRef = useRef();
//     const errRef = useRef();
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [validEmail, setValidEmail] = useState(false);
//     const [emailFocus, setEmailFocus] = useState(false);

//     const [password, setPassword] = useState('');
//     const [validPassword, setValidPassword] = useState(false);
//     const [passwordFocus, setPasswordFocus] = useState(false);

//     const [matchPassword, setMatchPassword] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Debug state - you can remove this in production
//     const [debugInfo, setDebugInfo] = useState('');

//     useEffect(() => {
//         if (emailRef.current) {
//             emailRef.current.focus();
//         }
//     }, [])

//     // Redirect if already authenticated
//     useEffect(() => {
//         if (isAuthenticated) {
//             navigate('/dashboard', { replace: true });
//         }
//     }, [isAuthenticated, navigate]);

//     useEffect(() => {
//         setValidEmail(EMAIL_REGEX.test(email));
//     }, [email])

//     useEffect(() => {
//         setValidPassword(PWD_REGEX.test(password));
//         setValidMatch(password === matchPassword);
//     }, [password, matchPassword])

//     useEffect(() => {
//         setErrMsg('');
//         setDebugInfo(''); // Clear debug info when inputs change
//     }, [email, password, matchPassword])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setErrMsg('');
//         setDebugInfo('');
        
//         console.log('🚀 Starting registration process...');
//         console.log('📧 Email:', email);
//         console.log('🔐 Password length:', password.length);
//         console.log('✅ Valid email:', validEmail);
//         console.log('✅ Valid password:', validPassword);
//         console.log('✅ Passwords match:', validMatch);
//         console.log('📤 Will send to backend:', { email, password: '***' });
        
//         // Validate inputs
//         const v1 = EMAIL_REGEX.test(email);
//         const v2 = PWD_REGEX.test(password);
//         const v3 = password === matchPassword;
        
//         if (!v1 || !v2 || !v3) {
//             const errors = [];
//             if (!v1) errors.push('Invalid email format');
//             if (!v2) errors.push('Password doesn\'t meet requirements');
//             if (!v3) errors.push('Passwords don\'t match');
            
//             setErrMsg(`Validation failed: ${errors.join(', ')}`);
//             setDebugInfo(`❌ Validation Details:\n- Email valid: ${v1}\n- Password valid: ${v2}\n- Passwords match: ${v3}`);
//             setIsLoading(false);
//             return;
//         }
        
//         try {
//             console.log('📤 Sending registration request...');
//             setDebugInfo('📤 Sending request to server...');
            
//             const result = await register(email, password);
            
//             console.log('📨 Registration response:', result);
//             setDebugInfo(`📨 Server response: ${JSON.stringify(result, null, 2)}`);
            
//             if (result.success) {
//                 console.log('✅ Registration successful:', result.message);
//                 setSuccess(true);
                
//                 // Clear form
//                 setEmail('');
//                 setPassword('');
//                 setMatchPassword('');
                
//                 // Navigate to dashboard after showing success message
//                 setTimeout(() => {
//                     navigate('/dashboard');
//                 }, 2000);
//             } else {
//                 console.error('❌ Registration failed:', result.message);
//                 setErrMsg(result.message || 'Registration failed');
//                 setDebugInfo(`❌ Registration failed:\n${JSON.stringify(result, null, 2)}`);
//                 if (errRef.current) {
//                     errRef.current.focus();
//                 }
//             }
//         } catch (error) {
//             console.error('💥 Registration error caught:', error);
            
//             // Detailed error logging
//             const errorDetails = {
//                 message: error.message,
//                 name: error.name,
//                 stack: error.stack,
//                 response: error.response ? {
//                     status: error.response.status,
//                     statusText: error.response.statusText,
//                     data: error.response.data,
//                     headers: error.response.headers
//                 } : 'No response object',
//                 request: error.request ? 'Request made but no response' : 'No request object'
//             };
            
//             console.error('Error details:', errorDetails);
//             setDebugInfo(`💥 Error Details:\n${JSON.stringify(errorDetails, null, 2)}`);
            
//             if (error.response) {
//                 // Server responded with error
//                 const status = error.response.status;
//                 const data = error.response.data;
                
//                 switch (status) {
//                     case 400:
//                         setErrMsg(data?.message || 'Bad request - check your input');
//                         break;
//                     case 409:
//                         setErrMsg('Email already exists - try a different email');
//                         break;
//                     case 422:
//                         setErrMsg('Invalid data format - check your inputs');
//                         break;
//                     case 500:
//                         setErrMsg('Server error - please try again later');
//                         break;
//                     default:
//                         setErrMsg(`Registration failed (${status}): ${data?.message || 'Unknown error'}`);
//                 }
//             } else if (error.request) {
//                 // Network error
//                 setErrMsg('Network error - check your internet connection');
//             } else {
//                 // Other error
//                 setErrMsg(`Unexpected error: ${error.message}`);
//             }
            
//             if (errRef.current) {
//                 errRef.current.focus();
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//             {/* Premium background effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
//             {success ? (
//                 <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
//                     <div className="text-center p-8">
//                         <h1 className="text-3xl font-bold text-white mb-4">Success!</h1>
//                         <p className="text-gray-400 mb-6">Your account has been created successfully. Redirecting to dashboard...</p>
//                         <Link 
//                             to="/dashboard"
//                             className="inline-block w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 flex items-center justify-center"
//                         >
//                             Go to Dashboard
//                         </Link>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
//                     <div className="text-center pb-6 pt-6">
//                         <h1 className="text-3xl font-bold text-white mb-2">
//                             Register
//                         </h1>
//                         <p className="text-gray-500 text-base">
//                             Create your new account using your email address.
//                         </p>
//                     </div>
                    
//                     <div className="space-y-6 p-6">
//                         {errMsg && (
//                             <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
//                                 <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive">
//                                     {errMsg}
//                                 </p>
//                             </div>
//                         )}
                        
//                         {/* Debug Information - Remove in production */}
//                         {debugInfo && (
//                             <div className="border rounded-lg p-3 backdrop-blur-sm bg-yellow-600/10 border-yellow-600/25">
//                                 <p className="text-yellow-400 text-xs font-mono whitespace-pre-wrap">
//                                     {debugInfo}
//                                 </p>
//                             </div>
//                         )}
                        
//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <div className="space-y-4">
//                                 {/* Email Field */}
//                                 <div className="relative group">
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                                         Email:
//                                         <FontAwesomeIcon 
//                                             icon={faCheck} 
//                                             className={`ml-2 ${validEmail ? "text-green-400" : "hidden"}`} 
//                                         />
//                                         <FontAwesomeIcon 
//                                             icon={faTimes} 
//                                             className={`ml-2 ${validEmail || !email ? "hidden" : "text-red-400"}`} 
//                                         />
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         ref={emailRef}
//                                         autoComplete="email"
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         value={email}
//                                         required
//                                         aria-invalid={validEmail ? "false" : "true"}
//                                         aria-describedby="emailnote"
//                                         onFocus={() => setEmailFocus(true)}
//                                         onBlur={() => setEmailFocus(false)}
//                                         placeholder="Enter your email"
//                                         className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    
//                                     {emailFocus && email && !validEmail && (
//                                         <div id="emailnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
//                                             <p className="text-blue-400 text-sm">
//                                                 <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
//                                                 Please enter a valid email address.<br />
//                                                 Example: user@example.com
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Password Field */}
//                                 <div className="relative group">
//                                     <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
//                                         Password:
//                                         <FontAwesomeIcon 
//                                             icon={faCheck} 
//                                             className={`ml-2 ${validPassword ? "text-green-400" : "hidden"}`} 
//                                         />
//                                         <FontAwesomeIcon 
//                                             icon={faTimes} 
//                                             className={`ml-2 ${validPassword || !password ? "hidden" : "text-red-400"}`} 
//                                         />
//                                     </label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         value={password}
//                                         required
//                                         aria-invalid={validPassword ? "false" : "true"}
//                                         aria-describedby="pwdnote"
//                                         onFocus={() => setPasswordFocus(true)}
//                                         onBlur={() => setPasswordFocus(false)}
//                                         placeholder="Enter password"
//                                         className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    
//                                     {passwordFocus && !validPassword && (
//                                         <div id="pwdnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
//                                             <p className="text-blue-400 text-sm">
//                                                 <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
//                                                 8 to 24 characters.<br />
//                                                 Must include uppercase and lowercase letters, a number and a special character.<br />
//                                                 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Confirm Password Field */}
//                                 <div className="relative group">
//                                     <label htmlFor="confirm_pwd" className="block text-sm font-medium text-gray-300 mb-2">
//                                         Confirm Password:
//                                         <FontAwesomeIcon 
//                                             icon={faCheck} 
//                                             className={`ml-2 ${validMatch && matchPassword ? "text-green-400" : "hidden"}`} 
//                                         />
//                                         <FontAwesomeIcon 
//                                             icon={faTimes} 
//                                             className={`ml-2 ${validMatch || !matchPassword ? "hidden" : "text-red-400"}`} 
//                                         />
//                                     </label>
//                                     <input
//                                         type="password"
//                                         id="confirm_pwd"
//                                         onChange={(e) => setMatchPassword(e.target.value)}
//                                         value={matchPassword}
//                                         required
//                                         aria-invalid={validMatch ? "false" : "true"}
//                                         aria-describedby="confirmnote"
//                                         onFocus={() => setMatchFocus(true)}
//                                         onBlur={() => setMatchFocus(false)}
//                                         placeholder="Confirm password"
//                                         className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    
//                                     {matchFocus && !validMatch && (
//                                         <div id="confirmnote" className="mt-2 p-3 bg-blue-600/10 border border-blue-600/25 rounded-lg">
//                                             <p className="text-blue-400 text-sm">
//                                                 <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
//                                                 Must match the first password input field.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
                            
//                             <button 
//                                 type="submit"
//                                 disabled={!validEmail || !validPassword || !validMatch || isLoading}
//                                 className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                             >
//                                 <span className="relative z-10">
//                                     {isLoading ? (
//                                         <div className="flex items-center justify-center space-x-2">
//                                             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                             <span>Creating Account...</span>
//                                         </div>
//                                     ) : (
//                                         'Sign Up'
//                                     )}
//                                 </span>
//                             </button>
//                         </form>
                        
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-800"></div>
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="bg-gray-950 px-4 text-gray-600">or</span>
//                             </div>
//                         </div>
                        
//                         <div className="text-center text-gray-500">
//                             <div className="flex items-center justify-center space-x-1">
//                                 <span>Already registered?</span>
//                                 <Link 
//                                     to="/"
//                                     className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                                 >
//                                     Sign In
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Register;