
const d = new Date();
const fulldate = `Last Updated: ${("0"+d.getMonth()+1).slice(-2)}/${("0"+d.getDate()).slice(-2)}/${d.getFullYear()}
${("0"+d.getHours()).slice(-2)}:${("0"+d.getMinutes()).slice(-2)}:${("0"+d.getSeconds()).slice(-2)}`;
document.querySelector("#date2").textContent = fulldate;