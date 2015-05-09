angular.module('agileKart').factory('AkUsersResource', function($resource){
    var resource = $resource('rest/akusers/:AkUsersId',{AkUsersId:'@userId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});