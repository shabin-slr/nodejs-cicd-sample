(()=>{
    class HotelListController {
        constructor(){
            this.sortReverse = true;
            this.sortBy = "name";
        }
    };
    angular.module("tajawal-test").component("hotelList",{
        templateUrl : "/app/hotelSearch/components/hotelList/hotelList.html",
        controller : HotelListController,
        controllerAs : "$ctrl",
        bindings : {
            hotels : '<'
        }
    })
})();