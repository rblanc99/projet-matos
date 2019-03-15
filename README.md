# [Challenge DTY] Projet Gestion de Matos

Projet développé par Romain Blanc pour la Digital Tech Year.

## Résumé

Il s'agit d'un site visant à optimiser la gestion du parc de matériel de l'association Hyris.
Il offre la possibilité aux utilisateurs d'emprunter et de rendre du matériel.

## Technologies utilisées 

Ce site utilise les technologies suivantes :

### Front
Angular 7.2.8  [https://angular.io/](https://angular.io/) (auto-generated with Angular CLI 7.3.4)
Framework CSS Materialize [https://materializecss.com/](https://materializecss.com/)
Node 8.11.3 

### Back
J'ai developpé un back en ExpressJS et MongoDB fonctionnel (testé avec Postman), malheureusement je n'ai pas réussi à contourner les problèmes de Cross-Origin Request malgré de longues recherches.
Vous pouvez néanmoins le tester en suivant la procédure suivante : 
1) Assurez vous d'avoir téléchargé MongoDB [https://www.mongodb.com/](https://www.mongodb.com/)
2) Ouvir deux nouveaux terminaux 
2) Dans le premier, executer les commandes suivantes : cd back, mongod
3) Dans le deuxième : cd back, npm install, npm start
4) L'URL est : localhost:3000/products

Faute de mieux, j'ai donc utilisé une BDD Firebase de Google, accessible en open à l'adresse suivante : [https://backend-projet-matos.firebaseio.com](https://backend-projet-matos.firebaseio.com)
Par exemple [https://backend-projet-matos.firebaseio.com/appareils.json](https://backend-projet-matos.firebaseio.com/appareils.json)

## Procédure d'installation 

 - Se placer dans le répertoire courant.
 - Installer les node_modules avec npm install
 - Pour lancer l'application, executer la commande ng serve
 - Lancer votre navigateur et naviguez à l'URL [http://localhost://4200](http://localhost:4200)
 
 La BDD se charge toute seule depuis le web, **il faut donc être connecté à Internet** et attendre peut-être un peu selon la vitesse de votre connexion que la bdd se charge (le chargement est notifié dans la console une fois terminé).
Il peut être nécessaire de recharger le component en changeant de page. Avec une bonne connexion tout cela n'est pas nécessaire.

## Connexion

La connexion n'est **pas sécurisée**: le but était de pouvoir se connecter avec les identifiants du site hyris.tv des membres de l'association, ce qui s'est revelé plus complexe que je ne le pensais et j'ai donc manqué de temps pour implémenter cette fonctionnalité.

Pour se connecter avec le profil administrateur, entrer l'adresse mail 'admin@hyris.tv'

Pour se connecter avec n'importe quel autre profil, entrer son adresse mail (que vous trouverez sur la page 'Liste des users')

## Fonctionnalités 

L’**utilisateur** peut : 
-	Posséder un compte et s’y connecter
-	Voir la liste du matériel 
-	Effectuer une recherche parmi cette liste
-	Voir la liste des utilisateurs
-   Effectuer une recherche parmi cette liste
-	Emprunter du matériel disponible
-	Rendre du matériel qu’il a lui-même emprunté
-	Ne peut pas rendre du matériel qu’il n’a pas emprunté lui-même

L’**administrateur** peut : 
-	Modifier les fiches de matériel
-   Ajouter du matériel
-   Supprimer du matériel
-	Rendre du matériel qu’il n’a pas lui-même emprunté
-   Ajouter un utilisateur
-   Supprimer un utilisateur
-	Plus tout ce que peut faire un Utilisateur normal



