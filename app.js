const keyValueBtn = document.querySelector("#keyValue");
const keyCodeBtn = document.querySelector("#keyCode");
const keyCharBtn = document.querySelector("#charCode");
const main = document.querySelector("#heading");

window.addEventListener("keydown", (event) => {     
    keyValueBtn.innerHTML = event.key;
    keyCodeBtn.innerHTML = event.code;
    keyCharBtn.innerHTML = event.which; 
    main.innerHTML = event.keyCode;
})

