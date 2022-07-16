var regexCode = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var err = document.querySelector("#err")
var input = document.querySelector("#in")
var jpg = document.querySelector(".icon-e")

input.addEventListener("input", () => {
    if(input.value.match(regexCode)){
        input.classList.add("y")
        input.classList.remove("x")
        err.classList.remove("disp")
        jpg.classList.remove("rev")
    }
    else{
        input.classList.remove("y")
        input.classList.add("x")
        err.classList.add("disp")
        jpg.classList.add("rev")
    }
})

function validation(){
    alert("Your Response was successfully received!")
}