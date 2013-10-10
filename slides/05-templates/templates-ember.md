## Templates

---

<img src="assets/05-templates/handlebars.png" height="300" alt=""/>

---

```html
<script type="text/x-handlebars" id="template-name">
```

or

```html
<script type="text/x-handlebars" data-template-name="template-name">
```

or

Use the precompilation tool for *.hbs files that comes with `Ember App Kit` or `generator-ember`

---

### Minimal logic

Conditions

```handlebars
{{#if person}}
  Welcome back, <b>{{person.firstName}} {{person.lastName}}</b>!
{{else}}
  Please log in.
{{/if}}
```

---

Loops

```handlebars
<ul>
  {{#each people}}
    <li>Hello, {{name}}!</li>
  {{/each}}
</ul>
```

---

### Helpers

No concept of filters but Guillaume's `1337` filter (shown in the next section) could be rewritten like this:

```javascript
Ember.Handlebars.helper('leet', function(value, options) {
  if (!value) 
    return '';

  value = value.replace(/[aeio]/g, function (m) {
    return {a:'4', e:'3', i:'1', o:'0', u:'\\/' }[m];
  });
});
```

---

…and applied like this:

```handlebars
{{input value=name}}

Hello {{leet name}}
```

And thanks to the magic of observers, this helper executes each time the value of `name` changes

---


### Debug helpers 

- `{{log variable}}`
- `{{debugger}}`

<aside data-markdown class="notes">
  Necessary because it is not possible to execute arbitrary JS (e.g. console.log).

  Chrome extension, shown later, is extremely helpful as well.
</aside>
