/**
 * Created by Fly-mydream on 16.10.25.
 */
angular.module('myApp')
    .controller("inputController",function($scope,$modalInstance,data){
       console.log(data);
        var arr=data.data;
        var number=data.value;
        $scope.judeg=true;
        $scope.ok=function(){
            for(var i in arr)
            {
                if(arr[i]==$scope.value)
                {
                    $scope.verify=false;
                    $scope.judeg=false;
                    back;
                }
                else{
                    $scope.verify=true;
                    $scope.judeg=true;
                }
            }
            if($scope.value>0&&$scope.value<=number&&$scope.judeg)
            {
                $modalInstance.close($scope.value);
            }
            else{
                console.log('输入有误')
            }

        }
    })
