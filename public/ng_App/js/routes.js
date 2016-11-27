/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("home", {//加载主页
            url: "/home",
            templateUrl: "./htmlspa/home/home.html",
            controller: "HomeController"
        })
        .state("news", {//加载new
            url: "/news",
            views: {
                "": {
                    templateUrl: "./htmlspa/news/news.html"
                },
                "leftBar@news": {
                    templateUrl: "./htmlspa/news/leftBar/leftBar.html"
                },
                "infoBar@news": {
                    templateUrl: "./htmlspa/news/infoBar/infoBar.html"
                }
            },
             controller: "NewController"
        }).state("news.newsInfo", {
            url: "/newsInfo",
            views: {
                "infoBar@news": {
                    templateUrl: "./htmlspa/news/infoBar/newsInfo/newsInfo.html"
                }
            }
        }).state("news.pushInfo", {
            url: "/pushInfo",
            views: {
                "infoBar@news": {
                    templateUrl: "./htmlspa/news/infoBar/pushInfo/pushInfo.html"
                }
            }
        })
        .state("run", {//加载new
            url: "/run",
            templateUrl: "./htmlspa/run/run.html",
            controller: "RunController"
        });
    })
});