/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'uiRouter',
    './controllers/index',
    './directives/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'app.directives',
        'ui.router'
    ]);
});
