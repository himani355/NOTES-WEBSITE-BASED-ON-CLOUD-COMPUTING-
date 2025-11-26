// ------------------------------
// Firebase Import
// ------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ------------------------------
// Firebase Config
// ------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDpU59HAsa6-yGAFJ_ZD0geJhZE68ZrK4c",
  authDomain: "notes--cloud.firebaseapp.com",
  projectId: "notes--cloud",
  storageBucket: "notes--cloud.firebasestorage.app",
  messagingSenderId: "608942304838",
  appId: "1:608942304838:web:fa605a201cd1920acde447",
  measurementId: "G-P6RKFB8Z7H"
};

// ------------------------------
// Firebase Initialization
// ------------------------------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ------------------------------
// DOM Elements
// ------------------------------
const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notes");

// ------------------------------
// Add Note
// ------------------------------
async function addNote() {
  const noteText = noteInput.value.trim();
  if (!noteText) return;

  try {
    await addDoc(collection(db, "notes"), {
      text: noteText,
      time: Date.now()
    });

    noteInput.value = "";
    loadNotes();
  } catch (error) {
    console.error("Error adding note:", error);
  }
}

// ------------------------------
// Load Notes
// ------------------------------
async function loadNotes() {
  notesDiv.innerHTML = "<p>Loading...</p>";

  try {
    const querySnapshot = await getDocs(collection(db, "notes"));
    notesDiv.innerHTML = "";

    querySnapshot.forEach((docSnap) => {
      const note = docSnap.data();

      notesDiv.innerHTML += `
        <div class="note">
          <p>${note.text}</p>
          <button onclick="deleteNote('${docSnap.id}')">Delete</button>
        </div>
      `;
    });

    if (!notesDiv.innerHTML.trim()) {
      notesDiv.innerHTML = "<p>No notes yet...</p>";
    }

  } catch (error) {
    console.error("Error loading notes:", error);
    notesDiv.innerHTML = "<p>Error loading notes.</p>";
  }
}

// ------------------------------
// Delete Note
// ------------------------------
async function deleteNote(id) {
  try {
    await deleteDoc(doc(db, "notes", id));
    loadNotes();
  } catch (error) {
    console.error("Error deleting note:", error);
  }
}

// ------------------------------
// Initial Load
// ------------------------------
loadNotes();

// Make functions accessible to HTML buttons
window.addNote = addNote;
window.deleteNote = deleteNote;
