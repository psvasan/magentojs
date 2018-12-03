/**
 * Created by suresh on 11/23/18.
 */
define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'LearnKo_SecondKo/greetings'
            },
            initialize: function () {
                this._super();
                this.name = "Mr. P.Sureshvasan"
            }
        });
    }
);