app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/bookDetails');               //default view described here

    $stateProvider
    .state('bookDetails',{
        url:'/bookDetails',
        templateUrl:'views/bookDetails.html',
        controller:'getBookListController as book'
    })
    .state('createNewUser',{
        url:'/createNewUser',
        templateUrl:'views/createNewUser.html',
        controller:'newUserController as newBook'
    });
});