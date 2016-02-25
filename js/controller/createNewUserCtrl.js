app.controller("newUserController",function($state, $http, newBookService){
	var self = this;
	var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";
	self.book = {};
	self.submitFormData = function(){
		newBookService.newBookDetails(url, self.book);
	}
	
});