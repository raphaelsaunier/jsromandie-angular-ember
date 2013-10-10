## URLs in Ember

---

* Represent the *state* of the application (e.g. /posts/1/edit)
* Provide the model to the controller

---

### Starting point of an application

```js
App.Router.map(function() {
  this.resource('posts', { path: '/posts' }, function() {
    this.route('new');
  });
});
```

---

### Generated objects

<img src="assets/07-urls-and-architecture/generated-objects.png"/>

<aside data-markdown class="notes">
  Raph: We can see how this already defines the architecture of our app
</aside>

---

### Complex yet bookmarkable & sharable URLs

<img src="assets/07-urls-and-architecture/sncf.png"/>

---

```
ResultOutwardRoute:

/result/outward/:userCountry/:originCode/:originType
  …/:destinationCode/:destinationType/:outwardDateStr
    …/:inwardDateStr/:timeSlotOutwardStr/:timeSlotInwardStr
      …/:travelersAges/:comfortClass/:isDistinctSeatForInfant
        …/:travelClass/:isDistinctPlaceForBambino
          …/:isSleeperPlaceInNightTrain/:fuelType
            …/:carType/:nbSeatsMaxInCar
              …/:isCarriageInPublicTransportStr
```

---


### More conventions

```js
App.Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: '/post/:post_id' });
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('post', params.post_id);
  }
});
```

---


### Returning promises for a routes model

```js
App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://example.com/data.json');
  }
});
```
