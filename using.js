var app =  angular.module("booksApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/harry1', {
        templateUrl: 'index21-2-1.html',
        controller: "book1"
    })
    .when('/harry2', {
        templateUrl: 'index21-2-1.html',
        controller: "book2"
    })
    .when('/harry3', {
        templateUrl: 'index21-2-1.html',
        controller: "book3"
    })
    .when('/harry4', {
        templateUrl: 'index21-2-1.html',
        controller: "book4"
    })
})
app.controller("book1", function($scope, $route){
    $scope.books = {
        title: "Harry Potter and the Sorcerer's Stone. Part 1.",
        author: "J. K. Rowling",
        year: 2001,

    }
})
app.controller("book2", function($scope, $route){
    $scope.books = {
        title: "Harry Potter and the Chamber of Secrets. Part 2.",
        author: "J. K. Rowling",
        year: 2002,

    }
})
app.controller("book3", function($scope, $route){
    $scope.books = {
        title: "Harry Potter and the Prisoner of Azkaban. Part 3.",
        author: "J. K. Rowling",
        year: 2004,

    }
})
app.controller("book4", function($scope, $route){
    $scope.books = {
        title: "Harry Potter and the Goblet of Fire. Part 4.",
        author: "J. K. Rowling",
        year: 2005,

    }
})