/**
 * Created by wht719582321 on 2016/10/1.
 */
angular.module('myApp').controller('daysCtrl', ["$state", "$scope","$modal","gameService","publicFunction",
    function ($state, $scope,$modal, gameService,publicFunction) {
        var vm = this;

        // 后方页面所需数据处理
        // 由于点击导引栏需根据当前导引栏的角色是否全部死亡进行判断，
        // 而投票该步骤并非角色，而且参数页面所传信息并未对此参数进行设置
        // 所以需添加一虚拟数量；使之始终判断为存活，使该导引框始终可点击
        vm.playerNum=JSON.parse(localStorage.playerNum);
        vm.playerNum.vote=1;
        localStorage.playerNum=JSON.stringify(vm.playerNum);
        // playerNum参数添加 End

        // 获取所需信息
        vm.versionId=$state.params.versionId;                           // 获取版本ID
        vm.playerList=JSON.parse(localStorage.playerList);
        vm.playerNum = JSON.parse(localStorage.playerNum);              // 获取存活人数信息
        vm.days = JSON.parse(localStorage.days);                        // 获取天数信息




        vm.guideHitCount = JSON.parse(localStorage.guideHitCount);      // 获取获取引导栏点击次数信息
        vm.version = gameService.getVersonList().then(function (res) { // 获取版本信息
            vm.version = res.data.data[vm.versionId];
        });
        // 获取数据 End

        vm.guess=function () {
            var goust=function () {
                for(var i=0,sum=0;i<vm.playerList.length;i++){
                    if(vm.playerList[i].role=="ghost"){
                        sum++
                    }
                }
                return sum+1
            }();
          alert("请幽灵向法官提问"+goust+"个问题，如果猜出水民身份则幽灵胜利，反之则水民胜利")
        };
        // 点击引导框
        vm.canJumpPage=function (guide,num,index,day) {
            // 判断当前引导框是否需要跳转
            var res=publicFunction.canClickOfDaysGuide(vm.version,guide,vm.guideHitCount,day,vm.playerNum);
            if(res){
                $state.go("gameTime",({versionId:vm.versionId,gameTime:vm.version.time[num],role:guide}));
            }else{}
        }
    }]);

