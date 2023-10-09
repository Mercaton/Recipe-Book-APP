const mongoose = require('mongoose');
const Recipe = require('/server/RecipeSchema');
const recipeRoutes = require('/server/RecipeRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/cookbook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Błąd połączenia z MongoDB:'));
db.once('open', () => {
    console.log('Połączono z bazą danych MongoDB')
});







app.use('api/recipes', recipeRoutes);

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