/**
 * Created by suresh on 11/23/18.
 */
define(["jquery"],

    function ($) {
        "use strict";

        return function (config, element) {
            console.log(config);
            console.log(element);
            alert("Greeting " + config.name);
        }
    }
);