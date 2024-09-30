// PORTFOLIO

const portfolioList = [
  {
    nom: "Dépots Git-Hub",
    imgSrc: "./assets/Logo github.png",
    link: "https://github.com/FabienChbd",
    desc: "Mes dépots sur Git Hub",
  },
  {
    nom: "A beer for the Bear",
    imgSrc: "./assets/Logo project 1.jpg",
    link: "https://fabienchbd.github.io/ProjectQuizz",
    linkGH: "https://github.com/FabienChbd/ProjectQuizz",
    desc: "Projet 1 lors de ma formation à la Wild Code School fait en Avril 2023 Languages utilisés : HTML, CSS et Vanilla JS",
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
    imgSrc: "./assets/Rate_Your_Beer.png",
    linkVideo: "videoP2.html",
    linkGH: "https://github.com/FabienChbd/2023-02-JS-Valence-P2-Tindbeer",
    desc: "Projet 2 lors de ma formation à la Wild Code School en Mai 2023 Languages utilisés : HTML, CSS et React JS avec utilisation d'une API - Le site n'a pas été mise en ligne, une vidéo d'utilisation est disponible sur le lien ci dessous",
  },
  {
    nom: "Makesense",
    imgSrc: "./assets/logo_makesense.png",
    linkVideo: "videoP3.html",
    linkGH: "https://github.com/FabienChbd/2023-02-JS-Valence-P3-makesense",
    desc: "Projet 3 lors de ma formation à la Wild Code School en Juillet 2023 Languages utilisés : HTML, CSS et React JS en Frontend et Express en Backend. Gestion d'authentification via jetons et cookies. Site à accès limité, je peux vous fournir un accès test si nécessaire",
  },
  {
    nom: "Don't Forget To",
    imgSrc: "./assets/DFT.jpg",
    link: "https://dontforgetto.onrender.com/",
    linkGH:
      "https://gist.github.com/FabienChbd/34e5161c70a676a49b90dcd913755708",
    desc: "Projet fait quelques semaines avant la fin de formation en 1 jour et demi avec utilisation de Prisma et Type Script. Site à accès limité, je peux vous fournir un accès test si nécessaire",
  },
  {
    nom: "Quizz for the bears",
    imgSrc: "./assets/QFTB.jpg",
    link: "https://quizzforthebears.onrender.com/",
    linkGH: "https://github.com/FabienChbd/quizz-for-the-bears",
    desc: "Dernier projet de la formation sous forme de checkpoint qui devait être réalisé en 2 jours (journées uniquement) - Utilisation de ReactJS en Frontend et Express en Backend. Base de données MySQL. Gestion de l'authentification via argon2. Site nécessitant un login mais vous pouvez le créer directement dans l'interface a cet effet.",
  },
];

const portfolioListOld = [
  {
    nom: "APE Le Sou de Maubec",
    imgSrc: "./assets/Logo Maubec.jpg",
    linkGH: "https://github.com/FabienChbd/Asso",
    desc: "Site créé pour une assocation de parents d'éléves d'une école de Montélimar uniquement en HTML et CSS et quelques bases de PHP",
  },
];

const cards = document.querySelector("#cards");

function createCard(imgSrc, nom, desc, link, linkVideo, linkGH) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  if (imgSrc != undefined) {
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

  if (desc != undefined) {
    const cardText = document.createElement("p");
    cardText.classList.add("cardText");
    cardText.innerText = desc;
    card.appendChild(cardText);
  }
  if (link != undefined) {
    const cardLink = document.createElement("a");
    cardLink.href = link;
    cardLink.target = "_blank";
    card.appendChild(cardLink);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Visitez ce site";
    cardLink.appendChild(cardButton);
  }
  if (linkVideo != undefined) {
    const cardLinkVideo = document.createElement("a");
    cardLinkVideo.href = linkVideo;
    cardLinkVideo.target = "_blank";
    card.appendChild(cardLinkVideo);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Démo vidéo";
    cardLinkVideo.appendChild(cardButton);
  }
  if (linkGH != undefined) {
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
    portfolioList[i].linkVideo,
    portfolioList[i].linkGH
  );
}

const cardsOld = document.querySelector("#cardsOld");

function createCardOld(imgSrc, nom, desc, link, linkVideo, linkGH) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardsOld.appendChild(card);

  if (imgSrc != undefined) {
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

  if (desc != undefined) {
    const cardText = document.createElement("p");
    cardText.classList.add("cardText");
    cardText.innerText = desc;
    card.appendChild(cardText);
  }
  if (link != undefined) {
    const cardLink = document.createElement("a");
    cardLink.href = link;
    cardLink.target = "_blank";
    card.appendChild(cardLink);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Visitez ce site";
    cardLink.appendChild(cardButton);
  }
  if (linkVideo != undefined) {
    const cardLinkVideo = document.createElement("a");
    cardLinkVideo.href = linkVideo;
    cardLinkVideo.target = "_blank";
    card.appendChild(cardLinkVideo);
    const cardButton = document.createElement("button");
    cardButton.innerText = "Démo vidéo";
    cardLinkVideo.appendChild(cardButton);
  }
  if (linkGH != undefined) {
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
    portfolioListOld[i].linkVideo,
    portfolioListOld[i].linkGH
  );
}
