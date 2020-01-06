describe("testing hotelSearchComponent", ()=>{
    var $componentController;

    beforeEach(module('tajawal-test'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it("should initialize hotels array", function(done){
        var $ctrl = $componentController('hotelSearch', null, {});
        expect(JSON.stringify($ctrl.hotels)).toBe('[]');
        done();
    })
})