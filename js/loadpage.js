var itemModule = (function() {
	'use strict';
	var itemModule = {
        //页面初始化
        init: function() {
            itemModule.loadPage("common/header", "#header");
            itemModule.loadPage("common/footer", "#footer");
            if (CLIENTSTATUS.login) {
                $("#header h1").html('<a href="#">' + CLIENTSTATUS.name + '</a>');
            }
        },
        /**
         * 加载子页面
         * @param page 页面名称（包含路径，相对于pages目录）
         * @param outContainer 外层div容器的jQuery选择器
         */
		loadPage: function(page, outContainer) {
            $.ajax({
                async: false,
                url: "pages/" + page + ".html",
                success: function(data) {
                    $(outContainer).html(data);
                },
                error: function(error, errorMsg, statusText) {
                    $(outContainer).html(statusText);
                }
            });
        }
    }

	return itemModule;
}());