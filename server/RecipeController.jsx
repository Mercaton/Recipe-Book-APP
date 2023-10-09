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

export.getRecipeById = asyns (req, res) => {
    const {id} = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({error: 'Przepis nie został znaleziony'})
        }
    }
}