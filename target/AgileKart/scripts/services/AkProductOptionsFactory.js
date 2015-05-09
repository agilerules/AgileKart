angular.module('agileKart').factory('AkProductOptionsResource', function($resource){
    var resource = $resource('rest/akproductoptions/:AkProductOptionsId',{AkProductOptionsId:'@productOptionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});