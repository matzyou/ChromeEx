var list = document.createElement("div");
list.id = "pre";
var pare = document.getElementById("main");
pare.appendChild(list);

var list2 = document.createElement("div");
list2.id = "pre2";
pare.appendChild(list2);

var list3 = document.createElement("div");
list3.id = "pre3";
pare.appendChild(list3);

$(document).ready(function(){
 var url = location.href.replace(/http:\/\/seiga.nicovideo.jp\/illust\/ranking\/point\//,"").split("/");
 if(url.length >= 2 && url[1] != "") return;
 url = url[0];
 switch(url){
	case "fresh":  case "hourly": case "daily": case "weekly": case "monthly": case "total":
		$("#pre").load("/illust/ranking/point/"+url+"/g_creation #rank_left_area a[class='center_img_inner ']");
		$("#pre2").load("/illust/ranking/point/"+url+"/g_fanart #rank_left_area a[class='center_img_inner ']");
		$("#pre3").load("/illust/ranking/point/"+url+"/g_popular #rank_left_area a[class='center_img_inner ']");	
		break;
	default : break;
 }
});


 
 