/**
 * Created by suresh on 11/27/18.
 */
define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        return Component.extend({
            initialize: function () {
                this._super();
                this.isVisble = ko.observable(true);

            }
        });
    }
);