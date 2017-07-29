/**
 * Created by wht719582321 on 2016/10/20.
 */
angular.module("myApp").directive("gameOverModal", function ($state) {
    return {
        restrict: 'E',
        scope: {
            ID:'@',
            text:"@",
            versionId:'@'
        },
        templateUrl: "js/directive/gameOverModal.html",
        link: function ($scope) {
            $scope.backIndex = function () {
                jQuery("#gameOverModal").modal("hide");
                setTimeout(function () {
                    console.log(2);
                    $state.go("gameOver",({versionId:$scope.versionId}))
                },500);
            }
        }
    };
});