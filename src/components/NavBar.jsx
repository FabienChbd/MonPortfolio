
import React, { useState } from 'react';

function NavBar({ portfolioList, portfolioIndex, setPortfolioIndex }) {



    const handleClickPrevious = () => {
        if (portfolioIndex > 0) {
            setPortfolioIndex(portfolioIndex - 1)
        }
    }

    const handleClickNext = () => {
        if (portfolioIndex < portfolioList.length - 1) {
            setPortfolioIndex(portfolioIndex + 1)
        }
    }

    const handleClickIndex = (index) => {
        setPortfolioIndex(index);
    }
    return (
        <>
            <div className="navigation">
                {portfolioIndex > 0 && < button onClick={handleClickPrevious}>Précédent</button>}
                {portfolioIndex < portfolioList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
            </div>
        </>
    )

}

export default NavBar

