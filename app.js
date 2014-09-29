var app = angular.module('xp', ['ui.bootstrap']);

app.constant('config', window.config);

function AppCtrl(config) {
    this.config = config;
}

app.controller('AppCtrl', AppCtrl);
