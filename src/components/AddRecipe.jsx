import React, { useState } from 'react';
// import Recipe from 'server/RecipeSchema';


const AddRecipe = () => {
    // Inicjalizujemy stan dla pól formularza
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState('');

    // Funkcja obsługująca przesłanie formularza
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Tutaj możesz wykorzystać dane z formularza, np. przesłać do bazy danych
        console.log('Tytuł: ', title);
        console.log('Składniki: ', ingredients);
        console.log('Instrukcje: ', instructions);
        console.log('Zdjęcie', image);

        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            image,
        });

        newRecipe.save()
            .then(() => {
            console.log('Przepis został dodany do bazy danych')


        })
            .catch((error) => {
                console.error('Błąd podczas dodawania przepisu', error)
            });

        // Czyszczenie pól formularza po wysłaniu
        setTitle('');
        setIngredients('');
        setInstructions('');
        setImage('');

    };


    return (
        <section className="add-recipe__wrapper">

            <form className="recipeform" onSubmit={handleFormSubmit}>
                <h1 className="addrecipe-hdl">Dodaj nowy przepis</h1>
                <label>
                    Tytuł:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Składniki:
                    <textarea
                        value={ingredients}
                        rows="4"
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Instrukcje:
                    <textarea
                        value={instructions}
                        rows="4"
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Dodaj zdjęcie:
                    <input type="file" id="myFile" />
                </label>
                <button
                    className="add-btn"
                    role="button"
                    type="submit"><span className="text">Dodaj przepis</span></button>
            </form>
        </section>
    );
};

export default AddRecipe;

//