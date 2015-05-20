'use strict';

angular.module('agileRulesKart',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/admin/landing.html',controller:'LandingPageController'})
      .when('/AkCategoryOptions',{templateUrl:'views/admin/AkCategoryOptions/search.html',controller:'SearchAkCategoryOptionsController'})
      .when('/AkCategoryOptions/new',{templateUrl:'views/admin/AkCategoryOptions/detail.html',controller:'NewAkCategoryOptionsController'})
      .when('/AkCategoryOptions/edit/:AkCategoryOptionsId',{templateUrl:'views/admin/AkCategoryOptions/detail.html',controller:'EditAkCategoryOptionsController'})
      .when('/AkOptionGroups',{templateUrl:'views/admin/AkOptionGroups/search.html',controller:'SearchAkOptionGroupsController'})
      .when('/AkOptionGroups/new',{templateUrl:'views/admin/AkOptionGroups/detail.html',controller:'NewAkOptionGroupsController'})
      .when('/AkOptionGroups/edit/:AkOptionGroupsId',{templateUrl:'views/admin/AkOptionGroups/detail.html',controller:'EditAkOptionGroupsController'})
      .when('/AkOptions',{templateUrl:'views/admin/AkOptions/search.html',controller:'SearchAkOptionsController'})
      .when('/AkOptions/new',{templateUrl:'views/admin/AkOptions/detail.html',controller:'NewAkOptionsController'})
      .when('/AkOptions/edit/:AkOptionsId',{templateUrl:'views/admin/AkOptions/detail.html',controller:'EditAkOptionsController'})
      .when('/AkOrderDetails',{templateUrl:'views/admin/AkOrderDetails/search.html',controller:'SearchAkOrderDetailsController'})
      .when('/AkOrderDetails/new',{templateUrl:'views/admin/AkOrderDetails/detail.html',controller:'NewAkOrderDetailsController'})
      .when('/AkOrderDetails/edit/:AkOrderDetailsId',{templateUrl:'views/admin/AkOrderDetails/detail.html',controller:'EditAkOrderDetailsController'})
      .when('/AkOrders',{templateUrl:'views/admin/AkOrders/search.html',controller:'SearchAkOrdersController'})
      .when('/AkOrders/new',{templateUrl:'views/admin/AkOrders/detail.html',controller:'NewAkOrdersController'})
      .when('/AkOrders/edit/:AkOrdersId',{templateUrl:'views/admin/AkOrders/detail.html',controller:'EditAkOrdersController'})
      .when('/AkProductCategories',{templateUrl:'views/admin/AkProductCategories/search.html',controller:'SearchAkProductCategoriesController'})
      .when('/AkProductCategories/new',{templateUrl:'views/admin/AkProductCategories/detail.html',controller:'NewAkProductCategoriesController'})
      .when('/AkProductCategories/edit/:AkProductCategoriesId',{templateUrl:'views/admin/AkProductCategories/detail.html',controller:'EditAkProductCategoriesController'})
      .when('/AkProductOptions',{templateUrl:'views/admin/AkProductOptions/search.html',controller:'SearchAkProductOptionsController'})
      .when('/AkProductOptions/new',{templateUrl:'views/admin/AkProductOptions/detail.html',controller:'NewAkProductOptionsController'})
      .when('/AkProductOptions/edit/:AkProductOptionsId',{templateUrl:'views/admin/AkProductOptions/detail.html',controller:'EditAkProductOptionsController'})
      .when('/AkProducts',{templateUrl:'views/admin/AkProducts/search.html',controller:'SearchAkProductsController'})
      .when('/AkProducts/new',{templateUrl:'views/admin/AkProducts/detail.html',controller:'NewAkProductsController'})
      .when('/AkProducts/edit/:AkProductsId',{templateUrl:'views/admin/AkProducts/detail.html',controller:'EditAkProductsController'})
      .when('/AkUsers',{templateUrl:'views/admin/AkUsers/search.html',controller:'SearchAkUsersController'})
      .when('/AkUsers/new',{templateUrl:'views/admin/AkUsers/detail.html',controller:'NewAkUsersController'})
      .when('/AkUsers/edit/:AkUsersId',{templateUrl:'views/admin/AkUsers/detail.html',controller:'EditAkUsersController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
