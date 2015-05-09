angular.module('enduser').factory('AkProductsResource', function($resource){
    var resource = $resource('rest/akproducts/:AkProductsId',{AkProductsId:'@productId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});