describe('PhoneCat controllers', function(){
    describe('PhoneListCtrl', function(){
            var scope, ctrl, $httpBackend;

            beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('c').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            scope = $rootScope.$new();
            ctrl = $controller(PhoneListCtrl, {$scope: scope});
        }));
    });
});