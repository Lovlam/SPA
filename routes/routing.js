
var app = angular.module("myroutes", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    //inject $locationProvider service
    $locationProvider.hashPrefix(""); // add configuration
    $routeProvider
        .when("/", {
            templateUrl: "/pages/login.html",
            controller: "ctrlAdmin"
        })
        .when("/home", {
            templateUrl: "/pages/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "/pages/about.html",
            controller: "loginController"
        })
        .when("/login", {
            templateUrl: "/pages/login.html",
            controller: "loginController"
        })
        .when("/account", {
            templateUrl: "/pages/account.html",
            controller: "loginController"
        })
        .when("/admin", {
            templateUrl: "/pages/admin.html",
            controller: "loginController"
        })
        .when("/contact", {
            templateUrl: "/pages/contact.html",
            controller: "loginController"
        })
        .when("/quizz", {
            templateUrl: "/pages/quizz.html",
            controller: "loginController"
        })
        .when("/register", {
            templateUrl: "/pages/register.html",
            controller: "loginController"
        })
        .when("/rePass", {
            templateUrl: "/pages/rePass.html",
            controller: "loginController"
        })



});