# Simu-HEdS-Tools-App

## Table des matières

- [Aperçu](#apercu)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies](#technologies)
- [Installation](#installation)

## Aperçu

Simu-HEdS-Tools-App est une plateforme pour l'équipe de simulation de la Haute École de Santé Valais-Wallis (HEdS). Elle offre une variété de fonctionnalités pour faciliter la gestion, la réservation et l'inventaire du matériel, ainsi que la gestion des scénarios de simulation.

## Fonctionnalités

- **Gestion des inventaires :** Trier et inventorier le matériel.
- **Réservation de salles :** Gérer les réservations de salles.
- **Administration :** Offre des fonctionnalités d'administration pour gérer l'application.
- **Scénarios de simulation :** Permet de gérer l'inventaire des scénarios de simulation.
- **Événements :** Affiche les événements à venir.
- **Présentation de l'équipe :** Présente les membres de l'équipe.

## Structure du projet

```plaintext
Simu-HEdS-Tools-App/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── .gitignore
├── package.json
└── README.md

```

## Technologies

Ce projet est construit en utilisant plusieurs technologies modernes pour atteindre les meilleures performances et l'expérience utilisateur possible. Voici une brève description de ces technologies:

### Vue.js

Vue.js est un framework JavaScript progressif pour la construction d'interfaces utilisateur. Il est conçu pour être adopté de manière incrémentale, il est facile de commencer et flexible pour gérer. Il est le cœur de notre application.

### Vue Router

Vue Router est le routeur officiel de Vue.js. Il est utilisé pour créer une application de page unique (SPA) avec des routes pour naviguer entre les différentes parties de l'application.

### Vuex

Vuex est une bibliothèque de gestion d'état pour Vue.js. Elle sert de source unique de vérité pour nos données, facilitant la communication entre les composants, même très éloignés les uns des autres.

### Vite

Vite est un outil de build qui vise à fournir une expérience de développement plus rapide et plus efficace. Il fournit un serveur de développement avec Hot Module Replacement (HMR) et un compilateur de build plus rapide.

### Bootstrap

Bootstrap est un framework CSS qui aide à créer rapidement des sites web réactifs. Il offre une variété de composants réutilisables tels que des boutons, des cartes, des modaux et bien plus encore.

### Google Fonts

Google Fonts est une bibliothèque de polices gratuites. Nous utilisons `Montserrat` et `Roboto` dans ce projet pour une meilleure esthétique et lisibilité du texte.

### Autres

Nous utilisons également plusieurs autres bibliothèques pour diverses fonctionnalités, y compris:

- Font Awesome et Bootstrap Icons pour les icônes
- Tiny Slider pour les carrousels
- GLightbox pour les lightboxes
- ApexCharts pour les graphiques
- Overlay Scrollbars pour des barres de défilement personnalisées.

## Installation et Configuration

Suivez ces étapes pour installer et lancer le projet.

### Prérequis

Avant de commencer, assurez-vous que votre système dispose des outils suivants :

- [Node.js & npm](https://nodejs.org/en/download/): Node.js est un environnement d'exécution JavaScript et npm est un gestionnaire de paquets. Vous en aurez besoin pour installer les dépendances du projet.
- [Git](https://git-scm.com/downloads): Git est un système de gestion de versions distribué. Vous en aurez besoin pour cloner le projet.

### Installation

1. **Clonez le projet depuis GitHub.** Utilisez la commande suivante pour cloner le projet sur votre système local :

```bash
git clone https://github.com/username/Simu-HEdS-Tools-App.git
```
2. **Naviguez jusqu'au répertoire du projet. Utilisez cette commande pour entrer dans le dossier du projet :**

```bash
cd Simu-HEdS-Tools-App
``` 
3. **Installez les dépendances.** Utilisez cette commande pour installer les dépendances du projet :

```bash
npm install
```
4. **Lancez le serveur de développement.** Utilisez cette commande pour lancer le serveur de développement :

```bash
npm run dev
```