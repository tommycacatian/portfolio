angular.module('RoutingApp', ['ngRoute'])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl:'tommy/templates/home.html'
            })
            .when('/about', {
                templateUrl: 'tommy/templates/about.html'
            })
            .when('/contact', {
                templateUrl: 'tommy/templates/contact.html'
            })
            .otherwise({
              templateUrl: 'tommytemplates/home.html'
              //  redirectTo: 'templates/home.html'
            });
          
    }]);
