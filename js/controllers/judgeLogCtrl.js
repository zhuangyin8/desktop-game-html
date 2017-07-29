/**
 * Created by wht719582321 on 2016/10/8.
 */
angular.module('myApp').controller('judgeLogCtrl', ["$state", "$scope", "gameService","roleClick","publicFunction","roleClick",
        function ($state, $scope, gameService,roleClick,publicFunction) {
                var vm=this;
                vm.versionId=$state.params.versionId;
                // 获取玩家列表
                vm.playerList=JSON.parse(localStorage.playerList);
                // 获取游戏配置
                vm.version = gameService.getVersonList().then(function (res) {
                        vm.version = res.data.data[vm.versionId];
                });
                // 查询玩家状态
                vm.inquireStatus=publicFunction.inquireStatus;
        }]);