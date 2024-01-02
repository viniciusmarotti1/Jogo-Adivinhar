const inputNumber = document.querySelector("#inputNumber")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
document.addEventListener("keydown",(e)=>{
    if (e.key == 'Enter' && screen1.classList.contains("hide")) {
        handleReset()
    }
})

let randomNumber = Math.round(Math.random()*10)
let attempts = 1
console.log(randomNumber)


function handleClick(event){
    event.preventDefault()

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${attempts} tentativas!` 
    }
    
    inputNumber.value = ""
    attempts++
    
}

btnTry.addEventListener("click", handleClick)
btnReset.addEventListener("click", function handleReset(params) {   
        screen1.classList.remove("hide")
        screen2.classList.add("hide")
        attempts = 1
        randomNumber = Math.round(Math.random()*10)
})

