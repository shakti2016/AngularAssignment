app.service("getBookDetails", function($http, $q){

	var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";
	this.getData= function(){
		var defer = $q.defer();
		$http.get(url)
			.success(function (response) {
					defer.resolve(response);
			});
    return defer.promise;
	}
})
