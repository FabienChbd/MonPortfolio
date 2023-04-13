import PortfolioCard from "./components/PortfolioCard"
import NavBar from "./components/NavBar"
import "./App.css"
import { useState } from "react"


function App() {

  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const currentPortfolio = portfolioList[portfolioIndex]
  return (
    <>
      <div className="portfolio">
        <h1>PORTFOLIO</h1>
        <div>
          <PortfolioCard portfolio={currentPortfolio} />
        </div>
        <div>
          <NavBar portfolioList={portfolioList} portfolioIndex={portfolioIndex} setPortfolioIndex={setPortfolioIndex} />
        </div>
      </div>

    </>
  )
}

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
];

export default App
