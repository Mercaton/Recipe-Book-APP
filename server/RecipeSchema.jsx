const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    image: String,

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;