/*
ModalBox.js v 1.0.0
Author: sudhanshu yadav

Copyright (c) 2013 Sudhanshu Yadav, released under the MIT license.
s-yadav.github.com
*/
(function(e,t,n,r){e.fn.modalBox=function(e,t){if(a[e]){a[e].call(this,t)}else if(typeof e==="object"||!e){a.open.call(this,e)}return this};e.modalBox={};e.modalBox.defaults={width:"auto",height:"auto",left:"auto",top:"auto",overlay:true,iconClose:false,keyClose:true,bodyClose:true,iconImg:"image/closeIcon.png",onOpen:function(){},onClose:function(){}};e.modalBox.close=function(){e(".iw-modalBox").each(function(){a["close"].call(e(this))})};var i=function(t){var n=t.keyCode;if(n==27){e.modalBox.close()}};var s=function(t){if(t.data){a["close"].call(t.data.modalBox)}else{e.modalBox.close()}};var o=function(n){var r=n.data.img,i=n.data.elm;r.css({top:i.offset().top-e(t).scrollTop()-8+"px",left:i.offset().left-e(t).scrollLeft()+i.width()-8+"px",position:"fixed","z-index":"99999"})};var u=function(){e("body").append('<div class="iw-modalOverlay"></div>');e(".iw-modalOverlay").css({display:"block",width:"100%",height:"100%",position:"fixed",top:0,left:0,display:"block","z-index":"1000"})};var a={open:function(n){n=e.extend({},e.modalBox.defaults,n);var r=this,a=r.width(),f=r.height(),l=r.outerWidth(),c=r.outerHeight(),h=e(t).width(),p=e(t).height(),d=n.width!="auto"?n.width:Math.min(l,h)-(l-a),v=n.height!="auto"?n.height:Math.min(c,p)-(c-f);r.data("iw-size",{width:a,height:f}).addClass("iw-modalBox").css({width:d,height:v,position:"fixed"});var m="50%",g="50%",y=r.outerWidth()/2,b=r.outerHeight()/2;if(n.left!="auto"){g=n.left;y="0"}if(n.top!="auto"){m=n.top;b="0"}r.css({top:m,left:g,"margin-left":-y,"margin-top":-b,display:"block","z-index":"99999"});if(n.overlay){u()}if(n.iconClose){if(r.outerWidth()<h-50&&r.outerHeight()<p-50){var w=Math.ceil(Math.random()*1e3)+"close";var E=e('<img src="'+n.iconImg+'" class="iw-closeImg" id="'+w+'"/>');r.attr("closeImg",w);E.bind("click",{modalBox:r},s);e(t).bind("resize",{img:E,elm:r},o);e(t).triggerHandler("resize");e("body").append(E)}}if(n.keyClose){e("html").bind("keyup",i)}if(n.bodyClose){var S=e(".iw-modalOverlay");if(S.length==0){u();S=e(".iw-modalOverlay");S.css({background:"none"})}S.bind("click",s)}n.onOpen.call(this);r.data("closeFun",n.onClose)},close:function(){var n=this;if(n.data("iw-size")){var r=n.attr("closeImg");if(r){n.removeAttr("closeImg");e("#"+r).remove()}n.css({display:"none",width:n.data("iw-size").width,height:n.data("iw-size").height});n.data("closeFun").call(this);n.removeData("iw-size").removeData("closeFun").removeClass("iw-modalBox");if(e(".iw-modalBox").length==0){e(".iw-modalOverlay").remove();e("html").unbind("keyup",i);e(t).unbind("resize",o)}}}}})(jQuery,window,document)