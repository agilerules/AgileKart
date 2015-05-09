angular.module('agileKart').factory('AkOrdersResource', function($resource){
    var resource = $resource('rest/akorders/:AkOrdersId',{AkOrdersId:'@orderId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});