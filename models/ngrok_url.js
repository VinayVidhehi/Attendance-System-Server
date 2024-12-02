// Require Mongoose
const mongoose = require('mongoose');

// Define a schema for ngrok_urls collection
const ngrokUrlSchema = new mongoose.Schema({
  ngrok_url: String,
  is_active: Boolean, // Optional: if you have a flag to indicate if this URL is active
});

// Create a model based on the schema
const NgrokUrl = mongoose.model('Ngrok_url', ngrokUrlSchema);

// Export the model to use in other parts of your application
module.exports = NgrokUrl;
