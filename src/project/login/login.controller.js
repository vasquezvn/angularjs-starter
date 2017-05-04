
function LoginController($log) {
    $log.debug('Login Controller', 'running');
}

angular.module('login')
    .controller('LoginController', LoginController);