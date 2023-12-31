const Recipe = require('server/RecipeSchema');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error('Błąd podczas pobierania przepisów', error);
        res.status(500).json({error: 'Wystąpił błąd podczaas pobierania przepisów'});
    }
};

exports.getRecipeById = async (req, res) => {
    const {id} = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({error: 'Przepis nie został znaleziony'});
        }
        res.json(recipe);
    } catch (error) {
        console.error('Błąd podczas pobierania przepisu', error);
        res.status(500).json({error: 'Wystąpił błąd podczas pobierania przepisu'});
    }
};

exports.createRecipe = async (req, res) => {
    const {title, ingredients, instructions, image} = req.body;
    try {
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
        res.status(500).json({error: 'Wystąpił błąd podczas zapisywania przepisu'});
    }
};

exports.updateRecipe = async (req, res) => {
    const {id} = req.params;
    const {title, ingredients, instructions, image} = req.body;
    try {
        const updateRecipe = await Recipe.findByIdAndUpdate(id, {
            title,
            ingredients,
            instructions,
            image,
        }, {new: true});

        if (!updateRecipe) {
            return res.status(404).json({error: 'Przepis nie został znaleziony'})
        }

        res.json(updateRecipe);
    } catch (error) {
        console.error('Błąd podczas aktualizacji przepisu', error);
        res.status(500).json({error: 'Wystąpił błąd podczas aktualizacji przepisu'})
    }
};

exports.deleteRecipe = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(id);

        if (!deleteRecipe) {
            return res.status(404).json({error: 'Przepis nie został znaleziony'})
        }

        res.json({message: 'Przepis został usunięty'});
    } catch (error) {
        console.error('Błąd podczas usuwania przepisu', error);
        res.status(500).json({error: 'Wystąpił błąd podczas usuwania przepisu'})
    }
};

