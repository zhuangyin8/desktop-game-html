/**
 * Created by wht719582321 on 2016/10/1.
 */
// 数字转换为大写
angular.module('myApp').filter('daysNumFilter',function (daysNum) {
    return function (num) {
        for(var i=0;i<daysNum.length;i++){
            if(num==daysNum[i].num){
                return daysNum[i].numCn
            }
        }
    }
});
// angular.module('myApp').filter('wordFilter',function (gameService,$state) {
//     // var versionId=$state.params.versionId;//暂时无用
//
//     return function (wordType) {
//         var wordsCn;
//         return wordsCn=gameService.getVersonList(11).then(function (res){
//             wordsCn=res.data.data[11].CN.word;
//             console.log(1)
//             return wordsCn[wordType];
//         });
//     }
// });
angular.module('myApp').filter('daysGuideFilter',function (gameService,$state) {
    // var versionId=$state.params.versionId;//暂时无用
    var daysGuideCn=gameService.getVersonList(11).then(function (res){
        daysGuideCn=res.data.data[11].CN.daysGuide;
        console.log(daysGuideCn);
        return daysGuideCn
    });
    return function (guiDeType) {
        return daysGuideCn[guiDeType];
    }
});
