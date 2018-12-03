/**
 * Created by suresh on 11/23/18.
 */
define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'LearnKo_SecondKo/booklists'
            },
            initialize: function () {
                this._super();
                this.booknamelist = ko.observableArray([]);
                this.bookname = ko.observable('');
            },

            addNewBook: function () {
                this.booknamelist.push({name:this.bookname()});
                this.bookname('');
            }


        });
    }
);