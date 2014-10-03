var app = angular.module('xp', ['ui.bootstrap']);

app.value('config', window.config);



function AppCtrl(config, anchorSmoothScroll) {
    this.data = this.buildConfigData(config);
    this.anchorSmoothScroll = anchorSmoothScroll;
}

app.controller('AppCtrl', AppCtrl);

AppCtrl.prototype.scrollToId = function(id) {
    this.anchorSmoothScroll.scrollTo(id);
};

AppCtrl.prototype.buildConfigData = function(config) {
    var data = angular.copy(config);

    data.experiences.forEach(function (experience) {
        if(experience.startDate) {
            experience.startDate = new Date(experience.startDate);

            if (experience.endDate) {
                experience.endDate = new Date(experience.endDate);
            } else {
                experience.endDate = new Date();
            }
        }
    });

    return data;
};
