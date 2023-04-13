import PortfolioCard from "./components/PortfolioCard"
import NavBar from "./components/NavBar"
import "./App.css"
import { useState } from "react"


function App() {

  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const currentPortfolio = portfolioList[portfolioIndex]
  return (
    <>
      <h1>PORTFOLIO</h1><div className="portfolio">
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
    imgSrc: "",
    link: "lesoudemaubec26.fr",
    desc: "Site créé pour une assocation de parents d'éléves d'une école de Montélimar",
  },
  {
    nom: "A beer for the Bear",
    imgSrc: "",
    link: "fabienchbd.github.io/ProjectQuizz",
    desc: "Projet 1 lors de ma formation à la WCS 04/2023",
  },
  {
    nom: "Dépots Git-Hub",
    imgSrc: "",
    link: "github.com/FabienChbd",
    desc: "Mes dépots sur Git Hub",
  },
];

export default App
