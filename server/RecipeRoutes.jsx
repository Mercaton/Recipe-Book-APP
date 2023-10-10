const express = require('express');
const router = express.Router();
const recipeController = require('server/RecipeController');
const Recipe = require('server/RecipeSchema');

router.get('/', recipeController.getAllRecipes);

router.get('/:id', recipeController.getRecipeById);

// router.post('/', recipeController.createRecipe);
router.post('/recipes', async (req, res) => {
    try {
        const {title, ingredients, instructions, image} = req.body;

        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            image,
        })

        await newRecipe.save();
    } catch (error) {
        console.error('Błąd podczas dodawania przepisu', error);
        res.status(500).json({error: 'Wystąpił błąd podczas dodawania przepisu'})
    }
});


router.put('/:id', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;