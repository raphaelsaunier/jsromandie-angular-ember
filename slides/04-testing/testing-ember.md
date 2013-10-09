## Integration Testing in Ember

---

Testing *used* to be slightly tricky in Ember


---

### Built-in helpers

- `visit(url)`
- `find(selector, context)`
- `fillIn(input_selector, value)`
- `click(selector)`
- `keyEvent(selector, type, keyCode)`
- `wait()`

---

### The elegance of chaining & promises
```js
test("creating a post displays the new post", function() {
  visit("/posts/new")
  .fillIn(".post-title", "A new post")
  .fillIn(".post-author", "John Doe")
  .click("button.create")
  .then(function() {
    ok(find("h1:contains('A new post')").length, "The post's title should display");
    ok(find("a[rel=author]:contains('John Doe')").length, "A link to the author should display");
  });
});
```

---

## Sample test with QUnit

<iframe data-src="http://emberjs.jsbin.com/IJAZOLO/10/embed?javascript,live" frameborder="0" height="700" width="960"></iframe>

