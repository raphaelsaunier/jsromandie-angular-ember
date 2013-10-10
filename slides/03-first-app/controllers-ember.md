## Controllers

<iframe data-src="emberjs.jsbin.com/usiXemu/1/embed?js,live" frameborder="0" height="700" width="960"></iframe>

---

```js
Todos.TodoController = Ember.ObjectController.extend({
  // ...
});

Todos.TodosController = Ember.ArrayController.extend({

  // ...

  remaining: function () {
    return this.filterProperty('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')

});

```
