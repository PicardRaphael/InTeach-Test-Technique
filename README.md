# Test technique Raphael Picard pour InTeach

Vous trouvez ci-joint le test technique que vous m'avez demandé :

```
Développez une petite application web (en JS) pour proposer aux utilisateurs une interface de gestion de modules de formation. Les contraintes sont les suivantes:
- Charger les données depuis une fixture (au moins 5 modules)
- Afficher les modules
- Avoir la possibilité d'ajouter / e?diter / supprimer un module

Bonus 1 : Utiliser React
Bonus 2 : Ecrire en ES6
Bonus 3 : Utiliser Redux
Bonus 4 : Utiliser Redux-Saga

Bonne chance !
```

## Récupérez une copie de mon test :

```
git clone git@github.com:PicardRaphael/InTeach-Test-Technique-.git

cd InTeach-Test-Technique-

yarn

yarn start
```

## Stack technologique

- Yarn ([lien][1]) : J'utilise yarn comme gestionnaire de paquets car je le trouve plus rapide que npm et nous l'utilisons en cours.

- Webpack ([lien][2]) : J'utilise webpack pour "bundler" car il permet de transpiler/compiler le code pour qu'il soit valide pour une machine et qu'il soit compatible avec les anciennes version de js grâce à Babel.Cela nous permet aussi d'avoir un 'server' de production. Je le préfère à Parcel ([lien][4]) car il est plus configurable et nous l'utilisons en cours.

- Design : Pour le design j'ai voulu utiliser 'Material-ui ([lien][3])' car je trouve qu'il est plus complémentaire avec React et suit les règles de google Material Design. J'ai cependant vu que vous utilisiez Bootstrap pour votre site internet et je peux aussi l'utilisé ayant déjà réaliser plusieurs projet avec.



[1]: https://yarnpkg.com/fr/
[2]: https://webpack.js.org/
[3]: https://material-ui.com/
[4]: https://parceljs.org/