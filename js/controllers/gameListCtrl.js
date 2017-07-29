/**
 * Created by wht719582321 on 2016/9/30.
 */
angular.module('myApp').controller('gameListCtrl',['$scope','$state','gameService',function ($scope,$state,gameService) {
    var vm = this;
    //获取上次游戏versionId；
    var lastGame=$state.params.versionId||sessionStorage.versionId;
    //设置显示默认游戏类型列表
    $scope.active=[true,false];
    //获取gameServeice服务中的（getGameList）游戏列表
    gameService.getGameList().then(function (res) {
        $scope.gameList=res.data;
    });

    //获取gameServiec服务中的(versionList)游戏版本信息
    gameService.getVersonList().then(function(res){
        //判断玩家是否已经玩过游戏，如果第一次玩，laseGame==undefined；
        if(lastGame==undefined)
        {
            //显示图标 title-right.png false为不显示，否则显示。
            $scope.judeg=false;
            //设置游戏文本。
            $scope.gameService="请点击按钮开始游戏";
            //设置默认显示的游戏类型列表index;
            if(!sessionStorage.index)
            {
                $scope.index=0;
                sessionStorage.index=JSON.parse($scope.index);
                $scope.active=gameService.setStateChange($scope.index,$scope.active);

            }
            else{
                $scope.index=JSON.parse(sessionStorage.index);
                $scope.active=gameService.setStateChange($scope.index,$scope.active);

            }
        }else{
            $scope.judeg=true;
            $scope.gameService="上次游戏:"+(res.data.data[lastGame].title);
            $scope.index=JSON.parse(sessionStorage.index);
            $scope.active=gameService.setStateChange($scope.index,$scope.active);
        }
    });
    //如果玩家上次玩过游戏，用户可以点击跳转。
    $scope.goToSetting=function(){
        if($scope.judeg==true)
            $state.go("setting",({versionId:lastGame}))
    };
    //用户点击左右按钮进行游戏类型列表的切换
    $scope.changeNext=function(){
        $scope.index=$scope.index+1;
        if($scope.index==$scope.active.length)
        {
            $scope.index=0;
        }
        //将玩家点击的游戏类型列表存于本地sessionStorage中记录玩家上次所玩的游戏版本。
        sessionStorage.index=JSON.parse($scope.index);
        //切换游戏版本列表。
        $scope.active=gameService.setStateChange($scope.index,$scope.active);
    };
    $scope.changePre=function(){
        $scope.index=$scope.index-1;
        if($scope.index==-1)
        {
            $scope.index=$scope.active.length-1;
        }
        sessionStorage.index=JSON.parse($scope.index);
        $scope.active=gameService.setStateChange($scope.index,$scope.active);
    }
}]);