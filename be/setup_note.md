-- This is my note, not a readme file --
-- Env set up --
npm install dotenv
Create .env file in root folder project (be)
Add variables to .env like DB_PASS = DWAH4H2HH42JK663JKJK52J
Need to add a line "require("dotenv").config()" before every file that use dotenv in itself

-- Database set up --
To connect with MSSQL, need to 'npm install mssql'
Then create a config file in src\config\db.js


