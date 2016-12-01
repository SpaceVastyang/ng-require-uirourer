require.config({

    paths: {
        'domReady': '../lib/domReady',
        'angular': '../lib/angular.min',
        "uiRouter": "../lib/angular-ui-router"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },
    deps: [
        './bootstrap'
    ]
});
