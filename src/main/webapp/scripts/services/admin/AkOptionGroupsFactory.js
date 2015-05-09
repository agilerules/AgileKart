angular.module('agileRulesKart').factory('AkOptionGroupsResource', function($resource){
    var resource = $resource('rest/akoptiongroups/:AkOptionGroupsId',{AkOptionGroupsId:'@optionGroupId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});