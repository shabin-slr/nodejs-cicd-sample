(()=>{
    class HotelSearchService{
        constructor($http){
            this.$http = $http

        }

        findHotels(filter){
            return this.$http.get("/search", {params : filter});
        }
    }
    angular.module("tajawal-test")
    .service("HotelSearchService", ["$http",HotelSearchService]);
})()