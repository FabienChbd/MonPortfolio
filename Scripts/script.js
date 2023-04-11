const entryWB = document.querySelector(".welcomeBox")
const entryConct = document.querySelector(".contactBox")
const entryH = document.querySelector("header")
const entryF = document.querySelector("footer")
const entryM = document.querySelector(".mainBox")
const selectorEntry = document.querySelector(".lienEntree")
const selectorContact = document.querySelector(".contact")

selectorEntry.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "flex"
    entryConct.style.display = "none"
})

selectorContact.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "none"
    entryConct.style.display = "flex"
})
