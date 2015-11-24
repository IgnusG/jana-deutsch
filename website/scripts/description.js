/*
 * Lovingly crafted by @simplCoding
 * Copyright (c) 2015
 */

var info = angular.module("description", []);

info.controller("DescriptionCtrl", ["$rootScope", "$interval", "$timeout", function ($rootScope, $interval, $timeout) {
    var _self = this;
    /** controls the visibility of the blurred contact overlay */
    _self.show = false;
    /** controls the contact icon bounce animation */
    _self.bounceIcon = false;
    /** disables all active animations and prevents new ones from running */
    _self.disableAnimation = false;

    _self.highlight = function () {
        if (_self.disableAnimation) return;

        _self.show = true;
        $timeout(function () {
            if (_self.disableAnimation) return;
            _self.bounceIcon = true;
        }, 1000)
            .then(function () {
                return $timeout(function () {
                    _self.bounceIcon = false;
                }, 2400)
            })
            .then(function () {
                return $timeout(function () {
                    _self.show = false;
                }, 2000)
            });
    };

    _self.disableAnimations = function () {
        _self.disableAnimation = true;
        _self.show = false;
        _self.bounceIcon = false;
    };
    _self.enableAnimations = function () {
        $timeout(function () {
            _self.disableAnimation = false
        }, 3000);
    };

    _self.showAbout = function () {
        $rootScope.displayAboutCard = true;
        return $timeout();
    };

    $timeout(function () {
        _self.highlight();
    }, 2000).then(function () {
        return $interval(function () {
            _self.highlight()
        }, 20000, 5)
    });
}]);
