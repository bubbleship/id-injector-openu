const idNumElement = document.getElementById("id_num"); // Getting a reference to the ID input element
chrome.storage.local.get("id_value", (obj) => {
	// If an ID text is already stored in the browser then it should appear on the extension popup
	if (idNumElement) idNumElement.value = obj["id_value"] ? JSON.parse(obj["id_value"]) : "";
});
idNumElement.addEventListener("change", () => {
	// Saving any modification to the ID text on the browser storage
	chrome.storage.local.set({ "id_value": JSON.stringify(idNumElement.value) });
});
