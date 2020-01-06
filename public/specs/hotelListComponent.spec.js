describe("testing hotelSearchComponent", ()=>{
    var $componentController;

    beforeEach(module('tajawal-test'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it("should initialize hotels array from binding", function(done){
        var $ctrl = $componentController('hotelList', null, {
            hotels : []
        });
        expect(JSON.stringify($ctrl.hotels)).toBe('[]');
        done();
    })
})