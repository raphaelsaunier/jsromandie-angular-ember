## Exchanging Data in Ember

---

**Basic idea:** send and receive JSON data, ideally from a REST API

---

## Ember Data

Ambitious

Could be the topic of an entire talk.

Also, pre-beta versions of Ember Data were source of a lot of frustrations:

- Frequent breaking API changes
- Unpractical handling of embedded relationships
- Changes to models while they're being saved

---

## Improvements in Ember Data 1.0 Beta

- More flexibility and less assumptions
- Fully backed by promises
- Documentation

Transition is described here: https://github.com/emberjs/data/blob/master/TRANSITION.md

---

## Conventions

```js
App.Post = DS.Model.extend({
  title: DS.attr(),
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user')
});

App.Comment = DS.Model.extend({
  body: DS.attr()
});
```

---

```json
{
  "post": {
    "id": 1
    "title": "Rails is omakase",
    "comments": ["1", "2"],
    "user" : "dhh"
  },

  "comments": [{
    "id": "1",
    "body": "Rails is unagi"
  }, {
    "id": "2",
    "body": "Omakase O_o"
  }]
}
```

---

## Alternatives to Ember Data

- Ember Model: https://github.com/ebryn/ember-model
- EPF: http://epf.io/
