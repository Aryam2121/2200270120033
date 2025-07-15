2200270120033/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── data/
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
├── logging-middleware/
│   ├── .env
│   ├── log.js
│   └── package.json
└── README.md
backend/README.md
markdown
Copy code
# Backend Test Submission

##  Tech Stack Used
- Node.js
- Express.js
- dotenv
- node-fetch
- uuid
- CORS

##  How to Run

1. Navigate to the `backend` folder
2. Install dependencies:
npm install

markdown
Copy code
3. Start the backend server:
node index.js

swift
Copy code
4. Server will run at `http://localhost:3001`

> Ensure you have `logging-middleware`'s `.env` file properly set with your `BEARER_TOKEN`.

##  Folder Structure

backend/
├── controllers/ # URL shortening logic
├── middlewares/ # Logging middleware (uses external package)
├── routes/ # API endpoints
├── data/ # Optional JSON store
├── .env # Environment variables
├── index.js # Entry point
└── package.json

bash
Copy code

##  Sample API Screenshot
https://drive.google.com/file/d/11ApE8SdX6ZnCD5J4ejpt04HBcWr0qG_8/view?usp=sharing

- Use Postman to test:
  - `POST http://localhost:3001/shorturls`
  - `GET http://localhost:3001/shorturls/:shortcode`
