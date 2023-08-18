const idField = document.getElementById("p_mis_student"); // Getting a reference to the ID field
chrome.storage.local.get("id_value", (obj) => {
	/*
	 * Writing the text saved in the browser to the ID field.
	 * If no text is saved on the browser then an empty string would be written instead.
	 */
	if (idField) idField.value = obj["id_value"] ? JSON.parse(obj["id_value"]) : "";
});
