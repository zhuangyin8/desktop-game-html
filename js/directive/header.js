/**
 * Created by wht719582321 on 2016/9/22.
 */

// 滑动条与加减号指令
angular.module("myApp").directive("header1", function() {
    return {
        restrict :'E',
        scope:{
            aHrefLeft:'@',
            aHrefRight:'@',
            classHeader:'@',
            classLeft:'@',
            classRight:'@',
            title:'@'
        },
        templateUrl :"js/directive/header.html"

    };
});