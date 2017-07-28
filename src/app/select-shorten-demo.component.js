"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SelectShortenDemoComponent = (function () {
    function SelectShortenDemoComponent() {
        this.maxWidthChange = new core_1.EventEmitter();
        this.maxWidthChangePerc = new core_1.EventEmitter();
    }
    SelectShortenDemoComponent.prototype.changeMaxWidth = function (width) {
        this.maxWidth = width;
        this.maxWidthChange.emit(this.maxWidth);
    };
    SelectShortenDemoComponent.prototype.changeMaxWidthPerc = function (width) {
        this.maxWidthPerc = width;
        this.maxWidthChangePerc.emit(this.maxWidthPerc);
    };
    return SelectShortenDemoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectShortenDemoComponent.prototype, "maxWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectShortenDemoComponent.prototype, "maxWidthPerc", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectShortenDemoComponent.prototype, "maxWidthChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectShortenDemoComponent.prototype, "maxWidthChangePerc", void 0);
SelectShortenDemoComponent = __decorate([
    core_1.Component({
        selector: 'select-shorten-demo',
        templateUrl: './select-shorten-demo.component.html'
    })
], SelectShortenDemoComponent);
exports.SelectShortenDemoComponent = SelectShortenDemoComponent;
//# sourceMappingURL=select-shorten-demo.component.js.map