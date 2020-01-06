describe("Test HotelSearchService", ()=>{
    var HotelSearchService, $httpBackend;

    beforeEach(module("tajawal-test"));

    beforeEach(inject(($injector)=>{
        $httpBackend = $injector.get('$httpBackend');
        HotelSearchService =$injector.get("HotelSearchService") ;
        //httpBackend = $httpBackend;
    }));
    //afterEach($httpBackend.verifyNoOutstandingExpectation);
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });


    it("findHotels() should resolve an array",(done)=>{
        $httpBackend.whenGET("/search").respond({data:[]});
        HotelSearchService.findHotels().then(data=>{
            expect(data.data).toEqual({data:[]});
            done();
        });
        $httpBackend.flush();
    });

    it("findHotels() should make a get request",(done)=>{
        $httpBackend.expectGET("/search").respond({data:[]});
        HotelSearchService.findHotels().then(data=>{
            expect(data.data).toEqual({data:[]});
            done();
        });
        $httpBackend.flush();
    });

    it("findHotels() should make a get request with params",(done)=>{
        $httpBackend.expectGET("/search?name=test").respond({data:[]});
        HotelSearchService.findHotels({name : "test"}).then(data=>{
            expect(data.data).toEqual({data:[]});
            done();
        });
        $httpBackend.flush();
    });
});