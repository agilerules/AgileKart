angular.module('agileRulesKart').factory('AkProductCategoriesResource', function($resource){
    var resource = $resource('rest/akproductcategories/:AkProductCategoriesId',{AkProductCategoriesId:'@categoryId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});