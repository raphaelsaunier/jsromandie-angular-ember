# Ember

## Historique
Avantages des single page applications
Les limites de backbone.js (data binding)
SproutCore @ Apple
Principe du ‘convention over configuration’

## Structure d'une application Ember
Routes: Les URLs sont essentielles pour tout site Web; elles sont le point de départ de toute application Ember
Modèles: Définissent des objets
Contrôleurs: Gèrent des objets des des collections d'objets
Vues: Interactions avec le DOM
Templates: Code HTML

## Conventions et responsabilités
Nomenclature
Single access principle
Génération de code active

## Templates Handlebars
Logique minimale (exceptions: boucles et conditions simples)
‘Helpers’/Utilitaires pour le formatage
Hierarchie et flexibilité des ‘outlets‘

## Modèle objet
OOP (create/extend, super(), get/set)
Propriétés calculées, évaluées que si nécessaire (ex. hamster de Schrödinger)
Précision des observateurs vs. Dirty checking
Syntaxe exotique (p.ex.: `function(){}.readOnly()`)

## Composants “isolés”
Comparaison avec les “Web Components” et Polymer
Réutilisation 

## Échange de données
Ember Data, un projet ambitieux qui a frustré beaucoup d'utilisateurs 
Promesses intégrées de façon transparente
Stores (LS, REST JSON)

## Tests
Exemple avec Mocha
Test E2E

## Comment débuter
Yeoman + bower
Ember App Kit

## Documentation et resources
Guides et API officiels
Naviguer le code source
Où trouver de l'aide

## Questions, remarques
raphael.saunier@gmail.com
@RaphaelSaunier


# Application de démonstration (si on a le temps)

- Pour aider Daniel Brélaz à perdre du poids [1]
- 7 jours de la semaine
- 4 repas différents
  - Poulet avec café des 9 heures
  - Choucroute pour les 4 heures
  - Cheesecake de Marie-Ange
  - Kebab du bosphore
- 4 activités différentes
  - Monter le chemin du Calvaire
  - ???
- Ajout/suppression de repas pour chaque jour
- Calcul du total de calories,
- Limite de calories journalière dynamique, définie avec slider
- Changement de couleur lorsque limite dépassée

[1] http://www.illustre.ch/illustre/article/daniel-br%C3%A9laz-un-homme-m%C3%A9tamorphos%C3%A9
