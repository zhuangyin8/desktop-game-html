/**
 * Created by wht719582321 on 2016/8/8.
 */
var app = angular.module('myApp', ['oc.lazyLoad', 'ui.router','ngAnimate','ui.bootstrap']);
app.config(projectRouteConfig);
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
    $urlRouterProvider.otherwise("/index");
    $stateProvider
    // 冷启动
        .state('cold', {
            url: '/cold',
            title: '冷启动',
            templateUrl: 'view/cold-start-page.html',
            controller: "coldStartCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/cold-start-page.css',
                    'js/controllers/coldStartCtrl.js',
                    // 'js/setWidth.js'
                ])
            }
        })
        // 主页-版本选择
        .state('index', {
            url: '/index?versionId',
            title: '选择游戏版本',
            templateUrl: 'view/gameList.html',
            controller: "gameListCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/gameList.css',
                    'js/controllers/gameListCtrl.js'
                ])
            }
        })
        // 设置身份
        .state('setting', {
            url: '/setting?versionId',
            title: '设置身份',
            templateUrl: 'view/setting-page.html',
            controller: "settingCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/setting.css',
                    'js/controllers/settingCtrl.js',
                    'js/controllers/gameListCtrl.js'
                ])
            }
        })
        //查看身份
        .state('viewCard', {
            url: '/viewCard?versionId',
            title: '查看身份',
            templateUrl: 'view/viewCard.html',
            controller: "viewCardCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/viewCard.css',
                    'js/controllers/viewCardCtrl.js'
                ])
            }
        })
        //法官查看
        .state('judgeView', {
            url: '/judgeView?versionId',
            title: '法官查看',
            templateUrl: 'view/judgeView.html',
            controller: "judgeViewCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/judgeView.css',
                    'js/controllers/judgeViewCtrl.js'
                ])
            }
        })
         //天数
        .state('days', {
            url: '/days?versionId',
            title: '天数',
            templateUrl: 'view/days.html',
            controller: "daysCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/days.css',
                    'js/controllers/daysCtrl.js'
                ])
            }
        })
        // 玩家动作页面
        .state('gameTime', {
            url: '/gameTime?versionId?gameTime?role',
            title: '玩家动作',
            templateUrl: 'view/gameTime.html',
            controller: "gameTimeCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/gameTime.css',
                    'js/controllers/gameTimeCtrl.js'
                ])
            }
        })
        // 结束页面
        .state('gameOver', {
            url: '/gameOver?versionId',
            title: '游戏结束',
            templateUrl: 'view/gameOver.html',
            controller: "gameOverCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/gameOver.css',
                    'js/controllers/gameOverCtrl.js'
                ])
            }
        })
        .state('judgeLog', {
            url: '/judgeLog?versionId',
            title: '法官日志',
            templateUrl: 'view/judgeLog.html',
            controller: "judgeLogCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/judgeLog.css',
                    'js/controllers/judgeLogCtrl.js'
                ])
            }
        })
        //帮助页面
        .state('gameHelp', {
            url: '/gameHelp',
            title: '帮助',
            templateUrl: 'view/gameHelp.html',
            controller: "",
            controllerAs: '',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/gameHelp.css'
                ])
            }
        })
        //关于
        .state('gameAbout-us', {
            url: '/gameAbout-us',
            title: '帮助',
            templateUrl: 'view/gameAbout-us.html',
            controller: "",
            controllerAs: '',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/gameAbout-us.css'
                ])
            }
        })
    //公告
        .state('game-notice', {
            url: '/game-notice',
            title: '帮助',
            templateUrl: 'view/game-notice.html',
            controller: "",
            controllerAs: '',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/game-notice.css'
                ])
            }
        })
}
