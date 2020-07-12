let sozluk;
function setup() {
	// Retrieve and show the sozluk onload
	sozluk = JSON.parse(localStorage.getItem("sozluk") || "{}");
	showSozluk();
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
