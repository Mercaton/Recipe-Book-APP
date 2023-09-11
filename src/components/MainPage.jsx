import React from 'react';
import Header from "./Header.jsx";

function MainPage() {
    return (
        <>
            <section className="main-page">
                <div className="recipe-list">
                    <div className="recipe-details"><img src="/src/assets/images/Daily-Dish-5-1030x1023.jpg" alt=""/><h3 className="recipe-title">Jajko sadzone</h3></div>
                    <div className="recipe-details"><img src="/src/assets/images/pumpkin-curry-soup-recipe.jpg" alt=""/><h3 className="recipe-title">Zupa dyniowa z mlekiem kokosowym</h3></div>
                    <div className="recipe-details"><img src="" alt=""/><h3 className="recipe-title"></h3></div>
                    <div className="recipe-details"><img src="" alt=""/><h3 className="recipe-title"></h3></div>
                </div>
            </section>


        </>
    );
}

export default MainPage;