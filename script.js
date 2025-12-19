function toggleDropdown() {
  document.getElementById("download-dropdown")
    .classList.toggle("hidden");
}

// 🔥 Firebase config (REPLACE VALUES)
 const firebaseConfig = {
    apiKey: "AIzaSyAmpxZM9XqmTWE_oQDMTGUnUcTF0367AEk",
    authDomain: "clickthebutton-dc143.firebaseapp.com",
    projectId: "clickthebutton-dc143",
    storageBucket: "clickthebutton-dc143.firebasestorage.app",
    messagingSenderId: "636372836542",
    appId: "1:636372836542:web:2deff24e3662286b00feef"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const counterRef = db.ref("downloads/count");

// Live counter
counterRef.on("value", snap => {
  document.getElementById("downloadCount").innerText = snap.val() || 0;
});

// Increment on download
document.querySelectorAll(".dropdown a").forEach(link => {
  link.addEventListener("click", () => {
    counterRef.transaction(v => (v || 0) + 1);
  });
});
