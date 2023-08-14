const idNumElement = document.getElementById("id_num");
chrome.storage.local.get("id_value", (obj) => {
	if (idNumElement) idNumElement.value = obj["id_value"] ? JSON.parse(obj["id_value"]) : "";
});
idNumElement.addEventListener("change", () => {
	chrome.storage.local.set({ "id_value": JSON.stringify(idNumElement.value) });
});
