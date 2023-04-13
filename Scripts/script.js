const entryWB = document.querySelector(".welcomeBox")
const entryConct = document.querySelector(".contactBox")
const entryH = document.querySelector("header")
const entryF = document.querySelector("footer")
const entryM = document.querySelector(".mainBox")
const entryCV = document.querySelector(".CVBox")
const entryPort = document.querySelector(".portfolioBox")
const selectorEntry = document.querySelector(".lienEntree")
const selectorContact = document.querySelector(".contact")
const selectorCV = document.querySelector(".CV")
const selectorPort = document.querySelector('.portfolio')

selectorEntry.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "flex"
    entryConct.style.display = "none"
    entryCV.style.display = "none"
    entryPort.style.display = "none"
})

selectorContact.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "none"
    entryConct.style.display = "flex"
    entryCV.style.display = "none"
    entryPort.style.display = "none"
})

selectorCV.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "none"
    entryConct.style.display = "none"
    entryCV.style.display = "flex"
    entryPort.style.display = "none"
})

selectorPort.addEventListener("click", function () {
    entryWB.style.display = "none"
    entryH.style.display = "flex"
    entryF.style.display = "flex"
    entryM.style.display = "none"
    entryConct.style.display = "none"
    entryCV.style.display = "none"
    entryPort.style.display = "flex"
})