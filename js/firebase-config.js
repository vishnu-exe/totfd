import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

const firebaseConfig = {
	apiKey: "AIzaSyAjLbA3kR5_Wv5TL0l22FoQV4xKALGmAK4",
	authDomain: "fir-test-50fd5.firebaseapp.com",
	projectId: "fir-test-50fd5",
	storageBucket: "fir-test-50fd5.appspot.com",
	messagingSenderId: "290359929791",
	appId: "1:290359929791:web:e03863f1a8ac244f2dcf0a",
	measurementId: "G-Z3PGEJ3ELK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, firestore, storage };
