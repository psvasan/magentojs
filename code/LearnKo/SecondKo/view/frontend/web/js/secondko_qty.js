/**
 * Created by suresh on 11/23/18.
 */
define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        var self;
        return Component.extend({
            defaults: {
                template: 'LearnKo_SecondKo/qty'
            },
            initialize: function () {
                self =this;
                this._super();
                this.qtyVal = ko.observable(this.defaultVal);
                this.labelname = ko.observable('Odd Qty');
                this.color = ko.observable('red');
                this.changeLabel();
            },

            decreaseQty: function () {
                var qty = this.qtyVal() * 1;
                if (qty !== 1) {
                    this.qtyVal(qty - 1);
                }
                this.changeLabel();
            },

            increaseQty: function () {
                var qty = this.qtyVal() * 1;
                if (qty !== 100) {
                    this.qtyVal(qty + 1);
                }
                this.changeLabel();
            },
            
            changeLabel: function () {
                this.qtyVal.subscribe(function (changedVal) {
                    console.log(changedVal);
                    if (changedVal % 2 == 0) {
                        self.labelname('Even Qty');
                        self.color('blue');
                    } else {
                        self.labelname('Odd Qty');
                        self.color('red');
                    }
                })
            }


        });
    }
);