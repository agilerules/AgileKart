/**
 * 
 */
angular.module('enduser').controller('productCtrl',function($scope,$http,$routeParams,AkProductsResource,DataService){
	$scope.category=$routeParams.category;
	$scope.prodId=$routeParams.productId;
	$scope.productList=AkProductsResource.queryAll();
	var prodlocal=$scope.productList;
/*	$scope.postObject = new Object();*/
	$scope.product=function($scope){
		for(var i=0;i<prodlocal.length;i++){
			if(prodlocal[i].productId==$routeParams.productId){

				 
			/*	$scope.postObject.categoryId = prodlocal[i].akProductCategories.categoryId;*/
				return prodlocal[i];
			}
		}
	};
	
	
	
	
	 $scope.cart = DataService.cart;
	 
	 
	/* console.log("$scope.product.akProductCategories.categoryId  "+$scope.postObject.categoryId);
	 console.log("$scope.product.akProductOptionses.productOptionId "+postObject.optionId);
	 console.log("$scope.product.akProductOptionses.akOptionGroups.optionGroupId "+postObject.optionGroupId);
	 $http.post("/AgileKartService/agilekart", postObject).success(function(data){
		   console.log(data.crosellProduct.categoryId);
		   console.log(data.crosellProduct.optionId);
		   console.log(data.crosellProduct.optionGroupId);
		});*/
});