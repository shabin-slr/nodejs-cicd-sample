var nock = require('nock');
const hotelSearchService = require("../../app/services/hotelSearchService");


describe("testing hotelSearchService", ()=>{
    var hotels = require("../utils/hotels");
    beforeEach(()=>{
        
        nock('https://api.myjson.com')
        .get('/bins/tl0bp')
        .reply(200, hotels)
    });
    
    afterEach(()=>{
        nock.cleanAll();
    });

    it("should return whole hotel list without any filters",(done)=>{
        hotelSearchService.searchHotels({}).then(result=>{
            expect(result.length).toBe(6)
            done();
        })
    });

    it("should filter hotel list by name",(done)=>{
        hotelSearchService.searchHotels({name : "Le"}).then(result=>{
            expect(result.length).toBe(1)
            done();
        })
    });

    it("should filter hotel list by city",(done)=>{
        hotelSearchService.searchHotels({city : "london"}).then(result=>{
            expect(result.length).toBe(1)
            done();
        })
    });

    it("should filter hotel list by availability",(done)=>{
        hotelSearchService.searchHotels({startDate : "2020-10-11", endDate : "2020-10-14"}).then(result=>{
            expect(result.length).toBe(4)
            done();
        })
    });
})