<img src="assets/02-concepts/Professor_Cat.jpg" />

## Concepts

---

### Single page applications!

---

- A new name for rich interface application
- The client becomes “fat” again

<aside data-markdown class="notes">
Architecture: 2-tier => 3-tier => 2.5-tier?

Fat especially for the memory
</aside>

---

### Why bother?

- No full page realods = more responsive UI
- Potential to share API with mobile application
- Uninterupted media playback
- Desktop-like experience

<aside data-markdown class="notes">
c.f. Ryan's comment on meetup.com

Better user experience on mobile phones slow connections.

Ideal for apps that stay open all day long (e.g. ticketing software)
</aside>

---

### Clients-side templates

Data is exchanged using JSON and

injected in client-side templates

---

### MVC: Model View Controller

Slightly different approaches for each framework

…more on this later

---

### Two-way data binding

Hard to do in jQuery or Backbone

without an external library

---

## Dependency Injection

Used extensively by both frameworks;

featured more prominently in AngularJS

<aside data-markdown class="notes">
DI: Spring World in JavaScript
</aside>

---

## Directives (AngularJS)

Isolated and reusable building blocks

<aside data-markdown class="notes">
Directives: semantic pages
</aside>


---

## Convention over configuration (Ember.js)

- Conventions on naming, structure and responsibilities
- Eliminate a lot trivial decisions
- Possiblity to specify unconventional behaviour
- Active code generation


<aside data-markdown class="notes">
“If Ember needs an object, it can often generate it for you in memory”
</aside>


