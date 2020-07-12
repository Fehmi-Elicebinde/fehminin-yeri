let sozluk;
let ref;
function setup() {
	// Retrieve and show the sozluk onload
	sozluk = JSON.parse(localStorage.getItem("sozluk") || "{}");
	showSozluk();
	
	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyBzcxUnJl1AWudm5WFWFijVUzEnBMa_SI8",
		authDomain: "guneysozluk.firebaseapp.com",
		databaseURL: "https://guneysozluk.firebaseio.com",
		projectId: "guneysozluk",
		storageBucket: "guneysozluk.appspot.com",
		messagingSenderId: "1097891878522",
		appId: "1:1097891878522:web:19ee7da0a82f73caf0cdc3"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	const db = firebase.database();
	ref = db.ref("entries");
}

function update() {
	console.log("updating..")
	// Get the unordered list element 
	const liste = document.getElementById("sözlük");
	// Update the innerHTML by what user typed
	liste.innerHTML = "<li>" + fname.value + ": " + lname.value + "</li>" + liste.innerHTML;
	// Save the word: meaning pair to the object and save to local storage 
	sozluk[fname.value] = lname.value;
	localStorage.setItem("sozluk", JSON.stringify(sozluk));
	
	ref.push({
		"word":fname.value,
		"meaning":lname.value
	});

	// Refresh the view of sozluk
	//showSozluk();
}

function showSozluk() {
	console.log("showing 1 time only?..")
	// Select the unordered list and fill its HTML by sozluk's elements
	const liste = document.getElementById("sözlük");
	for (const [key, value] of Object.entries(sozluk)) {
		liste.innerHTML = "<li>" + key + ": " + value + "</li>" + liste.innerHTML;
	}
}

// sıfırlamak
// localStorage.setItem("sozluk", JSON.stringify({}));