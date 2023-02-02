
// getting elements from html 
const qoutEl = document.getElementById("qoute");
const authEl = document.getElementById("author");
const btnEl  = document.getElementById("btn");


// API 
const apiURl = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
const apiKey = "rlYbedSJ3QEW5WpN4ccsCA==j5lVBHlA2624JPJb";
const apiobj = {
    method: "GET" ,
    headers: {
        "x-Api-Key": apiKey
    }
};


// asyns await function used to wait for getting response 
async function getQoute(){
   try {
   
    // changing the look for loading time
    qoutEl.innerText = "loading..." ;
    authEl.innerText = "---"
    btnEl.disabled = "true";
    btnEl.innerText = "loading...";


    //fetching data from api 
    const response = await fetch(apiURl, apiobj );
    const data = await response.json();
console.log(data[0].quote);
let text = data[0].quote;
    // puttting data into elements
   // typeText(qoutEl, text );
    qoutEl.innerText = data[0].quote ;
    authEl.innerText =`- ${data[0].author}` ;

    // after getting succeeful enable the button
    btnEl.disabled = false;
    btnEl.innerText = "Get a new qoute";


   } catch (error) {

    // if error occurd
    qoutEl.innerText = "Error!! try again later";
    authEl.innerHTML = "<span>&#128528</span>" ;
    btnEl.disabled = false;
    btnEl.innerText = "Get a new qoute";
    console.log(error);
   }
}
btnEl.addEventListener("click", getQoute);

// type effect
// function typeText (element, text) {

//     let i = 0;
//     let interval = setInterval(() => {
//         if(i < text.length) {
//             element.innerText += text.charAt(i);
//             i++ ;
//         } else {
//             clearInterval(interval);
//         }
//     }, 20)
// }