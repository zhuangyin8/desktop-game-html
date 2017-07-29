/**
 * Created by wht719582321 on 2016/10/1.
 */
angular.module('myApp',[])
    .controller("settingCtrl",['$scope','$stateParams','$location','gameService',function($scope,$stateParams,$location,gameService){
        var vm = this;
        var gameString;
        var killNum=[];
        var playerArr=[] ;
        //获取gameList传过来的versionId
        $scope.gameVersionId=$stateParams.versionId;
        sessionStorage.versionId=JSON.parse($scope.gameVersionId);
        //获取gameService中的VersionList
            gameService.getVersonList().then(function(res){
                $scope.versionList=res.data.data[$scope.gameVersionId];
                $scope.numberState=res.data.data[$scope.gameVersionId].playerNumDefault;

                if($scope.gameVersionId==11||$scope.gameVersionId==12||$scope.gameVersionId==13)
                {
                    if(!localStorage.string|| !localStorage.number){
                        $scope.playerNumDefault=$scope.numberState;
                    }else{
                        gameString=JSON.parse(localStorage.string);
                        number=JSON.parse(localStorage.number);
                        $scope.showWaterWord=gameString[0];
                        $scope.showSpiritWord=gameString[1];
                        $scope.playerNumDefault=number;
                        console.log($scope.playerNumDefault)
                    }
                }else{
                    if(!localStorage.number){
                        $scope.playerNumDefault=$scope.numberState;
                    }else {
                        number=JSON.parse(localStorage.number);
                        $scope.playerNumDefault=number;
                        console.log($scope.playerNumDefault)
                    }

                }
            });



        //判断是否为捉鬼游戏如果是则将本地存储的词组输入到view中。


        //用户点击发牌所采取的动作
        $scope.playerAllot=function(){
            //如果用户玩的是捉鬼游戏并且用户输入的词组
             var judgeState=gameService.setDecideUserInput($scope.gameVersionId,$scope.showSpiritWord,$scope.showWaterWord,$scope.playerNumDefault,$scope.versionList.numMin,$scope.versionList.numMax);
            if(judgeState==1){
                return ;
            }else{
                var playerNum=$scope.versionList.playerNum[$scope.playerNumDefault];
                var playerRole=$scope.versionList.role;
                playerArr=gameService.setPlayerArr(playerNum,playerRole);
                playerArr=gameService.setRandomSort(playerArr);
                gameService.setLocalStorage($scope.showWaterWord,$scope.showSpiritWord,$scope.playerNumDefault);
                gameService.setOrderPlayerArr(playerArr,$scope.showWaterWord,$scope.showSpiritWord,$scope.gameVersionId);
                localStorage.killNum=JSON.stringify(killNum);
                gameService.setplayerNum(playerNum,playerRole);
                playerArr=null;
            }
            if(playerArr==null){
                $location.path("viewCard");
            }
        }
    }]);

