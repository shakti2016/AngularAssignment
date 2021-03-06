app.service("updateBookDetails",function($http,$q){

  this.updateData= function(books){
      var defer = $q.defer();
      var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore/";
      url += books._id.$oid + "?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";

      $http.put(url, JSON.stringify(books))
        .success(function (response) {
                defer.resolve(response);
        });
        return defer.promise;
  }
})
