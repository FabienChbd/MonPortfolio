// PORTFOLIO

const portfolioList = [
    {
        nom: "APE Le Sou de Maubec",
        imgSrc: "./assets/Logo Maubec.jpg",
        link: "https://www.lesoudemaubec26.fr",
        desc: "Site créé pour une assocation de parents d'éléves d'une école de Montélimar uniquement en HTML et CSS et quelques bases de PHP",
    },
    {
        nom: "Ancien site",
        imgSrc: "./assets/Logo old site.jpg",
        link: "https://old.fabienchabaud.fr",
        desc: "La version précédente du site que vous consultez actuellement (jusqu'en 04/2023) uniquement en HTML et CSS",
    },
    {
        nom: "A beer for the Bear",
        imgSrc: "./assets/Logo project 1.jpg",
        link: "https://fabienchbd.github.io/ProjectQuizz",
        desc: "Projet 1 lors de ma formation à la WCS 04/2023 HTML, CSS et Vanilla JS",
    },
    {
        nom: "Dépots Git-Hub",
        imgSrc: "./assets/Logo github.png",
        link: "https://github.com/FabienChbd",
        desc: "Mes dépots sur Git Hub",
    },
    {
        nom: "Pokedex",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        link: "https://pokedex-fc.netlify.app/",
        desc: "Une des quetes faite dans le cadre de ma formation à la WCS, la première en reactJS 04/2023",
    },
    {
        desc: "BIENTOT D'AUTRES PROJETS...",
    },
];

const cards = document.querySelector('#cards')

function createCard(imgSrc, nom, desc, link) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    if (imgSrc === undefined) {
    const cardNoImg = document.createElement("p");
    cardNoImg.innerText= "";
    card.appendChild(cardNoImg)
}else {
    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = imgSrc;
    cardImg.alt = nom;
    card.appendChild(cardImg)

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerText = nom;
    card.appendChild(cardTitle)}

    if (imgSrc === undefined) {
        const cardNoImgText = document.createElement("p");
        cardNoImgText.classList.add("cardNoImgText")
        cardNoImgText.innerText= desc;
        card.appendChild(cardNoImgText)
    }else {

    const cardText = document.createElement("p");
    cardText.classList.add("cardText");
    cardText.innerText = desc;
    card.appendChild(cardText)}

    if (link === undefined) {
        const cardNoLink = document.createElement("p");
        cardNoLink.innerText= "";
        card.appendChild(cardNoLink)
    }else {

    const cardLink = document.createElement("a")
    cardLink.href = link;
    cardLink.target = "_blank";
    card.appendChild(cardLink)
    
    const cardButton = document.createElement("button")
    cardButton.innerText = "Visitez ce site"
    cardLink.appendChild(cardButton)}


}

for (let i = 0; i < portfolioList.length; i++) {
    createCard(portfolioList[i].imgSrc, portfolioList[i].nom, portfolioList[i].desc, portfolioList[i].link);
}