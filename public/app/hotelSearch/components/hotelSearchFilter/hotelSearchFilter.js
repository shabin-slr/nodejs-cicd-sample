(()=>{
    class HotelSearchFilterController {
        constructor(HotelSearchService){
            this.HotelSearchService = HotelSearchService;
            this.filter = {};
            this.startDatePicker = {
                isOpen : false
            };
            this.endDatePicker = {
                isOpen : false
            }
        };

        $onInit(){
            console.log(this.hotels);
            this.searchHotels();
        };

        searchHotels(){
            /* if(this.filter.startDate){
                if(this.filter.startDate && this.filter.startDate.match(/\d{4}-\d{2}-\d{2}/)){
                    this.filter.startDate = this.filter.startDate.match(/\d{4}-\d{2}-\d{2}/)[0]
                }
            }
            if(this.filter.endDate){
                if(this.filter.endDate && this.filter.endDate.match(/\d{4}-\d{2}-\d{2}/)){
                    this.filter.endDate = this.filter.endDate.match(/\d{4}-\d{2}-\d{2}/)[0]
                }
            } */
            this.HotelSearchService.findHotels(this.filter)
            .then(data=>{
                /* data.data.forEach(hotel=>{
                    hotel.availability = hotel.availability.map(x=>x.from+' to '+x.to).join(', ')
                }) */
                this.hotels = data.data;
            })
        };

        resetSearch(){
            this.filter = {};
            this.searchHotels();
        }
    };
    angular.module("tajawal-test").component("hotelSearchFilter",{
        templateUrl : "/app/hotelSearch/components/hotelSearchFilter/hotelSearchFilter.html",
        controller : ['HotelSearchService', HotelSearchFilterController],
        controllerAs : "$ctrl",
        bindings : {
            hotels : '='
        }
    });
    //HotelSearchFilterController.$inject = ['HotelSearchService']
})();