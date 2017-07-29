/**
 * Created by Raninbow on 2016/10/1.
 */
angular.module("myApp").controller('viewCardCtrl', ['$scope', 'gameService','$state', function ($scope, gameService,$state) {
    var playerList = localStorage.playerList;
    var GameObject = JSON.parse(playerList);
    var vm = this;
    var StateValue = 0;
    var Card = "initial";
    var VersonId = $state.params.versionId;
    vm.versionId=VersonId
    gameService.getVersonList().then(function(res){
        vm.versionList=res.data.data[VersonId];
    });
    vm.See_identity = gameService.determineCard(GameObject, StateValue, Card);
    vm.version=gameService.getVersonList().then(function (res) {
        vm.version=res.data.data[VersonId];
    });


    vm.ClickView = function () {
        $('#myModal').modal("hide")
        console.log(13)
        var Card = vm.See_identity.Card;
        StateValue = vm.See_identity.StateValue;
        vm.See_identity = gameService.determineCard(GameObject, StateValue, Card,VersonId);

    }

    //调用模态框
    $scope.showModal=function(){
        $('#myModal').modal("show")
    }
}
]);