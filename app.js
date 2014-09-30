var app = angular.module('xp', ['ui.bootstrap']);

app.constant('config', window.config);



function AppCtrl(config, anchorSmoothScroll) {
    this.config = config;
    this.anchorSmoothScroll = anchorSmoothScroll;
}

app.controller('AppCtrl', AppCtrl);

AppCtrl.prototype.scrollToId = function(id) {
    this.anchorSmoothScroll.scrollTo(id);
};
