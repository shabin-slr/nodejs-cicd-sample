
(()=>{
    class HotelSearchController{
        constructor(){
            this.hotels = [];
        };
    };
    angular.module("tajawal-test").component("hotelSearch",{
        templateUrl : "/app/hotelSearch/hotelSearch.html",
        controller : HotelSearchController,
        controllerAs : '$ctrl',
        bindings : {

        }
    })
})();