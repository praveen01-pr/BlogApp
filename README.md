PraveenPrakash_WebDev_Assignment
Project Overview
Next Blog App is a blogging application built with Next.js and MongoDB. It features server-side rendering, API routes, and uses Tailwind CSS for styling. This project enables users to create, read, update, and delete blog posts efficiently.

Setup Instructions
How to Setup & Run this Project
❖ Install NodeJs (Ignore if already installed)
Visit the official Node.js website: https://nodejs.org/en/download/
Download the installer, run it, and follow the prompts.

❖ Run the following steps:

Open the project folder in Visual Studio Code.

Open the integrated terminal (Right-click on sidebar > Open In Integrated Terminal).

Run:

text
npm install
Wait for the installation to finish (internet connection required).

Setup MongoDB Database:
a. Sign up at your MongoDB service provider (replace LINK with actual signup link)
b. Create a new project and build a database.
c. Select M0 tier and your preferred region.
d. Create a database user with username and password (avoid '@' in the password).
e. Whitelist IP 0.0.0.0 for public access.
f. Get the connection string from the “Connect” option.
g. Paste the connection string into lib/config/db.js replacing the placeholder password with your actual password.

Start the app:

text
npm run dev
Open the URL provided in your terminal (usually http://localhost:3000) in a browser to use the app.

Dependencies
Next.js 14.0.4

React 18

Mongoose 8.1.0

Axios 1.6.5

TailwindCSS 3.3.0

React Toastify 10.0.3

ESLint 8 with Next plugin

Environment Variables & Database Setup
MongoDB URI must be set in a .env.local file in the blog-app directory as MONGODB_URI.

The connection string is used in the lib/config/db.js file to connect to MongoDB.
