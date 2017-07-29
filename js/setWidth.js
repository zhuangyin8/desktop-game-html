/**
 * Created by wht719582321 on 2016/10/11.
 */

var html = document.getElementsByTagName("html")[0];
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var modal=document.getElementsByTagName("modal-dialog")[0];
var windowWidth = html.clientWidth;
var windowHeight = html.clientHeight;
if (windowWidth / windowHeight >= 0.625) {
    var width = windowHeight * 0.625;
    html.style.width = width + "px";
    if(header!=null){
        header.style.width = width + "px";
    }
    if(footer!=null){
        footer.style.width = width + "px";
    }
    if(modal!=null){
        modal.style.width=width*0.8+ "px";
        console.log(modal.style.width)
    }
}
html.style.fontSize=width/6.4+'px';