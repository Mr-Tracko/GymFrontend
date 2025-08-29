// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:5173', // Your frontend URL
//     credentials: true // Important for cookies
// }));
// app.use(express.json());
// app.use(cookieParser());

// // Simple in-memory user storage (in production, use a real database)
// let users = [
//     {
//         id: 1,
//         user: 'admin',
//         pwd: '$2b$10$YourHashedPasswordHere', // Will be replaced by actual hash
//         roles: ['admin'],
//         refreshToken: null
//     }
// ];

// // Store refresh tokens (in production, use Redis or database)
// let refreshTokens = [];

// // Initialize admin user with hashed password
// const initializeAdmin = async () => {
//     const hashedPwd = await bcrypt.hash('Admin123!', 10);
//     users[0].pwd = hashedPwd;
//     console.log('✅ Admin user initialized (username: admin, password: Admin123!)');
// };

// // JWT Token functions
// const generateAccessToken = (user) => {
//     return jwt.sign(
//         { 
//             userId: user.id,
//             username: user.user,
//             roles: user.roles 
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: '15m' } // Short-lived access token
//     );
// };

// const generateRefreshToken = (user) => {
//     return jwt.sign(
//         { 
//             userId: user.id,
//             username: user.user 
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         { expiresIn: '7d' } // Long-lived refresh token
//     );
// };

// // Routes

// // Health check
// app.get('/health', (req, res) => {
//     res.json({ 
//         message: 'Backend server is running!',
//         timestamp: new Date().toISOString()
//     });
// });

// // Register route
// app.post('/register', async (req, res) => {
//     try {
//         console.log('📝 Registration attempt:', req.body);
        
//         const { user, pwd } = req.body;
        
//         // Validation
//         if (!user || !pwd) {
//             return res.status(400).json({ message: 'Username and password are required' });
//         }
        
//         // Check if user already exists
//         const existingUser = users.find(u => u.user === user);
//         if (existingUser) {
//             console.log('❌ Username already taken:', user);
//             return res.status(409).json({ message: 'Username Taken' });
//         }
        
//         // Hash password
//         const saltRounds = 10;
//         const hashedPwd = await bcrypt.hash(pwd, saltRounds);
        
//         // Create new user
//         const newUser = {
//             id: users.length + 1,
//             user,
//             pwd: hashedPwd,
//             roles: ['user'],
//             refreshToken: null
//         };
        
//         users.push(newUser);
        
//         // Generate tokens
//         const accessToken = generateAccessToken(newUser);
//         const refreshToken = generateRefreshToken(newUser);
        
//         // Store refresh token
//         newUser.refreshToken = refreshToken;
//         refreshTokens.push(refreshToken);
        
//         // Set refresh token in HTTP-only cookie
//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production', // HTTPS only in production
//             sameSite: 'strict',
//             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//         });
        
//         console.log('✅ User registered successfully:', user);
        
//         res.status(201).json({
//             message: 'User created successfully',
//             accessToken,
//             roles: newUser.roles,
//             user: {
//                 id: newUser.id,
//                 username: newUser.user,
//                 roles: newUser.roles
//             }
//         });
        
//     } catch (error) {
//         console.error('❌ Registration error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Login route
// app.post('/auth', async (req, res) => {
//     try {
//         console.log('🔐 Login attempt:', { user: req.body.user });
        
//         const { user, pwd } = req.body;
        
//         // Validation
//         if (!user || !pwd) {
//             return res.status(400).json({ message: 'Username and password are required' });
//         }
        
//         // Find user
//         const foundUser = users.find(u => u.user === user);
//         if (!foundUser) {
//             console.log('❌ User not found:', user);
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
        
//         // Verify password
//         const isValidPassword = await bcrypt.compare(pwd, foundUser.pwd);
//         if (!isValidPassword) {
//             console.log('❌ Invalid password for user:', user);
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
        
//         // Generate new tokens
//         const accessToken = generateAccessToken(foundUser);
//         const refreshToken = generateRefreshToken(foundUser);
        
//         // Remove old refresh token if exists
//         if (foundUser.refreshToken) {
//             refreshTokens = refreshTokens.filter(token => token !== foundUser.refreshToken);
//         }
        
//         // Store new refresh token
//         foundUser.refreshToken = refreshToken;
//         refreshTokens.push(refreshToken);
        
//         // Set refresh token in HTTP-only cookie
//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'strict',
//             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//         });
        
//         console.log('✅ Login successful:', user);
        
//         res.json({
//             accessToken,
//             roles: foundUser.roles,
//             user: {
//                 id: foundUser.id,
//                 username: foundUser.user,
//                 roles: foundUser.roles
//             }
//         });
        
//     } catch (error) {
//         console.error('❌ Login error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Refresh Token route
// app.post('/refresh', (req, res) => {
//     try {
//         const refreshToken = req.cookies.refreshToken;
        
