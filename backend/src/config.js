/**
 * config.js
 * 
 * This file exports the database configuration for Azure SQL and the connectDB 
 * function, which establishes the connection. It uses environment variables 
 * for sensitive data.
 */

require('dotenv').config();
const sql = require('mssql');

// Database configuration object using environment variables for security
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Enables encryption for Azure SQL
    enableArithAbort: true,
  },
};

/**
 * Establishes a connection to the Azure SQL database.
 * Logs a success or error message depending on the connection status.
 */
const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("Connected to Azure SQL Database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = { sql, connectDB };
