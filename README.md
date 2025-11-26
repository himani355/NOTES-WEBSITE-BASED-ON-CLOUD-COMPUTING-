🌩️ Cloud Notes — A Beautiful Cloud-Based Notes App

A minimal, fast, aesthetic notes application that runs on localhost and stores your notes in the cloud using Firebase Firestore.

<div align="center">

📌 Tech Stack:
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge">
<img src="https://img.shields.io/badge/CSS-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge">
<img src="https://img.shields.io/badge/Firebase-orange?style=for-the-badge">
<img src="https://img.shields.io/badge/Localhost-8000-green?style=for-the-badge">

</div>
✨ Overview

Cloud Notes is a simple cloud-connected notes manager built using
HTML + CSS + JavaScript (Frontend) and Firebase Firestore (Cloud Database).

The project runs completely on localhost, using a Python HTTP Server, because Firebase does not work with raw file:// URLs.

✔ Add Notes
✔ Delete Notes
✔ Real Cloud Storage
✔ Fast UI
✔ Beginner Friendly

📸 Preview (Add Screenshots)
cloud-notes-app/
│── screenshots/
│      ├── homepage.png
│      ├── add-note.png
│      └── cloud-data.png

🚀 Features

⚡ Lightning-fast UI

📝 Create / Delete Notes

☁️ Cloud Storage using Firebase Firestore

🔄 Auto Refresh Notes

📱 Responsive layout

🔥 Works on Localhost

💾 Your data is stored safely in the cloud

📂 Folder Structure
cloud-notes/
│
├── index.html
├── style.css
├── app.js
├── README.md
└── screenshots/

🔧 Tech Used
Part	Technology
Frontend	HTML, CSS, JavaScript
Cloud Backend	Firebase Firestore
Local Server	Python HTTP Server
Editor	VS Code
🖥️ How to Run the Project (Localhost Setup)
1️⃣ Step 1 — Clone the repo
git clone https://github.com/yourusername/cloud-notes.git

2️⃣ Step 2 — Start Localhost

📌 Required because Firebase scripts do NOT load on file:///

Run this in CMD inside project folder:

cd "path/to/cloud-notes"
python -m http.server 8000


Now open:

http://localhost:8000


Your Cloud Notes App is LIVE 🎉

🔥 Firebase Setup (Already Done)

This project includes:

Firebase Config

Firestore Integration

CRUD Operations

If you want to use your own Firebase:

1. Create Firebase Project
2. Enable Firestore Database
3. Copy your config
4. Paste inside app.js

🧠 How It Works
User → Browser UI → JavaScript (app.js)
       ↓
   Firebase Firestore (Cloud)
       ↓
  Notes Saved / Loaded in Real-Time

🧩 Source Code (Important Files)
📌 index.html
<h2>Notes Cloud 📝</h2>
<input id="noteInput" placeholder="Write your note..." />
<button onclick="addNote()">Add</button>
<div id="notes"></div>
<script type="module" src="app.js"></script>

📌 app.js
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addNote() {
  const text = document.getElementById("noteInput").value;
  await addDoc(collection(db, "notes"), { text, time: Date.now() });
  loadNotes();
}

☁️ Why This Project Is “Cloud Computing”?

Uses real cloud storage (Firestore)

Serverless backend

Data synced across devices

Shows how cloud-hosted databases work

Demonstrates elasticity, scalability & remote persistence

🌈 Future Improvements

Dark Mode

Edit Notes

Login System

Categories
