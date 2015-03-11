var userModule = (function() {
	'use strict';
	var userModule = {
        //页面初始化
        register: function() {
            $("#register-form").on('submit', function(){
                var postData = globalModule.getJsonDataFromSeriaArr($(this).serializeArray());
                globalModule.jsonp('user', 'register', postData, userModule.afterRegister);
                return false;
            });
        },
        afterRegister: function(result) {
            console.log(result);
        },
        //页面初始化
        login: function() {
            $("#login-form").on('submit', function(){
                var postData = globalModule.getJsonDataFromSeriaArr($(this).serializeArray());
                globalModule.jsonp('user', 'login', postData, userModule.afterLogin);
                return false;
            });
        },
        afterLogin: function(result) {
            if (result.error == 0) {
                var user = result.msg;
                CLIENTSTATUS.login = true;
                CLIENTSTATUS.uid = user.user_id;
                CLIENTSTATUS.name = user.name;
                window.location.href = "/";
            }
        },
    }

	return userModule;
}());