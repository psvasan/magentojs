/**
 * Created by suresh on 11/27/18.
 */
define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        return Component.extend({
            initialize: function () {
                this._super();
                this.orderlist = ko.observableArray([]);
                this.orderlist.push({id:1});
                this.orderlist.push({id:2});
                this.orderlist.push({id:3});
                this.orderlist.push({id:4});
                this.orderlist.push({id:5});
                this.orderlist.push({id:6});
                this.orderlist.push({id:7});
                this.orderlist.push({id:8});
                this.orderlist.push({id:9});
                this.orderlist.push({id:10});
            }
        });
    }
);