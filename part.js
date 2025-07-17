const iconOne = document.querySelector("#iconOne")
const menu = document.querySelector("#menu")
const btnInc = document.querySelector("#btnInc")
const zero = document.querySelector("#Zero")

console.log(iconOne, menu, btnInc , zero)

let count = 0

iconOne.addEventListener("click", () => {
   menu.classList.toggle("hidden")
})

btnInc.addEventListener("click", () => {
    count +=1
    zero.textContent = count
})