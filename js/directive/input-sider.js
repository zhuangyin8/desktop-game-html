/**
 * Created by Fly-mydream on 16.10.3.
 */
angular.module("myApp",[])
       .directive("inputSilder",function(){
           return{
               restrict:'E',
               templaterUrl:"js/directive/input-slider.html"
           }
       })