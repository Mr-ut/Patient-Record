const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const connectDB = require('./config/db');
const PatientRecord = require('./models/PatientRecord.js')

const app = express();
const PORT =  8000;

connectDB();
app.use(cors());


// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
 
  app.post('/upload', upload.single('soundFile'), async (req, res) => {
    try {
      const { doctorName, patientName, patientAge, recordingDate } = req.body;
      const soundFilePath = req.file.path;
      const newPatientRecord = new PatientRecord({
        doctorName,
        patientName,
        patientAge,
        recordingDate,
        soundFilePath,
      });
      await newPatientRecord.save();
      res.status(201).json({ message: 'Recording uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });