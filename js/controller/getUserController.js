app.controller("getBookListController",function(getBookDetails){
	var self = this;
    getBookDetails
    .getData("https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N")
    .then(function(responce) {
          self.bookData = responce;
    });
});		