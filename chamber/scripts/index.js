const current_year = new Date();
const modified = new Date(document.lastModified);

var semana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var mes = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const footer_name = `${current_year.getFullYear()} Smooth Chamber | José Meirelles | WDD 230 Project | Last Modification: ${("0"+modified.getMonth()+1).slice(-2)}/${("0"+modified.getDate()).slice(-2)}/${modified.getFullYear()}
${("0"+modified.getHours()).slice(-2)}:${("0"+modified.getMinutes()).slice(-2)}:${("0"+modified.getSeconds()).slice(-2)}`;

const header_name = `${semana[modified.getDay()]}, ${("0"+modified.getDate()).slice(-2)} ${mes[(modified.getMonth())]} ${current_year.getFullYear()}`;


document.querySelector("#name-footer").textContent = document.querySelector("#name-footer").textContent + footer_name;
document.querySelector("#date").textContent = document.querySelector("#date").textContent + header_name;


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
