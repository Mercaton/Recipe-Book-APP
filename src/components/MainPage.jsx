import React, {useEffect, useState} from 'react';
import axios from 'axios';

// const openPopupButton = document.getElementById('openPopup');
// // const closePopupButton = document.getElementById('closePopup');
// const popup = document.getElementById('popup');
//
// openPopupButton.addEventListener('click', () => {
//     popup.style.display = 'block';
// });
//
// // closePopupButton.addEventListener('click', () => {
// //     popup.style.display = 'none';
// // });

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get('api/recipes')
            .then((response) => {
                setRecipes(response.data);
            })
            .catch((error) => {
                console.error('Błąd podczas pobierania przepisów', error);
            });
    }, []);

    return (
        <>
            <section className="main-page">
                <div className="recipe-list">
                    <a href="/details"><div className="recipe-details"><img src="/src/assets/images/Daily-Dish-5-1030x1023.jpg" alt=""/><h3 className="recipe-title">Jajko sadzone</h3></div></a>
                    <a href="/details"><div className="recipe-details"><img src="/src/assets/images/pumpkin-curry-soup-recipe.jpg" alt=""/><h3 className="recipe-title">Zupa dyniowa z mlekiem kokosowym</h3></div></a>
                    <a href="/details"><div className="recipe-details"><img src="/src/assets/images/Tuna-Pasta-Salad-3-683x1024.jpg" alt=""/><h3 className="recipe-title">Sałatka z tuńczykiem</h3></div></a>
                    <a href="/details"><div className="recipe-details"><img src="/src/assets/images/tiramisu-3.jpg" alt=""/><h3 className="recipe-title">Tiramisu</h3></div></a>
                </div>
            </section>


        </>
    );
}

export default MainPage;