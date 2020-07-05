(function () {
'use strict';

var to_buy_List = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Pepto Bismol",
    quantity: "10"
  }
];
var already_bought= [];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList1 = this;
  showList1.to_buy_List = ShoppingListCheckOffService.getItems1();

  showList1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList2 = this;

  showList2.already_bought = ShoppingListCheckOffService.getItems2();
}


function ShoppingListCheckOffService() {
  var service = this;
  var newitemName="";
  var newquantity="";

  service.removeItem = function (itemIndex) {
    newitemName=to_buy_List[itemIndex].name;
    newquantity=to_buy_List[itemIndex].quantity;

    var item = {
      name: newitemName,
      quantity: newquantity
    };

      already_bought.push(item);

    to_buy_List.splice(itemIndex, 1);

  };

  service.getItems1 = function () {
    return to_buy_List;
  };
  service.getItems2 = function () {
    return already_bought;
  };
}

})();
