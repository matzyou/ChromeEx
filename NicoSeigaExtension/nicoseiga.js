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
			$("#pre").load("/illust/ranking/point/"+url+"/g_creation #rank_left_area a[class='center_img_inner ']",function(){
						$('.center_img_inner',this).each(function(){
							var src = $('img',this).attr('src').replace('q','i');
							$(this).attr('rel','lightbox[illust_1]').attr('href',src);
						});
					});
			$("#pre2").load("/illust/ranking/point/"+url+"/g_fanart #rank_left_area a[class='center_img_inner ']",function(){
						$('.center_img_inner',this).each(function(){
							var src = $('img',this).attr('src').replace('q','i');
							$(this).attr('rel','lightbox[illust_2]').attr('href',src);
						});
					});
			$("#pre3").load("/illust/ranking/point/"+url+"/g_popular #rank_left_area a[class='center_img_inner ']",function(){
						$('.center_img_inner',this).each(function(){
							var src = $('img',this).attr('src').replace('q','i');
							$(this).attr('rel','lightbox[illust_3]').attr('href',src);
						});
					});
		break;
	default : break;
	}
	var nextURL = chrome.extension.getURL('images/next.png');
	nextURL = 'url("'+nextURL+'")';
	$(".lb-next").hover(function(){
			$(this).css({
				backgroundImage:nextURL,
				backgroundRepeat:'no-repeat',
				backgroundPosition:'right 48%'
		});
	},function(){
			$(this).css({
				backgroundImage:'none'
		});
	});
	
	var prevURL = chrome.extension.getURL('images/prev.png');
	prevURL = 'url("'+prevURL+'")';
	$(".lb-prev").hover(function(){
			$(this).css({
				backgroundImage:prevURL,
				backgroundRepeat:'no-repeat',
				backgroundPosition:'left 48%'
		});
	},function(){
			$(this).css({
				backgroundImage:'none'
		});
	});

	/*
 	$('.center_img_inner').each(function(){
		var src = $('img',this).attr('src').replace('q','i');
		$(this).attr('rel','lightbox[illust]').attr('href',src);
	});
	*/
});


 
 