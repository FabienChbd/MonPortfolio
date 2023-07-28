// PORTFOLIO

const portfolioList = [
  {
    nom: "A beer for the Bear",
    imgSrc: "./Assets/Logo project 1.jpg",
    link: "https://fabienchbd.github.io/ProjectQuizz",
    linkGH: "https://github.com/FabienChbd/ProjectQuizz",
    desc: "Projet 1 lors de ma formation à la Wild Code School fait en Avril 2023 Languages utilisés : HTML, CSS et Vanilla JS",
  },
  {
    nom: "Dépots Git-Hub",
    imgSrc: "./Assets/Logo github.png",
    link: "https://github.com/FabienChbd",
    desc: "Mes dépots sur Git Hub",
  },
  {
    nom: "Pokedex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    link: "https://pokedex-fc.netlify.app/",
    linkGH: "https://github.com/FabienChbd/Pokedex",
    desc: "Une des quetes faite dans le cadre de ma formation à la WCS, la première en reactJS 04/2023",
  },
  {
    nom: "TindBeer",
    imgSrc: "./Assets/Rate_Your_Beer.png",
    link: "videoP2.html",
    linkGH: "https://github.com/WildCodeSchool/2023-02-JS-Valence-P2-Tindbeer",
    desc: "Projet 2 lors de ma formation à la Wild Code School en Mai 2023 Languages utilisés : HTML, CSS et React JS avec utilisation d'une API - Le site n'a pas été mise en ligne, une vidéo d'utilisation est disponible sur le lien ci dessous",
  },
  {
    nom: "Makesense",
    imgSrc: "./Assets/logo_makesense.png",
    link: "https://makesense-front.valence.wilders.dev/login",
    linkGH: "https://github.com/WildCodeSchool/2023-02-JS-Valence-P3-makesense",
    desc: "Projet 3 lors de ma formation à la Wild Code School en Juillet 2023 Languages utilisés : HTML, CSS et React JS en Frontend et Express en Backend. Gestion d'authentification via jetons et cookies. Site à accès limité, je peux vous fournir un accès test si nécessaire",
  },
  {
    desc: "BIENTOT D'AUTRES PROJETS...",
  },
];

const portfolioListOld = [
  {
    nom: "APE Le Sou de Maubec",
    imgSrc: "./Assets/Logo Maubec.jpg",
    link: "https://www.lesoudemaubec26.fr",
    linkGH: "https://github.com/FabienChbd/Asso",
    desc: "Site créé pour une assocation de parents d'éléves d'une école de Montélimar uniquement en HTML et CSS et quelques bases de PHP",
  },
  {
    nom: "Ancien site",
    imgSrc: "./Assets/Logo old site.jpg",
    link: "https://old.fabienchabaud.fr",
    desc: "La version précédente du site que vous consultez actuellement (jusqu'en 04/2023) uniquement en HTML et CSS",
  },
];

const cards = document.querySelector("#cards");

function createCard(imgSrc, nom, desc, link, linkGH) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  if (imgSrc === undefined) {
    const cardNoImg = document.createElement("p");
    cardNoImg.innerText = "";
    card.appendChild(cardNoImg);
  } else {
    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = imgSrc;
    cardImg.alt = nom;
    card.appendChild(cardImg);

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerText = nom;
    card.appendChild(cardTitle);
  }

  if (imgSrc === undefined) {
    const cardNoImgText = document.createElement("p");
    cardNoImgText.classList.add("cardNoImgText");
    cardNoImgText.innerText = desc;
    card.appendChild(cardNoImgText);
  } else {
    const cardText = document.createElement("p");
    cardText.classList.add("cardText");
    cardText.innerText = desc;
    card.appendChild(cardText);
  }
  if (link === undefined) {
    const cardNoLink = document.createElement("p");
    cardNoLink.innerText = "";
    card.appendChild(cardNoLink);
  } else {
    const cardLink = document.createElement("a");
    cardLink.href = link;
    cardLink.target = "_blank";
    card.appendChild(cardLink);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Visitez ce site";
    cardLink.appendChild(cardButton);
  }
  if (linkGH === undefined) {
    const cardNoLinkGH = document.createElement("p");
    cardNoLinkGH.innerText = "";
    card.appendChild(cardNoLinkGH);
  } else {
    const cardLinkGH = document.createElement("a");
    cardLinkGH.href = linkGH;
    cardLinkGH.target = "_blank";
    card.appendChild(cardLinkGH);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Git Hub";
    cardLinkGH.appendChild(cardButton);
  }
}

for (let i = 0; i < portfolioList.length; i++) {
  createCard(
    portfolioList[i].imgSrc,
    portfolioList[i].nom,
    portfolioList[i].desc,
    portfolioList[i].link,
    portfolioList[i].linkGH
  );
}

const cardsOld = document.querySelector("#cardsOld");

function createCardOld(imgSrc, nom, desc, link, linkGH) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardsOld.appendChild(card);

  if (imgSrc === undefined) {
    const cardNoImg = document.createElement("p");
    cardNoImg.innerText = "";
    card.appendChild(cardNoImg);
  } else {
    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = imgSrc;
    cardImg.alt = nom;
    card.appendChild(cardImg);

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerText = nom;
    card.appendChild(cardTitle);
  }

  if (imgSrc === undefined) {
    const cardNoImgText = document.createElement("p");
    cardNoImgText.classList.add("cardNoImgText");
    cardNoImgText.innerText = desc;
    card.appendChild(cardNoImgText);
  } else {
    const cardText = document.createElement("p");
    cardText.classList.add("cardText");
    cardText.innerText = desc;
    card.appendChild(cardText);
  }
  if (link === undefined) {
    const cardNoLink = document.createElement("p");
    cardNoLink.innerText = "";
    card.appendChild(cardNoLink);
  } else {
    const cardLink = document.createElement("a");
    cardLink.href = link;
    cardLink.target = "_blank";
    card.appendChild(cardLink);

    const cardButton = document.createElement("button");
    cardButton.innerText = "Visitez ce site";
    cardLink.appendChild(cardButton);
  }
  if (linkGH === undefined) {
    const cardNoLinkGH = document.createElement("p");
    cardNoLinkGH.innerText = "";
    card.appendChild(cardNoLink);
  } else {
    const cardLinkGH = document.createElement("a");
    cardLinkGH.href = linkGH;
    cardLinkGH.target = "_blank";
    card.appendChild(cardLinkGH);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Git Hub";
    cardLinkGH.appendChild(cardButton);
  }
}

for (let i = 0; i < portfolioListOld.length; i++) {
  createCardOld(
    portfolioListOld[i].imgSrc,
    portfolioListOld[i].nom,
    portfolioListOld[i].desc,
    portfolioListOld[i].link,
    portfolioListOld[i].linkGH
  );
}
