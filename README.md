# Test technique Raphael Picard pour InTeach

```
Développez une petite application web (en JS) pour proposer aux utilisateurs une interface de gestion de modules de formation. Les contraintes sont les suivantes:
- Charger les données depuis une fixture (au moins 5 modules)
- Afficher les modules
- Avoir la possibilité d'ajouter / éditer / supprimer un module

Bonus 1 : Utiliser React
Bonus 2 : Ecrire en ES6
Bonus 3 : Utiliser Redux
Bonus 4 : Utiliser Redux-Saga

Bonne chance !
```

## Pour récupérer une copie de mon test :

```
git clone git@github.com:PicardRaphael/InTeach-Test-Technique-.git

cd InTeach-Test-Technique

yarn

yarn start
```

## Stack technologique

- Yarn ([lien][1]) : J'utilise yarn comme gestionnaire de paquets car je le trouve plus rapide que npm et nous l'utilisons en cours.

- Webpack ([lien][2]) : J'utilise webpack pour "bundler" car il permet de transpiler/compiler le code pour qu'il soit valide pour une machine et qu'il soit compatible avec les anciennes versions de js grâce à Babel.Cela nous permet aussi d'avoir un 'serveur' de production. Je le préfère à Parcel ([lien][4]) car il est plus configurable et nous l'utilisons en cours.

- Design : Pour le design j'ai voulu utiliser 'Material-ui ([lien][3])' car je trouve qu'il est plus complémentaire avec React et suit les règles de google Material Design. J'ai cependant vu que vous utilisiez Bootstrap pour votre site internet et je peux aussi l'utiliser ayant déjà réalisé plusieurs projets avec.

- WakaTime ([lien][5]) : Pour voir le nombre de temps que j'ai passé sur votre test

## Architecture logicelle

- Google Drive : [lien][6]

## Mot de la fin

J'ai vraiment pris beaucoup de plaisir à réaliser ce test. 
Je sais que le code peut être amélioré ainsi que certaines fonctionnalités mais j'ai eu peu de temps pour réaliser le test sachant que mes journées sont chargées par les cours et challenges que nous devons réaliser. 

De plus, c'est la première fois que j'utilisai Material-UI et j'ai dû le prendre en main rapidement mais je pourrais optimiser son utilisation lorsque j'aurai plus de temps pour l'étudier.
Je n'ai pas utilisé Redux car je commence tout juste de le voir en cours et je voulais vous rendre quelque chose de fonctionnelle dans la deadline.

Pour l'architecture logicielle, je n'ai jamais vu comment celui-ci se réalise. Cependant vous trouverez sur le google drive [lien][6], ce qui est pour moi actuellement une architecture logicielle. Vu mon manque de temps, je n'ai pas pu me renseigner correctement sur internet mais je le ferrai quand j'aurai le temps. De plus je sais que si je réalise mon alternance, je le verrai en cours.

[1]: https://yarnpkg.com/fr/
[2]: https://webpack.js.org/
[3]: https://material-ui.com/
[4]: https://parceljs.org/
[5]: https://wakatime.com/@e60d35d2-f0e3-42ea-b8e3-b1396bc03d40/projects/qicgrgxike?start=2018-08-16&end=2018-08-22
[6]: https://drive.google.com/drive/folders/1kpLtdSZfrim4Y9LlR9n1deJfOAoJxJXz?usp=sharing
