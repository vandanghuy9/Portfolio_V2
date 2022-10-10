/**
 * Module handles database management
 *
 * Server API calls the methods in here to query and update the SQLite database
 */

// Utilities we need
const fs = require("fs");

// Initialize the database
const dbFile = "./.data/portfolio.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const dbWrapper = require("sqlite");
let db;

/* 
We're using the sqlite wrapper so that we can make async / await connections
- https://www.npmjs.com/package/sqlite
*/
dbWrapper
  .open({
    filename: dbFile,
    driver: sqlite3.Database
  })
  .then(async dBase => {
    db = dBase;

    // We use try and catch blocks throughout to handle any database errors
    try {
      // The async / await syntax lets us write the db operations in a way that won't block the app
      if (!exists) {
        // Database doesn't exist yet - create Contact tables
        await db.run(
          "CREATE TABLE Contact (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT,Email TEXT, Message TEXT,Date DATE )"
        );

      } else {
        // We have a database already - write Contact
        console.log(await db.all("SELECT * from Contact"));

        //If you need to remove a table from the database use this syntax
        //db.run("DROP TABLE Logs"); //will fail if the table doesn't exist
      }
    } catch (dbError) {
      console.error(dbError);
    }
  });

// Our server script will call these methods to connect to the db
module.exports = {

  /**
   * Insert a record
   */
  insertMessage: async (infor) => {
    // Insert new Log table entry indicating the user choice and timestamp
    try {
      if (infor.name && infor.email) {
        // Build the user data from the front-end and the current time into the sql query
        await db.run("INSERT INTO Contact (Name,Email,Message,Date) VALUES (?,?,?,?)", [
          infor.name, infor.emai,infor.message,
          new Date().toISOString()
        ],function(err){
          if (err){
            return console.log(err.message);
          }
          console.log('A row is inserted');
        });
      }
    } catch (dbError) {
      console.error(dbError);
    }
  },

  
};

