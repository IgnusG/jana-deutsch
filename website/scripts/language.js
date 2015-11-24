/*
 * Lovingly crafted by @simplCoding
 * Copyright (c) 2015
 */

;(function (window) {

    var language = angular.module("language", []);
    var validLanguages = ["EN", "DE"];

    language.run(["$rootScope", "$http", function ($rootScope, $http) {
        $rootScope.lang = (navigator.language || navigator.userLanguage).substring(0, 2).toUpperCase();

        if (!-~validLanguages.indexOf($rootScope.lang))
            $rootScope.lang = "EN";

        $http
            .get("resources/translation/" + $rootScope.lang + ".json")
            .then(function (response) {
                $rootScope.translation = response.data;
            })
    }]);
})(window);
