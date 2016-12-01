define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("home", {//加载主页
            url: "/home",
            templateUrl: "./htmlspa/home/home.html",
            controller: "HomeCtro"
        })
        .state("news", {//加载new
            url: "/About",
            views: {
                "": {
                    templateUrl: "./htmlspa/About/news.html"
                },
                "leftBar@news": {
                    templateUrl: "./htmlspa/About/leftBar/leftBar.html"
                },
                "infoBar@news": {
                    templateUrl: "./htmlspa/About/infoBar/infoBar.html"
                }
            },
             controller: "AboutCtro"
        }).state("news.newsInfo", {
            url: "/newsInfo",
            views: {
                "infoBar@news": {
                    templateUrl: "./htmlspa/About/infoBar/newsInfo/newsInfo.html"
                }
            }
        }).state("news.pushInfo", {
            url: "/pushInfo",
            views: {
                "infoBar@news": {
                    templateUrl: "./htmlspa/About/infoBar/pushInfo/pushInfo.html"
                }
            }
        })
        .state("contact", {//加载contact
            url: "/contact",
            templateUrl: "./htmlspa/contact/contact.html",
            controller: "ContactCtro"
        });
    })
});