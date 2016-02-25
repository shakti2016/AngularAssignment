app.service("newBookService", function($http,$q,$state){
	this.newBookDetails= function(url,book){
        var defer = $q.defer();
		$http.post(url,book)
		.success(function (response) {
            defer.resolve(response);
            $state.go('bookDetails'); 
        });
       return defer.promise;  
	}																																	
});