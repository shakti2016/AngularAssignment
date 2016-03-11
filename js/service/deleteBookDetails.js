app.service("deleteBookDetails",function($http,$q,$state, $mdDialog){
  console.log("deleteBookDetails");
  console.log($mdDialog);
  this.deleteData= function(idArr){
      var defer = $q.defer();
      var response;

      var confirm = $mdDialog.confirm()
            .title('Would you like to delete the selected book details?')
            .ok('Ok')
            .cancel('Cancel');
      $mdDialog.show(confirm).then(function() {
        for(var i=0; i<idArr.length;i++){
          var url = "https://api.mongolab.com/api/1/databases/ng-class/collections/BookStore/";
          url += idArr[i] + "?apiKey=5tpXTgKFQVVYpZ3-d6uQ5xcZ9x4hIF_N";
          response = $http.delete(url);
        }
        response.success(function(data, status, headers, config){
             window.location.reload();
        });

      }, function() {

    });
  }
})
