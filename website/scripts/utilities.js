/*
 * Lovingly crafted by @simplCoding
 * Copyright (c) 2015
 */

var util = angular.module("utilities", []);

util.directive("svgIcon", [function () {
    return {
        scope: {
            svgIcon: "@"
        },
        restrict: "A",
        transclude: true,
        replace: true,
        template: "<div class='svg-icon'><md-icon md-svg-src=\'{{svgIcon}}\'></md-icon><span ng-transclude></span></div>"
    }
}]);

util.directive("stopClickPropagation", [function () {
    return {
        restrict: "A",
        transclude: true,
        template: "<div ng-click='$event.stopPropagation()' ng-transclude></div>"
    }
}]);
