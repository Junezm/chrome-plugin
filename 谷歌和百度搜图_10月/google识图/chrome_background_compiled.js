function k(a){for(var e=0,c;c=a[e++];)if(!("a"<=c&&"z">=c||"A"<=c&&"Z">=c||"0"<=c&&"9">=c||"+"==c||"/"==c||"."==c||"="==c))return!1;return!0}
function l(a,e,c,d){a=a.substring(a.indexOf(",")+1).replace(/\+/g,"-").replace(/\//g,"_").replace(/\./g,"=");var g="cr_1_5_1";"camera_button"==e&&(g+="_h");e="<html><head><title>"+chrome.i18n.getMessage("extensionName")+'</title></head><body><form id="f" method="POST" action="http://image.baidu.com/?fr=shitu" enctype="multipart/form-data"><input type="hidden" name="image_content" value="'+a+'"><input type="hidden" name="filename" value=""><input type="hidden" name="image_url" value=""><input type="hidden" name="sbisrc" value="'+
g+'">';void 0!==c&&void 0!==d&&(e+='<input type="hidden" name="width" value="'+c+'"><input type="hidden" name="height" value="'+d+'">');return e+'</form><script>document.getElementById("f").submit();\x3c/script></body></html>'}function m(a,e,c){0==a.indexOf("data:")?n(a,e,c):chrome.storage.sync.get("sbi_get_url",function(d){d.a?p(a,e,c):q(a,e,c)})}
function q(a,e,c){var d=document.createElement("img");d.onload=function(){var a,b;a=d.width;b=d.height;if(600<a){var f=600/a;a*=f;b*=f}400<b&&(f=400/b,a*=f,b*=f);9E4<a*b&&(f=Math.sqrt(9E4/(a*b)),a*=f,b*=f);a=Math.round(a);b=Math.round(b);f=document.createElement("canvas");f.width=a;f.height=b;var h=f.getContext("2d");h.fillStyle="#ffffff";h.fillRect(0,0,a,b);h.drawImage(d,0,0,a,b);a=f.toDataURL("image/jpeg",0.9);d.src=null;n(a,e,c,d.width,d.height)};d.src=a}
function n(a,e,c,d,g){if(void 0!==a){var b=a.toLowerCase();if(0==b.indexOf("data:image/bmp;")||0==b.indexOf("data:image/gif;")||0==b.indexOf("data:image/jpeg;")||0==b.indexOf("data:image/jpg;")||0==b.indexOf("data:image/png;")||0==b.indexOf("data:image/webp;")||0==b.indexOf("data:image/tiff;")||0==b.indexOf("data:image/x-ico;")||0==b.indexOf("data:image/x-tiff;"))if(b=a.indexOf(","),-1!=b&&k(a.substring(b+1))){a=l(a,c,d,g);var f="data:text/html;charset=utf-8;base64,"+window.btoa(a);chrome.tabs.query({active:!0,
lastFocusedWindow:!0},function(a){chrome.tabs.create({url:f,index:a[0].index+1,selected:e})})}}}function p(a,e,c){var d="cr_1_5_1";"camera_button"==c&&(d+="_h");var g="https://www.google.com/searchbyimage?sbisrc="+d+"&image_url="+encodeURIComponent(a);chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(a){chrome.tabs.create({url:g,index:a[0].index+1,selected:e})})}chrome.extension.onMessage.addListener(function(a){switch(a.action){case "sbiSearch":m(a.url,a.selected,a.source)}});chrome.contextMenus.onClicked.addListener(function(a){m(a.srcUrl,!0,"context_menu")});chrome.contextMenus.create({title:chrome.i18n.getMessage("contextMenuTitle"),contexts:["image"],id:"sbiContextMenu"});
