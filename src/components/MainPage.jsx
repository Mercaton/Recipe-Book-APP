import React from 'react';


function MainPage() {
    return (
        <>
            <section className="main-page">
                <div className="recipe-list">
                    <a href="/details"><div className="recipe-details"><img src="/src/assets/images/Daily-Dish-5-1030x1023.jpg" alt=""/><h3 className="recipe-title">Jajko sadzone</h3></div></a>
                    <div className="recipe-details"><img src="/src/assets/images/pumpkin-curry-soup-recipe.jpg" alt=""/><h3 className="recipe-title">Zupa dyniowa z mlekiem kokosowym</h3></div>
                    <div className="recipe-details"><img src="/src/assets/images/Tuna-Pasta-Salad-3-683x1024.jpg" alt=""/><h3 className="recipe-title">Sałatka z tuńczykiem</h3></div>
                    <div className="recipe-details"><img src="/src/assets/images/pumpkin-curry-soup-recipe.jpg" alt=""/><h3 className="recipe-title">Tiramisu</h3></div>
                </div>
            </section>


        </>
    );
}

export default MainPage;