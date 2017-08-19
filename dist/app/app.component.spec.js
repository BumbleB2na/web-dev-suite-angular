"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// Making this a "shallow component test" with NO_ERRORS_SCHEMA and "component stubbing"
// This prevents compiler errors with <select-shorten-demo>
var core_2 = require("@angular/core");
var SelectShortenDemoStubComponent = (function () {
    function SelectShortenDemoStubComponent() {
    }
    return SelectShortenDemoStubComponent;
}());
SelectShortenDemoStubComponent = __decorate([
    core_1.Component({
        selector: 'select-shorten-demo',
        template: 'NOTE: Stubbed out SelectShortenDemoComponent for testing to prevent compiler errors'
    })
], SelectShortenDemoStubComponent);
exports.SelectShortenDemoStubComponent = SelectShortenDemoStubComponent;
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, SelectShortenDemoStubComponent],
            schemas: [core_2.NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('select-shorten-demo'));
    });
    it('should create component', function () {
        fixture.detectChanges();
        expect(comp).toBeDefined();
    });
});

//# sourceMappingURL=app.component.spec.js.map