//         if (!refreshToken) {
//             return res.status(401).json({ message: 'Refresh token not found' });
//         }
        
//         if (!refreshTokens.includes(refreshToken)) {
//             return res.status(403).json({ message: 'Invalid refresh token' });
//         }
        
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if (err) {
//                 // Remove invalid token
//                 refreshTokens = refreshTokens.filter(token => token !== refreshToken);
//                 return res.status(403).json({ message: 'Invalid refresh token' });
//             }
            
//             // Find user
//             const user = users.find(u => u.id === decoded.userId);
//             if (!user) {
//                 return res.status(403).json({ message: 'User not found' });
//             }
            
//             // Generate new access token
//             const accessToken = generateAccessToken(user);
            
//             console.log('🔄 Token refreshed for user:', user.user);
            
//             res.json({
//                 accessToken,
//                 user: {
//                     id: user.id,
//                     username: user.user,
//                     roles: user.roles
//                 }
//             });
//         });
        
//     } catch (error) {
//         console.error('❌ Token refresh error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Logout route
// app.post('/logout', (req, res) => {
//     try {
//         const refreshToken = req.cookies.refreshToken;
        
//         if (refreshToken) {
//             // Remove refresh token from storage
//             refreshTokens = refreshTokens.filter(token => token !== refreshToken);
            
//             // Find and clear user's refresh token
//             const user = users.find(u => u.refreshToken === refreshToken);
//             if (user) {
//                 user.refreshToken = null;
//                 console.log('🚪 User logged out:', user.user);
//             }
//         }
        
//         // Clear cookie
//         res.clearCookie('refreshToken');
//         res.json({ message: 'Logged out successfully' });
        
//     } catch (error) {
//         console.error('❌ Logout error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Get current user info (protected route)
// app.get('/user', authenticateToken, (req, res) => {
//     const user = users.find(u => u.id === req.user.userId);
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
    
//     res.json({
//         id: user.id,
//         username: user.user,
//         roles: user.roles
//     });
// });

// // JWT Authentication middleware
// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
//     if (!token) {
//         return res.status(401).json({ message: 'Access token required' });
//     }
    
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//             console.log('🔒 Token verification failed:', err.message);
//             return res.status(403).json({ message: 'Invalid or expired token' });
//         }
//         req.user = user;
//         next();
//     });
// }

// // Debug routes (remove in production)
// app.get('/debug/users', (req, res) => {
//     const safeUsers = users.map(u => ({
//         id: u.id,
//         user: u.user,
//         roles: u.roles,
//         hasRefreshToken: !!u.refreshToken
//     }));
//     res.json(safeUsers);
// });

// app.get('/debug/tokens', (req, res) => {
//     res.json({
//         totalRefreshTokens: refreshTokens.length,
//         cookiePresent: !!req.cookies.refreshToken
//     });
// });

// // Start server
// app.listen(PORT, async () => {
//     await initializeAdmin();
//     console.log(`🚀 Backend server running on http://localhost:${PORT}`);
//     console.log(`📊 Health check: http://localhost:${PORT}/health`);
//     console.log(`👥 Debug users: http://localhost:${PORT}/debug/users`);
//     console.log(`🔑 Debug tokens: http://localhost:${PORT}/debug/tokens`);
//     console.log(`🔄 Refresh endpoint: http://localhost:${PORT}/refresh`);
// });

const path = require("path");
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth"); // Add this line
const cookieParser = require("cookie-parser");

const { checkForAuthenticationCookie, checkForBearerToken } = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8001;

// CORS configuration - allow both localhost and your Vercel frontend
app.use(cors({
    origin: [
        'http://localhost:5173', 
        'http://localhost:3000',
        'https://fitness-tracker-v4.vercel.app',
        'https://your-frontend-domain.vercel.app' // Replace with your actual frontend URL
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Use Bearer token authentication for API routes
app.use('/api', checkForBearerToken);
// Use cookie authentication for web routes
app.use(checkForAuthenticationCookie("token"));

app.use(express.static(path.resolve("./public")));

// MongoDB Connection with Error Handling
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/gymone";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString()
    });
});

// API Routes (with /api prefix)
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// Web Routes (existing routes for web interface)
app.use("/user", userRoute);

// const authRoute = require("./routes/auth");
// app.use("/api/auth", authRoute);

// Home Route (for web interface)
app.get("/", async (req, res) => {
    try {
        res.json({
            success: true,
            message: "Fitness Tracker API is running",
            user: req.user || null,
            routes: [
                "POST /api/auth/register",
                "POST /api/auth/login", 
                "GET /api/auth/verify-token",
                "POST /api/auth/logout"
            ]
        });
    } catch (err) {
        console.error("Error in home route:", err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `API route ${req.originalUrl} not found`
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error("Global error:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`MongoDB URI: ${MONGODB_URI}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Promise Rejection:', err);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});