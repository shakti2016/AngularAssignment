app.service("newBookService", function($http,$q,$state){
	var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";
	this.newBookDetails= function(book){
    var defer = $q.defer();
		$http.post(url,book)
		.success(function (response) {
            defer.resolve(response);
            //$state.go('bookDetails');
        });
       return defer.promise;
	}
});
