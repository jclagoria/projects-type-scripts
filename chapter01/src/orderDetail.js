"use strict";
exports.__esModule = true;
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    OrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
