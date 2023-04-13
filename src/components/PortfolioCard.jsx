import "../App.css";



function PortfolioCard(props) {
    const portfolio = props.portfolio
    return (
        <>
            < figure className="card" >
                <img className="cardImg" src={portfolio.imgSrc} alt={portfolio.nom} />
                < figcaption className="cardText" > {portfolio.nom}</figcaption >
                <p>{portfolio.desc}</p>
                <a target="_blank" href={portfolio.link}>Accedez au site</a>
            </figure >
        </>)
}



export default PortfolioCard;