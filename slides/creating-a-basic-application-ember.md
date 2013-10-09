## La même chose avec Ember

---

## Trois dépendances

- jQuery
- Handlebars
- Ember.js

---

## Le Hello World de rigueur

Initialiser l'application:

```js
window.App = Ember.Application.create();
```

Template Handlebars:

```handlebars
<h1>
  Bonsoir, {{#if name}} {{name}} {{else}} JS Romandie {{/if}} !
</h1>
{{input type="text" placeholder="Votre nom..." value=name}}
```

---

<iframe data-src="http://emberjs.jsbin.com/OZaSOro/latest/embed" frameborder="0" height="700" width="960"></iframe>

---

## Ce qui s'est passé dans les coulisses

---

L'élément `body` a été défini comme `rootElement` de l'application

---

Le premier tag `<script type="text/handlebars">` est devenu le template de l'application

---

Le gentil hamster a également créé pour nous une route, un contrôleur et une vue:

- `App.ApplicationRoute`
- `App.ApplicationController`
- `App.ApplicationView`

---

La valeur `name` a été crée dans le contrôleur de l'application

---

<iframe data-src="http://emberjs.jsbin.com/iMowUbE/2/embed" frameborder="0" height="700" width="960"></iframe>

---

Test
