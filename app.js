(function () {
'use strict';
//angular.module('myFirstJSApp', [])
//  .controller('myFirstController', function ($scope) {
//  $scope.name="Harshini";
//  $scope.sayHello=function () {
  //  return "Hello Harshini"
 angular.module('DIApp', [])

//To avoid minification ,write in form of array

 //.controller('DIController', ['$scope', '$filter',DIController]);

 .controller('MsgController', MsgController);

 //To protect against the minification of code
MsgController.$inject=['$scope'];
 function MsgController($scope) {
   $scope.name="Harshini";

   $scope.stateofbeing="horizontal";
   $scope.bikevertical=function () {
     $scope.stateofbeing="Vertical";
   };

   $scope.sayFavourite=function () {
     return 'Harshini likes to eat pizza as well as parotta !!'
   };


 }
})();
