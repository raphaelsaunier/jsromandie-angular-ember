
## URL with Routes

```coffeescript
.config( ['$routeProvider', ($routeProvider) -> $routeProvider
.when('/',            {controller:'DashboardCtrl',  templateUrl:'dashboard.html'})
.when('/clients',     {controller:'ClientListCtrl', templateUrl:'client_list.html'})
.when('/clients/:id', {controller:'ClientEditCtrl', templateUrl:'client_edit.html'})

.when('/services',    {controller:'ServiceListCtrl', templateUrl:'service_list.html'})
.when('/services/:id',{controller:'ServiceEditCtrl', templateUrl:'service_edit.html'})
.when('/projects',    {controller:'ProjectListCtrl', templateUrl:'project_list.html'})
.when('/projects/:id',{controller:'ProjectEditCtrl', templateUrl:'project_edit.html'})
# …
.otherwise({redirectTo:'/'})
```