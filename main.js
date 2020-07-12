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
	ref.on("value", gotData, gotError);
}

function update() {
	console.log("updating..")
	
	// Get the unordered list element 
	// const liste = document.getElementById("sözlük");
	
	// Update the innerHTML by what user typed
	//liste.innerHTML = "<li>" + fname.value + ": " + lname.value + "</li>" + liste.innerHTML;
	
	// Save the data to database
	ref.push({
		"word": unescape(encodeURIComponent(fname.value)),
		"meaning": unescape(encodeURIComponent(lname.value))
	});
	showSozluk();
}

function gotData(data) {
	console.log("veri geldi!")
	sozluk = data.val();
	showSozluk();
}

function gotError(err) {
	console.log("ERROR oh boy:", err);
	console.log("hata geldi!")
}
	
function showSozluk() {
	// console.log("showing 1 time only?..")
	
	// Select the unordered list and fill its HTML by sozluk's elements
	const liste = document.getElementById("sözlük");
	liste.innerHTML = "";
	
	for (const [key, value] of Object.entries(sozluk)) {
		const word = decodeURIComponent(escape(value.word));
		const meaning = decodeURIComponent(escape(value.meaning));
		liste.innerHTML = "<li>" + word + ": " + meaning + "</li>" + liste.innerHTML;
	}
}