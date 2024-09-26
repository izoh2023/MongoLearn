const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the database
    await client.connect();
    
    const schoolDb = client.db('school');
    console.log('Connected to database');
    
    // Return the school database object
    return schoolDb;
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

module.exports = run;
