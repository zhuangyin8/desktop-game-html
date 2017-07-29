/**
 * Created by wht719582321 on 2016/10/8.
 */
angular.module("myApp").directive("modal", function ($state) {
    return {
        restrict: 'E',
        scope: {
            modalId: '@',
            text: "@",
            versionId: '@',
            goUrl: "@",
            needClear: "@"
        },
        templateUrl: "js/directive/modal.html",
        link: function ($scope) {
            $scope.backIndex = function () {
                //jQuery("#"+$scope.modalId).modal("hide");
                setTimeout(function () {
                    if ($scope.needClear) {
                        localStorage.clear();
                    }
                    $state.go($scope.goUrl, ({versionId: $scope.versionId}))
                }, 500);
            }
        }
    };
});