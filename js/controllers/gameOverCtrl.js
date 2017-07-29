/**
 * Created by wht719582321 on 2016/10/7.
 */
angular.module('myApp').controller('gameOverCtrl', ["$state", "$scope", "gameService","publicFunction",
    function ($state,$scope,gameService,publicFunction) {
        var vm=this;
        vm.versionId = $state.params.versionId;
        // 获取游戏配置
        vm.version = gameService.getVersonList().then(function (res) {
            vm.version = res.data.data[vm.versionId];
        });
        // 获取玩家列表&天数Log
        vm.playerList=JSON.parse(localStorage.playerList);
        vm.days=JSON.parse(localStorage.days);
        vm.playerNum=JSON.parse(localStorage.playerNum);
        vm.string=JSON.parse(localStorage.string);
        vm.goIndex=function () {
            localStorage.clear();
            sessionStorage.versionId=JSON.parse(vm.versionId);
            $state.go("index",({versionId:vm.versionId}))
        }
    }]);
