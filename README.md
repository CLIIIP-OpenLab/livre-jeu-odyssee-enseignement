# Livre-jeu - L'Odyssée de l'enseignement

Adaptation web interactive de **L'Odyssée de l'enseignement**, une ressource pédagogique autour du livre-jeu en enseignement supérieur.

Le site propose deux entrées complémentaires :

- `index.html` : présentation pédagogique, repères théoriques et kit de conception
- `game.html` : expérience de lecture interactive du livre-jeu

## Objectif

Cette ressource a été conçue pour :

- faire découvrir le concept de livre-jeu pédagogique
- montrer comment un récit à embranchements peut soutenir l'engagement, l'autonomie et l'individualisation
- mettre à disposition un ensemble de documents et de ressources réutilisables

## Contenu du dépôt

- `index.html` : page d'accueil et présentation de la ressource
- `game.html` : version jouable dans le navigateur
- `assets/` : styles, scripts, images, polices et dépendances front-end
- `docs/` : documents d'accompagnement, modèle de conception et versions exportées du livre-jeu

## Mise en ligne

Ce projet est conçu pour un hébergement statique simple, par exemple avec **GitHub Pages**.

Une fois le dépôt publié, le site pourra être accessible à une adresse du type :

`https://<votre-compte>.github.io/livre-jeu-odyssee-enseignement/`

## Lancer le site en local

Comme il s'agit d'un site statique, il suffit de servir le dossier avec un serveur local, par exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrir :

- `http://localhost:8000/`
- `http://localhost:8000/game.html`

## Crédits et inspirations

Cette ressource est une réinterprétation pédagogique librement inspirée du principe des **livres dont vous êtes le héros**, et notamment de *The Warlock of Firetop Mountain* de Steve Jackson et Ian Livingstone.

Les références, titres et oeuvres qui ne relèvent pas de cette production restent la propriété de leurs ayants droit respectifs.

## Licence

Les contenus originaux du projet sont diffusés sous licence **Creative Commons Attribution - ShareAlike 4.0 International (CC BY-SA 4.0)**.

Voir le fichier [LICENSE.md](LICENSE.md).

## Auteur

Conception, design et ingénierie pédagogique : **CLI Ingénierie et Innovation Pédagogique - OpenLab**
