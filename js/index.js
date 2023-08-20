
let img_local_storage;
let dbName = "entries";
var db = new PouchDB(dbName);

db.destroy().then(
	function() {

		db = new PouchDB( dbName );

	}
).then(
	function() {

		// Perform and return some async operation against PouchDB.

	}
).then(
	function() {

		// Perform and return some async operation against PouchDB.

	}
).then(
	function() {

		// Perform and return some async operation against PouchDB.

	}
).catch(
	function( error ) {

		console.warn( "An error occurred:" );
		console.error( error );

	}
);
// New Entry
const newEntry = (e) => {
    e.preventDefault();
    const pair = $("#pair").val();
    const entry = $("#entry").val();
    const invalidation = $("#invalidation").val();
    const exit = $("#exit").val();
    const entry_reason = $("#entry_reason").val();
    const entry_date = $("#entry_date").val();
    const data = {
        pair,entry,invalidation,exit,entry_reason, entry_date,img_local_storage
    }
    
    return data;    

}
const img = document.querySelector("#img");
img.addEventListener("change", e => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    img_local_storage = reader.result;

})
document.querySelector("#entry_form").addEventListener('submit', newEntry);

// List entries

const loadEntries = () => {
    console.log()
}