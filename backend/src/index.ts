import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_change_me';

app.use(cors());
app.use(express.json());

// ✅ Root route – fixes "Cannot GET /"
app.get('/', (req, res) => {
  res.send(`
    <h2>✅ Backend server is running</h2>
    <p>Available endpoints:</p>
    <ul>
      <li>GET <a href="/api/hello">/api/hello</a> – test public route</li>
      <li>GET /api/users – get all users (public)</li>
      <li>POST /api/register – register new user</li>
      <li>POST /api/login – login user</li>
      <li>GET /api/profile – protected (requires JWT)</li>
    </ul>
    <p>Use Postman, Insomnia, or your frontend to call these APIs.</p>
  `);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ MongoDB Atlas connected!'))
  .catch(err => console.error('❌ MongoDB error:', err));

// User Schema (with hashed password)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// ---------- AUTH ROUTES ----------

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      name
    });
    
    await user.save();
    
    // Generate JWT
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, JWT_SECRET);
    
    res.status(201).json({ token, user: { id: user._id, email, name, isAdmin: user.isAdmin } });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, JWT_SECRET);
    
    res.json({ token, user: { id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Middleware to verify JWT
const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Example protected route
app.get('/api/profile', authenticate, async (req: any, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});

// Test route (public)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Backend with DB is alive!' });
});

// Get all users (public for testing)
app.get('/api/users', async (req, res) => {
  const users = await User.find({}, '-password');
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});