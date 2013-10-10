## Integration Testing with AngularJS

---

AngularJS was built to perfom testing

---

$console, $window, $http…  
are provided trough dependency injection

you shall never use a direct  
instance of console, window, http

---

## First example

```javascript
var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
```

---

```javascript
describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', { $scope: scope });
 
      expect(scope.phones.length).toBe(3);
    }));
  });
});
```

---

## With some REST

```jaavscript
var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
 
  $scope.orderProp = 'age';
});
```

---

```javascript
describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));
```