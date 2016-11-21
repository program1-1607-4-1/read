var app = angular.module("read",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/shuye1",{
        templateUrl:"pages/book-page/shuye1/shuye.html"
    }).when("/shuye1/shuye3",{
        templateUrl:"pages/book-page/shuye3/shuye.html"
    })
}])