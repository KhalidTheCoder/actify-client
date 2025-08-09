# 🌱 Actify - Social Development Events Platform

**Live Site:** [https://actify-bc56f.web.app/](https://actify-bc56f.web.app/)  


---

## 📌 Project Purpose
Actify is a community-driven event management platform designed to promote local social development. Users can create, join, and track impactful events like cleanups, plantation drives, and donation camps in their area.

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Email/Password & Google)
- 📅 Create, manage & join social events
- 🔍 Filter & search upcoming events by type and title (MongoDB based)
- 🔄 JWT-protected private routes
- 🌗 Light/Dark Theme toggle
- 📦 Responsive design for mobile, tablet, and desktop
- 📧 Newsletter subscription (UI only)
- ✨ Animation using Framer Motion
- 📤 Hosted on Firebase (Client) & Vercel (Server)

---

## 🛠️ NPM Packages Used

### Client:
- `react-router`
- `firebase`
- `axios`
- `react-hook-form`
- `react-hot-toast`
- `framer-motion`
- `react-datepicker`
- `jwt-decode`
- `tailwindcss`
- `lottie-react` 

### Server:
- `express`
- `cors`
- `dotenv`
- `mongodb`
- `firebase-admin`
- `jsonwebtoken`

---

## ✅ Deployment
- **Client:** Firebase Hosting  
- **Server:** Vercel  
- **Environment Variables:** Secured via `.env` and Vercel Dashboard

---

> Made with 💚 to encourage local action & community growth.


---

## 🚀 How to Run Locally

1. **Clone both repositories:**

   ```bash
   git clone https://github.com/KhalidTheCoder/actify-client.git
   git clone https://github.com/KhalidTheCoder/actify-server.git

2. Set up and run the server:
   ```bash
   cd actify-server
   npm install
   nodemon index.js
   
3. Set up and run the client:
   
   Open a new terminal and navigate to the client directory:
     
    ```bash
    cd actify-client
    npm install

4. Create a .env file in the client folder and add your environment variables (example):
   
     ```ini
    VITE_API_URL=http://localhost:5000

    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id

5. Start the client:
   ```bash
   npm run dev

6. Open your browser and go to:
   ```arduino
   http://localhost:3000

