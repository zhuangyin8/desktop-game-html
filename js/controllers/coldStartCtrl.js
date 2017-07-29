/**
 * Created by wht719582321 on 2016/10/1.
 */
angular.module('myApp')
    .controller('coldStartCtrl',["$state","$location","$scope",function ($state,$location,$scope) {

        $scope.time=3;
        var aa=function(){
            $scope.time--;
        };
       var a= setInterval(function(){
            if($scope.time==1)
            {
                clearInterval(a);
                $location.path("/index");
            }
            $scope.$apply(aa);
        },1000);
    }]);

