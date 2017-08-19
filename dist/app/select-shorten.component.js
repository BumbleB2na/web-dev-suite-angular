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
var SelectShortenComponent = (function () {
    function SelectShortenComponent() {
        this.maxWidthChange = new core_1.EventEmitter();
        this.options = OPTIONS;
    }
    SelectShortenComponent.prototype.changeMaxWidth = function (width) {
        this.maxWidth = width;
        this.maxWidthChange.emit(this.maxWidth);
    };
    SelectShortenComponent.prototype.shortenOptionText = function (text, reverseEllipsis) {
        var doReverse = (typeof reverseEllipsis === 'undefined') ? false : reverseEllipsis;
        var textLen = text.length;
        var maxChars = (this.maxWidth / 7.3); // get max number of characters that will fit comfortably within a pixel width
        if (textLen > maxChars) {
            var ellipsis = '...';
            if (doReverse) {
                text = text.substr(0, (maxChars - ellipsis.length)) + ellipsis;
            }
            else {
                text = ellipsis + text.substr((textLen - maxChars - ellipsis.length), textLen);
            }
        }
        return text;
    };
    return SelectShortenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectShortenComponent.prototype, "maxWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectShortenComponent.prototype, "reverseEllipsis", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectShortenComponent.prototype, "maxWidthChange", void 0);
SelectShortenComponent = __decorate([
    core_1.Component({
        selector: 'select-shorten',
        template: "\n        <select [style.max-width.px]=\"maxWidth\">\n            <option *ngFor=\"let option of options\" [value]=\"option.value\" [innerText]=\"shortenOptionText(option.innerText)\" [title]=\"option.innerText\"></option>\n        </select>\n    "
    })
], SelectShortenComponent);
exports.SelectShortenComponent = SelectShortenComponent;
var OPTIONS = [
    { value: 1, innerText: "Item with text that is too long to fit inside a select option" },
    { value: 2, innerText: "Item 2" },
    { value: 3, innerText: "Item 3" },
    { value: 4, innerText: "Item 4" },
    { value: 5, innerText: "Item 5" },
];
var Option = (function () {
    function Option() {
    }
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=select-shorten.component.js.map