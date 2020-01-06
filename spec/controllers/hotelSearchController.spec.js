/* 
var request = require("request");
var base_url = "http://localhost:3000/";
var mock = require('mock-require');

describe("Testing hoteSearchController", function(){
    var  server, mockHandle, spy, hotelSearchController;
    
    it('should call handleSearchRequest() on GET /search', function(done) {
        mockHandle = {
            handleSearchRequest : (req, res) => {
                res.send([])
            }
        };
        spy = spyOn(mockHandle, "handleSearchRequest").and.callThrough();
        hotelSearchController = {
            handleSearchRequest: mockHandle.handleSearchRequest
        };

        mock("../../app/controllers/hotelSearchController", hotelSearchController);
        server = require("../utils/server")();
        
        request.get(base_url+"search", function(error, response, body) {
            expect(spy).toHaveBeenCalled();
            mock.stop("../../app/controllers/hotelSearchController");
            mock.stopAll();
            spy = null;
            server.close(done);
        });
    });
}); */