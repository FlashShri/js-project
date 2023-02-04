const fizzEl = document.getElementById('fizzinput');
const buzzEl = document.querySelector("#buzzinput");
const limitEl = document.querySelector("#limitinput");
const btnEl = document.querySelector("button");
const listEl = document.querySelector("#output");


btnEl.addEventListener("click", generateFizzBuzz);

function generateFizzBuzz(){
    if(limitEl.value <= 0){
        return -1;
    }
    let f = "fizz";
    let b = "buzz";
    let fb = "fizzbuzz";
    for(let i=1; i <= limitEl.value; i++){
        
        const liEl = document.createElement("li");
        if(i %fizzEl.value == 0 && i%buzzEl.value ==0){
            

            liEl.innerText = fb ;
            liEl.setAttribute("class", " fizzbuzz");
            listEl.appendChild(liEl)
        }else if(i%fizzEl.value ==0){
            
            liEl.innerText = f ;
            liEl.setAttribute("class", " fizz");
            listEl.appendChild(liEl)
        }else if(i%buzzEl.value == 0){
           
            liEl.innerText = b ;
            liEl.setAttribute("class", " buzz");
            listEl.appendChild(liEl)

        }else{
            
            liEl.innerText = i ;
            liEl.setAttribute("class", " number");
            listEl.appendChild(liEl)
        }
       
    }

    
}





function printFizzBuzz(num){
    if(num <= 0){
        return -1;
    }
    for(let i=1; i <= num; i++){

        if(i %3 == 0 && i%5 ==0){
            console.log("fizzbuzz");
        }else if(i%3 ==0){
            console.log("fizz");
        }else if(i%5 == 0){
            console.log("buzz");

        }else{
            console.log(i);
        }
       
    }
}

