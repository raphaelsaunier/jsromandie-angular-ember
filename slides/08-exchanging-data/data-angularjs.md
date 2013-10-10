## ngResource

`&ltscript src="angular-resource.js"&gt;`

`angular.module('app', ['ngResource']);`

---

```javascript
angular.module('phone')
  .factory('Contact', function($resource) {
  	return $resource('/api/admin/contacts/:id', {id:'@id'})
  }
```

---

```javascript
{
	'get':    {method:'GET'},
	'save':   {method:'POST'},
	'query':  {method:'GET', isArray:true},
	'remove': {method:'DELETE'},
	'delete': {method:'DELETE'}
};
```

---

Creating

```javascript
new Contact({name: 'Myself'}).$save(function(savedContact) {
	// callback 
});
```

`POST /api/admin/contacts`

---

Reading / Promise

```javascript
	var contact = Contact.get({id: 'small-12'}) // promise
});
```

`GET /api/admin/contacts/small-12`

---

Reading / Callback

```javascript
	Contact.get({id: 'small-12'}, function(contact) { … }) // callback
});
```

`GET /api/admin/contacts/small-12`

