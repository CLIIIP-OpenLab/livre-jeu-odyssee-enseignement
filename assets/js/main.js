const currentVersionElement = document.getElementById("currentVersion");

if (currentVersionElement) {
  currentVersionElement.textContent = window.odysseeWebVersion || new Date().toISOString().slice(0, 10);
}
