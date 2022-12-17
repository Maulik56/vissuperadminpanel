importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyACSwi8q1t-Q943_GfWTWHvLrwPgNT6KYA",
  authDomain: "viscan-doctor.firebaseapp.com",
  projectId: "viscan-doctor",
  storageBucket: "viscan-doctor.appspot.com",
  messagingSenderId: "303762464487",
  appId: "1:303762464487:web:61ebbbb1675578f3b70c42",
  measurementId: "G-H9WTCMWCCF",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
