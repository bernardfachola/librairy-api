require(`dotenv`).config();
const express = require(`express`);
const mongoose =require(`mongoose`);
const dotenv = require(`dotenv`);
const bookRoutes = require(`./routes/bookRoutes`);
// const module = require(`./node_modules`);
//route auteur
const authorRoutes = require(`./routes/authorRoutes`);
const authRoutes = require(`./routes/authRoutes`);



// Routes d'authentification
const authenticateToken = require(`./middleware/authMiddleware`);
const connectDB = require("./config/db");
dotenv.config();

const app = express();

//analy des donnes j.son
app.use(express.json());

connectDB();

//route non protégée
   app.use(`/api/auth`, authRoutes);

//authentification
   app.use(`/api/books`, bookRoutes);

//routes pour protégée par jwt
   app.use(`/api/authors`, authenticateToken, authorRoutes);
//pos/put.......
   app.use(`/api/books`, authenticateToken, bookRoutes);


//Gestion des routes qui n'existent pas
app.use((req, res, next)=>{
   res.status(404).json({message: `rout non trouver`});
});

//Execution du server
const PORT= process.env.PORT|| 3000;
app.listen(PORT,()=>{
   console.log(`Serveur demarré sur http://localhost:${PORT}`)
});