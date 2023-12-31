const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override')



const route = require('./routes');
const db = require('./config/db');



//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// http logger
//app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers:{
            sum: (a,b) => a + b,
        }
    }),
    
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

route(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
