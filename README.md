# P13_Bank-API_01-2022

Openclassrooms - Parcours développeur Front-end

## Projet 13 : Utilisez une API pour un compte utilisateur bancaire avec React

### Scénario :

Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application.

Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

### Mission :

Un contrat en deux parties qui se décompose en plusieurs phases :

#### Phase 1 : Authentification des utilisateurs :

Création d'une application Web permettant aux clients de se connecter et de gérer leurs comptes et leurs profils.

- Créer l’application web complète et responsive avec React.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.

Ce que doit faire l’application :

- L'utilisateur peut visiter la page d'accueil
- L'utilisateur peut se connecter au système
- L'utilisateur peut se déconnecter du système
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
- L'utilisateur peut modifier le profil et conserver les données dans la base de données.

#### Phase 2 : Transactions :

Spécifier les points de terminaison de l'API nécessaires pour la partie transaction qui devrait permettre aux utilisateurs de :

- visualiser toutes leurs transactions pour le mois en cours
- visualiser les détails d'une transaction dans une autre vue
- ajouter, modifier ou supprimer des informations sur les transactions.

Les éléments clés à spécifier pour chaque point de terminaison de l'API comprendront :

- La méthode HTTP (par exemple, GET, POST, etc.)
- La route (par exemple, /store/inventory)
- La description de ce à quoi le point de terminaison correspond (par exemple : Retour de l'inventaire des animaux de compagnie)
- Les paramètres possibles pour tenir compte des différents scénarios (par exemple, itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire)
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour ce point de terminaison (par exemple, 404 : réponse d'erreur pour un article inconnu).

Le document doit être exporté vers un fichier YAML en utilisant la syntaxe Swagger.

## Installation :

### Prérequis

- [NodeJS](https://nodejs.org/en/) Version 14.16.0
- [npm](https://www.npmjs.com/) Version 6.14.11
- [Visual Studio Code](https://code.visualstudio.com/) ou un autre IDE de votre choix

### Dependencies

- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Version 6.2.1
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Redux ToolKit](https://redux-toolkit.js.org/) Version 1.7.1
- [React-redux](https://react-redux.js.org/) Version 7.2.6
- [Redux](https://redux.js.org/) Version 4.1.2
- [Helmet](https://github.com/nfl/react-helmet) Version 6.1.0

### Installation et exécution du projet

#### Backend Api

- Clonez l'Api Backend sur votre ordinateur : `https://github.com/lallieau/Project-10-Bank-API` ou `https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API`

- Suivez les instructions d'installation dans le fichier readme fourni.

#### Frontend App

- Clonez ce référentiel sur votre ordinateur :
  git clone https://github.com/lallieau/P13_Bank-API_01-2022.git

- Dans ce dépôt, installez les paquets/dépendances : npm

- Exécutez l'application frontale : npm start

**Attention, actuellement seulement deux utilisateurs.**

**Tony Stark**

First Name: Tony
Last Name: Stark
Email: tony@stark.com
Password: password123

**Steve Rogers**

First Name: Steve
Last Name: Rogers
Email: steve@rogers.com
Password: password456

#### Phase 2 - Proposition - API Documentation

Le document décrivant les API de transaction proposées, suivant les directives Swagger, se trouve dans le dossier "swagger".
