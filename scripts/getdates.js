// Define o ano atual no rodapé
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Define a data da última modificação no rodapé
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
