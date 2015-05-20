angular.module('agileRulesKart').factory('AkCategoryOptionsResource', function($resource){
    var resource = $resource('rest/akcategoryoptions/:AkCategoryOptionsId',{AkCategoryOptionsId:'@categoryOptionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});