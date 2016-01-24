GDGCine.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.html',
      controller: 'ListCtrl'
    })
    .state('view', {
      url: '/movie/:movieid',
      templateUrl: 'templates/view.html',
      controller: 'ViewCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
});