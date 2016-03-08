(function(){

	'use strict';

		var updateService = null;
		app.controller('getBookListController', getBookListController);
		getBookListController.$inject=['getBookDetails','updateBookDetails'];

		function getBookListController(getBookDetails, updateBookDetails){
				var self = this;
				updateService = updateBookDetails;
				getBookDetails
				.getData("https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N")
				.then(function(responce) {
							self.bookData = responce;
				});
		}

		getBookListController.prototype.updateFormData = function(book){
				self.books = {};
				self.books._id={};

				self.books.name=book.name;
				self.books.auther= book.auther;
				self.books.description=book.description;
				self.books.publisher=book.publisher;
				self.books.price=book.price;
				self.books._id.$oid = book._id.$oid;

				updateService.updateData(self.books);
		}
})();
