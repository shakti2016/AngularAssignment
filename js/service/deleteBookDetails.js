app.service("deleteBookDetails",function($http,$q,$state){
  this.deleteData= function(idArr){
      var defer = $q.defer();
      var response;
      for(var i=0; i<idArr.length;i++){
        var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore/";
        url += idArr[i] + "?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";
        response = $http.delete(url);
      }
      response.success(function(data, status, headers, config){
  			   window.location.reload();
  		});
  }
})
