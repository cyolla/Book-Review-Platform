📚 Book Review Platform – Full Stack Web Application

🔍 Description:

The Book Review Platform is a full-stack web application where users can submit and view reviews of books. It provides a simple interface for adding new reviews, listing all submitted reviews, and deleting existing ones. The platform is built using React for the frontend, Node.js + Express for the backend, and MongoDB for the database.

💠 Tech Stack:

Frontend: React, React Router DOM, Axios, CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Database: MongoDB

Tools: VS Code, Postman, npm

✨ Features:

📥 Add a ReviewUsers can submit book reviews including title, author, and review content.

📃 View All ReviewsAll submitted reviews are displayed in a list, ordered from newest to oldest.

❌ Delete ReviewEach review can be deleted with a single click.

🔄 Live UpdateReviews update without refreshing the page (React handles re-rendering).

📦 API IntegrationAxios is used to communicate between React frontend and Express backend.

💂 Folder Structure:

book-review-platform/
│
├── client/         → React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── AddReview.js
│   │   ├── AllReviews.js
│   └── public/
│
├── server/         → Node.js backend
│   ├── index.js
│   ├── .env
│   ├── models/
│   │   └── Review.js
│   └── routes/
│       └── reviewRoutes.js
│
└── README.md

🚀 How to Run:

Start Backend (server)

cd server
npm install
node index.js

Start Frontend (client)

cd client
npm install
npm start

Open your browser:http://localhost:3000

📝 Future Improvements (Optional Ideas):

✍️ User authentication (login/signup)

⭐ Star ratings

💬 Comments on reviews

🔍 Search/filter reviews

📊 Analytics/dashboard for review stats

