const dateEl = document.getElementById("date");
const expEl = document.getElementById("exinput");
const catEl = document.getElementById("categoryOption");
const pmEl = document.getElementById("payoption");
const amtEl = document.getElementById("amount");
const btnEl = document.getElementById("submit");
const tbodyEl = document.querySelector(".tablebody");




btnEl.addEventListener("click", addentry() );

function addentry() {

const tRowEl = document.createElement("tr");
tRowEl.setAttribute("class", "row");
tbodyEl.appendChild(tRowEl);


const tdEl1 = document.createElement("td");
tdEl1.innerText = dateEl ;
tdEl1.setAttribute("class", "datecol");
tRowEl.appendChild(tdEl1);

const tdEl2 = document.createElement("td");
tdEl2.innerText = expEl;
tdEl2.setAttribute("class", "expcol");
tRowEl.appendChild(tdEl2);

const tdEl3 = document.createElement("td");
tdEl3.innerText = catEl;
tdEl3.setAttribute("class", "catcol");
tRowEl.appendChild(tdEl3);

const tdEl4 = document.createElement("td");
tdEl4.setAttribute("class", "pmcol");
tRowEl.appendChild(tdEl4);

const tdEl5 = document.createElement("td");
tdEl4.innerText = `₹ ${amtEl}`
tdEl5.setAttribute("class", "amtcol");
tRowEl.appendChild(tdEl5);



}