/**
 * Created by wht719582321 on 2016/9/20.
 */

// 滑动条与加减号指令
angular.module("myApp").directive("inputNum", function() {
    return {
        restrict :'E',
        scope:{
            class:'@',
            num:'=',//双向绑定的值
            min:'@',//最小值
            max:'@' //最大值
        },
        templateUrl :"js/directive/inputNum.html",
        link:function ($scope) {
            $scope.down=function () {
                if($scope.num>$scope.min){
                    $scope.num--;
                }
            };
            $scope.up=function () {
                if($scope.num<$scope.max){
                    $scope.num++;
                }
            }
        }
    };
});