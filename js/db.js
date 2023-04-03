// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGN9iQshesdS6QNdLt3dfeYVTUeQrvyOw",
    authDomain: "taksowapp.firebaseapp.com",
    projectId: "taksowapp",
    storageBucket: "taksowapp.appspot.com",
    messagingSenderId: "155077381932",
    appId: "1:155077381932:web:67b2d9602986f1e051a689",
    measurementId: "G-ZPMRT1SR91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Read data
const querySnapshot = await getDocs(collection(db, "cars")); 


const querySnapshot = await getDocs(collection(db, "cars"));
const tableBody = document.querySelector(".table-body");
console.log(tableBody)
querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.data()['brand'],doc.data()['model'],doc.data()['vehType'],doc.data()['year'].toDate(),doc.data()['price'],doc.data()['amount'],doc.data()['isNew'],doc.data()['engine']);
    let tableRow = "<tr><td>" +
        doc.data()['brand'] + "</td>" +
        "<td>" + doc.data()['model'] + "</td>" +
        "<td>" + doc.data()['amount'] + "</td>" +
        "<td>" + doc.data()['isNew'] + "</td>" +
        "<td>" + doc.data()['model'] + "</td>" +
        "<td>" + doc.data()['price'] + "</td>" +
        "<td>" + doc.data()['vehType'] + "</td>" +
        "<td>" + doc.data()['year'].toDate().getFullYear() + "</td>" +
        "<td>" + doc.data()['engine'] + "</td>"
        
    tableBody.innerHTML += tableRow;
});