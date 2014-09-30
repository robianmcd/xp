(function(){
    angular.module('xp').directive('xpCarousel', function () {
        return {
            restrict: 'E',
            scope: {
                mediaList: '=',
                size: '@',
                activeIndex: '=',
                modalInstance: '='
            },
            templateUrl: 'components/carousel/carouselDirective.html',
            controller: CarouselDirectiveCtrl,
            controllerAs: 'ctrl',
            bindToController: true
        };
    });

    function CarouselDirectiveCtrl($modal) {
        this.$modal = $modal;

        this.mediaList[this.activeIndex].active = true;
    }

    CarouselDirectiveCtrl.prototype.onImgClick = function(index) {
        var _this = this;

        if(this.size === 'small') {
            this.$modal.open({
                templateUrl: 'components/carousel/carouselModal.html',
                controller: 'CarouselModalCtrl',
                controllerAs: 'ctrl',
                size: 'lg',
                resolve: {
                    mediaList: function () {
                        return _this.mediaList;
                    },
                    activeIndex: function () {
                        return index;
                    }
                }
            });
        } else if (this.size === 'large') {
            this.modalInstance.close();
        }
    };

})();