## Modules

declaring app

```javascript
var app = angular.module('name', [])

app.filter('filterName', function (di) { … })
```

In another file

```javascript
var app = angular.module('name')

app.controller('MainCtrl', function (di) { … })

app.controller('UserCtrl', function (di) { … })
```

---

## Modules

```javascript
var app = angular.module('name', ['userModule'])

app.controller('MainCtrl', function (UserService) { … })
```


```javascript
var module = angular.module('userModule', [])

app.factory('UserService', function (UserService) { … })
```