
var authenticationMainModule =angular.module('authenticationMainModule',['authenticationModuleController','authenticationInterceptorFactory','angular-loading-bar']);


authenticationMainModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});


authenticationMainModule.run(['AuthenticationFactory', function (AuthenticationFactory) {
	AuthenticationFactory.fillAuthData();
}]);