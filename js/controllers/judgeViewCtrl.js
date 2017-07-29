/**
 * Created by Raninbow on 2016/10/5.
 */
angular.module('myApp').controller('judgeViewCtrl',['$scope','gameService','publicFunction','$state',function ($scope,gameService,publicFunction,$state) {
    var vm = this;
    var playerList=localStorage.playerList;
    var GameObject=JSON.parse(playerList);
    $scope.GameObject=GameObject;
    vm.versionId=$state.params.versionId;
    gameService.getVersonList().then(function(res){
        vm.versionList=res.data.data[vm.versionId];
    });
    vm.start=function (){
        // 存储初始天数
        if(localStorage.days==undefined&&localStorage.guideHitCount==undefined){
            publicFunction.addInitDay(vm.versionList);
        }else{}

        $state.go("days",({versionId:vm.versionId}));
    }
}]);