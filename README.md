# librairy-api
Voici un fichier README.md structuré et détaillé pourmton projet de gestion de bibliothèque, avec authentification JWT et CRUD pour les auteurs et les livres.

---

Library Management API

Description
Cette application est une API RESTful conçue pour gérer une bibliothèque. Elle inclut les fonctionnalités suivantes :
- Authentification des utilisateurs via JWT.
- CRUD (Create, Read, Update, Delete) pour les livres .
- CRUD pour les auteurs .
- Routes protégées nécessitant un token JWT pour les opérations sensibles.

Technologies utilisées
- Backend : Node.js avec Express.js
- Base de données : MongoDB (via Mongoose)
- Authentification : JSON Web Token (JWT)
- Environnement : Variables d'environnement gérées avec dotenv



Prérequis
Avant de démarrer, assurez-vous d'avoir :
- Node.js installé sur votre machine.
- MongoDB configuré (en local ou sur MongoDB Atlas).
- Un outil comme Postman pour tester les endpoints API.

---

Installation

1. Cloner le projet :
   bash
   git clone https://github.com/ton-repository/library-management-api.git
   cd library-management-api
   

2. Installer les dépendances :
   bash
   npm install
  

3. Configurer les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez-y les variables suivantes :
   env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>
   JWT_SECRET
   PORT=3000
   
4. Lancer l'application :*
   bash
   node app.js
   
   ou, pour un mode développement (si nodemon est installé) :
   bash
   npm run dev
   Endpoints

Authentification
MéthodeRouteFonctionnalitéProtectionPOST`/api/auth/register`Enregistrer un utilisateurAucunPOST`/api/auth/login`Connecter un utilisateurAucun*Auteurs*
MéthodeRouteFonctionnalitéProtectionPOST`/api/authors`Ajouter un nouvel auteurJWT TokenGET`/api/authors`Obtenir la liste des auteursJWT TokenGET`/api/authors/:id`Obtenir un auteur spécifiqueJWT TokenPUT`/api/authors/:id`Mettre à jour un auteurJWT TokenDELETE`/api/authors/:id`Supprimer un auteurJWT Token*Livres*
MéthodeRouteFonctionnalitéProtectionPOST`/api/books`Ajouter un nouveau livreJWT TokenGET`/api/books`Obtenir la liste des livresAucunGET`/api/books/:id`Obtenir un livre spécifiqueAucunPUT`/api/books/:id`Mettre à jour un livreJWT TokenDELETE`/api/books/:id`Supprimer un livreJWT Token

Utilisation


Tester les routes avec Postman
1. Créer un utilisateur :
   - Méthode : `POST`
   - URL : `http://localhost:5000/api/auth/register`
   - Body (JSON) :
   json
     {
         "email": "user@example.com",
         "password": "password123"
     }
    

2. Connecter l'utilisateur pour obtenir un JWT :
   - Méthode : `POST`
   - URL : `http://localhost:5000/api/auth/login`
   - Body (JSON) :
     json
     {
         "email": "user@example.com",
         "password": "password123"
     }
  
   - Copiez le token retourné pour les routes protégées.

3. Ajouter un auteur :
   - Méthode : `POST`
   - URL : `http://localhost:3000/api/authors`
   - Headers :
     
     Authorization: Bearer <Votre_Token_JWT>
     
   - Body (JSON) :
     json
     {
         "name": "Jean Pliya",
