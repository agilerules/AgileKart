angular.module('enduser').factory('AkOptionsResource', function($resource){
    var resource = $resource('rest/akoptions/:AkOptionsId',{AkOptionsId:'@optionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});