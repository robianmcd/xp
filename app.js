var app = angular.module('xp', ['ui.bootstrap', 'ngTagsInput']);

app.value('config', window.config);


function AppCtrl($scope, $q, config, anchorSmoothScroll) {
    this.$scope = $scope;
    this.$q = $q;
    this.data = this.buildConfigData(config);
    this.anchorSmoothScroll = anchorSmoothScroll;

    this.boundFilterExperiences = this.filterExperiences.bind(this);
    this.searchTags = [];

    this.showProfessional = true;
    this.showSideProjects = true;
    this.showPublicSpeaking = true;

    this.$scope.filteredExperiences = [];
}

app.controller('AppCtrl', AppCtrl);

AppCtrl.prototype.scrollToId = function (id) {
    this.anchorSmoothScroll.scrollTo(id);
};

AppCtrl.prototype.buildConfigData = function (config) {
    var data = angular.copy(config);

    var today = new Date();

    data.experiences.forEach(function (experience) {
        if (experience.startDate) {
            //the month, year format for dates in the config file works fine in Chrome but not in
            // Firefox so we need to add a day number.
            var parsableStartDate = experience.startDate.replace(',', '1,');
            experience.startDate = new Date(Date.parse(parsableStartDate));

            if (experience.endDate) {
                var parsableEndDate = experience.endDate.replace(',', '1,');
                experience.endDate = new Date(Date.parse(parsableEndDate));
            } else {
                experience.endDate = today;
            }
        }
    });

    return data;
};

AppCtrl.prototype.getMatchingTags = function (query) {
    var promiseMgr = this.$q.defer();

    var results = [];

    for (tagName in this.data.tagDefs) {
        if (this.data.tagDefs.hasOwnProperty(tagName) &&
            tagName.toLowerCase().indexOf(query.toLowerCase()) != -1) {
            results.push({text: tagName});
        }
    }


    promiseMgr.resolve(results);
    return promiseMgr.promise;
};

AppCtrl.prototype.filterExperiences = function (experience) {
    var matchesSearchTags = true;

    if (this.searchTags.length > 0) {
        matchesSearchTags = false;
        this.searchTags.forEach(function (searchTag) {
            if (experience.tags.indexOf(searchTag.text) != -1) {
                matchesSearchTags = true;
            }
        });
    }

    var matchesToggles;

    switch (experience.type) {
        case 'professional':
            matchesToggles = this.showProfessional;
            break;
        case 'sideProject':
            matchesToggles = this.showSideProjects;
            break;
        case 'publicSpeaking':
            matchesToggles = this.showPublicSpeaking;
            break;
    }

    return matchesSearchTags && matchesToggles;
};

AppCtrl.prototype.getNumProfessional = function () {
    return this.getNumExperiencesOfType('professional');
};

AppCtrl.prototype.getNumSideProjects = function () {
    return this.getNumExperiencesOfType('sideProject');
};

AppCtrl.prototype.getNumPublicSpeaking = function () {
    return this.getNumExperiencesOfType('publicSpeaking');
};

AppCtrl.prototype.getNumExperiencesOfType = function (type) {
    return this.$scope.filteredExperiences.filter(function (experience) {
        return experience.type === type;
    }).length;
};

AppCtrl.prototype.getVisibleTagList = function(experience) {
    if (!experience.featuredTags || experience.showAllTags) {
        return experience.tags;
    } else {
        return  experience.featuredTags;
    }
};

AppCtrl.prototype.onTagClick = function(tag) {
    this.scrollToId('experiences');
    this.searchTags=[{text: tag}];
};