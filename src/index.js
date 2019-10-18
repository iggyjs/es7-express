import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'

import addressesRoutes from './routes/addresses.route'

// const db = require("./db");
const app = express();
const PORT = process.env.PORT || 8080;

/*
*
* Global middleware
*
*/

// Log out all requests
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Easy access to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Helmet for security
// https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());

/*
*
*  Routes
*
*/
app.use('/addresses', addressesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT} ...`);
    // db()
    // .then(() => {
    //     console.log('Connected to MongoDB')
    // });
});

// We export our app so we can pull it in to our tests
export default app
