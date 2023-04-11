const entryWB = document.querySelector(".welcomeBox")
const entryH = document.querySelector("header")
const entryF = document.querySelector("footer")
const selectorEntry = document.querySelector(".lienEntree")

selectorEntry.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
})
