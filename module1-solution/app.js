(function () {
'use strict';

 angular.module('LunchCheck', [])

 .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];

 function LunchCheckController($scope) {
   $scope.lunchlist="";
   $scope.output="";

   $scope.checkData=function () {
     var det="";
     det=check($scope.lunchlist);
     $scope.output=det;
   };

   function check(string) {
     var outputdata="";
     var count=0;
     var arr=string.split(',');
     count=arr.length;
     if(count==0 || string=="" || string==" "){
       outputdata="Please enter data first";
     }
     else if(count<=3){
       outputdata="Enjoy!";
     }
     else if(count>3){
       outputdata="Too much!"
     }
     return outputdata;
   }

 }
})();
