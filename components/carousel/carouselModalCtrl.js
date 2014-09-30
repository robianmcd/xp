(function(){
    function CarouselModalCtrl(mediaList, activeIndex, $modalInstance) {
        this.mediaList = mediaList;
        this.activeIndex = activeIndex;
        this.$modalInstance = $modalInstance;
    }

    angular.module('xp').controller('CarouselModalCtrl', CarouselModalCtrl);
})();