/**
 * Created by Fly-mydream on 16.10.25.
 */
angular.module('myApp')
    .controller("messageController",function($scope,$modalInstance,message,$rootScope){
        $scope.message=message;
        $rootScope.noBackSpace=true;
        var calll

        //简历侦听器
        document.addEventListener("keydown",function(e){
            calll=arguments.callee
            if(e.keyCode==8){
                console.log("点击了回退");
                return false
            }
        });

        //去除监听器
        function  removea(fun){
            document.removeEventListener("keydown",fun)
        }

        $scope.ok=function(){
            $rootScope.noBackSpace=null;
            $modalInstance.close();
            removea(calll)

        };





    })
