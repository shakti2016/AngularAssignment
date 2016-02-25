app.service("getBookDetails",function($http, $q){
	this.getData= function(url){
		var defer = $q.defer();
		$http.get(url)
		.success(function (response) {
            defer.resolve(response);
        });
       return defer.promise;  
	}
})