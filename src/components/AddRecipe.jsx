import React, { useState } from 'react';

const AddRecipe = () => {
    // Inicjalizujemy stan dla pól formularza
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    // Funkcja obsługująca przesłanie formularza
    const handleSubmit = (e) => {
        e.preventDefault();

        // Tutaj możesz wykorzystać dane z formularza, np. przesłać do bazy danych
        console.log('Tytuł: ', title);
        console.log('Składniki: ', ingredients);
        console.log('Instrukcje: ', instructions);

        // Czyszczenie pól formularza po wysłaniu
        setTitle('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <section className="add-recipe__wrapper">
            <h2 className="addrecipe-hdl">Dodaj nowy przepis</h2>
            <form className="recipeform" onSubmit={handleSubmit}>
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
                        // rows="5"
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Instrukcje:
                    <textarea
                        value={instructions}
                        rows="5"
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </label>
                <button className="add-btn" role="button" type="submit"><span className="text">Dodaj przepis</span></button>
            </form>
        </section>
    );
};

export default AddRecipe;