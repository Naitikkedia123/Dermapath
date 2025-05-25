// utils/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config(); // Load from .env

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'ChatImages', // Or change to 'MedicalReports' for better organization
    resource_type: 'auto', // Enables upload of images, PDFs, etc.
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'pdf'], // Add 'pdf'
  },
});

module.exports = {
  cloudinary,
  storage,
};