const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const mongoURI = process.env.MongoDb || 'your-default-mongodb-uri';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const courseSchema = new mongoose.Schema({
  description: String,
  thumbnailUrl: String,
  videoUrl: String,
});

const Course = mongoose.model('Course', courseSchema);

app.use(express.json());
app.use(cors()); // Enable CORS

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// User login route
app.post('/logins', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload course route
app.post('/upload', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
  const { description } = req.body;
  const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0] : null;
  const video = req.files['video'] ? req.files['video'][0] : null;

  if (!description || !thumbnail || !video) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const course = new Course({
      description,
      thumbnailUrl: `http://localhost:${PORT}/uploads/${thumbnail.filename}`,
      videoUrl: `http://localhost:${PORT}/uploads/${video.filename}`,
    });

    await course.save();

    res.status(200).json({ message: 'Upload successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all courses route
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
