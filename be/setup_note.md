-- This is my note file, not a readme file --
-- Env set up --
npm install dotenv
Create .env file in root folder project (be)
Add variables to .env like DB_PASS = DWAH4H2HH42JK663JKJK52J
Need to add a line "require("dotenv").config()" before every file that use dotenv in itself

-- Database set up --
To connect with MSSQL, need to 'npm install mssql'
Then create a config file in src\config\db.js


-- Set up local LLM --
Run LLM local server on LMStudio
Then just call it like an API using https request with specific request BODY
Example BODY :
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer lm-studio"
        },
        body: JSON.stringify({
            model: "google/gemma-3-4b",
            messages: [
                {
                    role: "system",
                    content: "Luôn trả lời bằng tiếng Việt, ngắn gọn, văn bản thuần."
                },
                {
                    role: "user",
                    content: "Top 10 địa điểm nổi tiếng du lịch ở việt nam "
                }
            ],
            temperature: 0.7
        })

