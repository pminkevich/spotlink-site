const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: '*',
    credentials: false // si vas a usar cookies o auth headers
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
// end routes .//




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});