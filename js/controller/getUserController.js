(function(){

	'use strict';

		var updateService = null;
		var deleteService = null;
		var arr=[];
		app.controller('getBookListController', getBookListController);
		getBookListController.$inject=['getBookDetails','updateBookDetails','deleteBookDetails'];

		function getBookListController(getBookDetails, updateBookDetails, deleteBookDetails){
				var self = this;
				self.loading = true;
				updateService = updateBookDetails;
				deleteService = deleteBookDetails;

				getBookDetails.getData()
				.then(function(responce) {
							self.bookData = responce;
							self.loading = false;
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
		};
		getBookListController.prototype.getIndex = function (id, isTrue) {
          if (isTrue){
              arr.push(id);
					}else {
              var index = arr.indexOf(id);
              arr.splice(index, 1);
          }
    };
		getBookListController.prototype.deleteRecord = function(){
				if(arr.length<=0){
					console.log("please select atleast one record...")
				}else {
					deleteService.deleteData(arr);
				}
		}
})();
