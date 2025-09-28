Next Blog App
A simple Next.js based blogging application with MongoDB integration for seamless content management and user interaction.

Setup Instructions
How to Setup & Run this Project
❖ Install NodeJs (Ignore if already installed)
Visit the official Node.js website: https://nodejs.org/en/download/
Download the installer, run it, and follow the prompts.

❖ Steps to Setup and Run the Project

Open the project folder in VS Code.

Open the integrated terminal (Right-click on sidebar → “Open In Integrated Terminal”).

Run the command:

text
npm install
Wait for the installation to complete (requires internet).

Setup MongoDB:
a. Open this link - LINK (replace with your actual MongoDB signup URL)
b. Sign up on the website.
c. Click on “New Project” option.
d. After project creation, go to the “Database” section and build a database.
e. Select M0 & your region and create the database.
f. Setup a username & password (avoid the ‘@’ symbol in password), create the user.
g. Finish & close database setup.
h. Whitelist IP 0.0.0.0 by clicking “Add Entry”.
i. Click “Connect” then select “Compass” option.
j. Copy the connection string.
k. Paste the connection string in db.js file located at:
lib/config/db.js
Replace the password placeholder with your actual password and save the file.

Run the project in integrated terminal:

text
npm run dev
Copy the localhost URL from the terminal and open it in your browser to view the app.

Dependencies
Next.js 14.0.4

React 18

Mongoose 8.1.0

Axios 1.6.5

TailwindCSS 3.3.0

React Toastify 10.0.3

ESLint 8 with Next plugin

Environment Variables & Database Setup
The project requires a MongoDB database connection.

Set the connection URI as MONGODB_URI in a .env.local file in the blog-app directory.

The connection string should be obtained from your MongoDB service and updated in lib/config/db.js.

See the Setup MongoDB section above for detailed instructions.

AI Tool Usage Disclosure
This project utilized AI tools during development:

ChatGPT: Assisted in generating code snippets, debugging errors, and creating documentation content.

GitHub Copilot: Provided code completion suggestions to speed development.

Screenshots and conversation logs of AI assistance have been maintained to comply with disclosure requirements.

