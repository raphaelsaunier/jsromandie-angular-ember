## Now the same thing with Ember

---

## Three dependencies

- jQuery
- Handlebars
- Ember.js

---

## Le Hello World de rigueur


App initialiser:

```js
window.App = Ember.Application.create();
```

Handlebars template:

```handlebars
<h1>
  Bonsoir, {{#if name}} {{name}} {{else}} JS Romandie {{/if}} !
</h1>
{{input type="text" placeholder="Votre nom..." value=name}}
```

---

<iframe data-src="http://emberjs.jsbin.com/OZaSOro/latest/embed" frameborder="0" height="700" width="960"></iframe>

---

## What happened behind the scenes

---

The `body` element was defined as the `rootElement` of the application

---

The first `<script type="text/handlebars">` tag became the application template

---

The friendly hamster also automatically generated a route, a controller and a view for us:

- `App.ApplicationRoute`
- `App.ApplicationController`
- `App.ApplicationView`

---

The `name` value was created in the application controller

---

<iframe data-src="http://emberjs.jsbin.com/iMowUbE/2/embed" frameborder="0" height="700" width="960"></iframe>
