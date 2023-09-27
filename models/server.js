const mongoose = require('mongoose');
const Recipe = require('../models/RecipeSchema');




app.post('api/recipes', async (req, res) => {
    try {
        const {title, ingredients, instructions, image} = req.body;

        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            image,
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Błąd podczas zapisywania przepisu', error);
        res.status(500).json({error: 'Wystąpił błąd podczas zapisywania przepisu.'});
    }
});