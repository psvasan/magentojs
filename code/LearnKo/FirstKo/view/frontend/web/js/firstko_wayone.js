/**
 * Created by suresh on 11/23/18.
 */
alert("Welcome to KO ");

define(["jquery"],

    function ($) {
    "use strict";
        console.log($);

        return function (config, element) {
            console.log(config);
            console.log(element);
            alert(config.name);
        }
    }
);