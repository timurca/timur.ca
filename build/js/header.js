$(function(){$(window).scroll(function(){var o=$(window).scrollTop();o>=30?$("body").addClass("sticky-header"):$("body").removeClass("sticky-header")}),$(window).scroll(function(){var o=$(window).scrollTop(),i=$(document).height(),n=$(window).height(),s=o/(i-n)*100;$(".scroll-line").css("width",s+"%")}),setTimeout(function(){$(".i1").show()},2500),setTimeout(function(){$(".i2").show()},3500),setTimeout(function(){$(".i3").show()},4500),setTimeout(function(){$(".i4").show()},5500)});