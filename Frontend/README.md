# ArgentBank



## Mission 
### Contexte

Vous venez d’intégrer Argent Bank comme développeur front-end.
Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.
Vous travaillez avec Mila, la cheffe de projet, pour la mise en place du tableau de bord des utilisateurs. 

<details><summary><b>Mise en place du dashboard : phase 1</b></summary>
---
De : Avery Moreau
À : Mila, Vous
---

Bonjour Mila et l’équipe,

Nous allons pouvoir commencer à travailler sur notre application web React pour le nouveau système d'authentification des utilisateurs. 

Ayant des délais très serrés, nous comptons beaucoup sur l’équipe !

Voici un aperçu de ce dont nous avons besoin pour la **phase 1 : Authentification des utilisateurs**.

- Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Ce que doit faire l’application (voir les détails pour chacune des fonctionnalités sur nos modèles de GitHub Issues) :
    - L'utilisateur peut visiter la page d'accueil.
    - L'utilisateur peut se connecter au système.
    - L'utilisateur peut se déconnecter du système.
    - L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
    - L’utilisateur ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.

Vous pouvez commencer par forker notre repo existant et suivre l’avancement du travail en créant des issues GitHub, grâce aux modèles d’Issues que nous y avons incluses.

Nos ingénieurs back-end ont déjà créé toutes les routes API dont vous avez besoin. Vous trouverez toute la documentation Swagger à l'intérieur du repo.

Un petit point sur Redux. À ce stade de l'application, cela peut paraître un peu trop, pour le peu de données à passer entre les composants. Mais gardez bien en tête que lorsque nous travaillerons sur les transactions, nous aurons alors beaucoup plus de données à gérer.  

A noter lors de l’intégration du contenu des pages : nous aimerions mettre en place des bonnes pratiques de Green Code.
- Il faut veiller en particulier à 2 aspects lors de l’intégration : 
   - que les images soient optimisées tant sur le poids que sur les dimensions.
   - que le code soit optimisé par la création, le plus possible, de composants réutilisables.

Merci à vous, 
Je vous envoie un mail demain pour la deuxième étape. 
Avery.
</details>

<details><summary>Mise en place du dashboard : phase 2</summary>
---
De : Avery Moreau
À : Vous
---

Pour la phase 2 : Transactions, nous sommes encore en phase de conception. Nous mettons au point une fonctionnalité pour les transactions, qui doit pouvoir permettre aux utilisateurs :
    - de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
    - de visualiser les détails d'une transaction dans une autre vue ;
    - d'ajouter, de modifier ou de supprimer des informations sur une transaction (on ne supprimera ou n'ajoutera pas de transaction).

Afin d’avoir plusieurs avis sur la question, et comme vous travaillez sur l’application dans la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les routes API devraient être modélisées du côté back-end. Nous avons besoin que vous nous fournissiez un document décrivant les routes API proposées pour les manipulations sur les transactions, en suivant les directives de Swagger. 

Parmi les éléments clés à spécifier pour chaque endpoint de l’API, il faudra :
    - la méthode HTTP (ex. : GET, POST, etc.) ;
    - la route (ex. : /store/inventory) ;
    - la description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie) ;
    - les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire) ;
    - les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document soit exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans l'outil d'édition de Swagger.

Nous ferons une revue de code et discuterons ensemble de la proposition d'API une fois que tout sera terminé.

Au plaisir de travailler avec vous !

Avery Moreau
</details>

### Objectifs

- ** Utiliser React pour créer l'application **
- ** Site responsive **
- ** Utiliser React Router pour gérer les routes de l'application ** 
- ** Utiliser Redux pour gérer le state de l'ensemble de l'application **
- ** Mettre en place les bonnes pratiques du Green IT **
- ** Proposer les routes API pour les manipulations sur les transactions en utilisant Swagger **

### Comptes / Login

| Prénom | Nom    | Email            | Mot de passe    |
| ------ | ------ | ---------------- | --------------- |
| Tony   | Stark  | tony@stark.com   | password123     |
| Steve  | Rogers | steve@rogers.com | password456     |
| ------ | ------ | ---------------- | --------------- |

## Prerequisites

- You will need to have Node and `npm` installed locally on your machine.

> [!WARNING]  
> The [backend](https://github.com/Matthieu83600/ArgentBank-Backend) must also be installed in order to launch this project.

## Project setup

### Install
```
npm install
```

### Compiles and hot-reloads for development

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, you may also see any lint errors in the console.

```
npm run start
```

### Running tests

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run test
```

### Compiles and minifies for production

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run build
```

### Eject

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

```
npm run eject
```