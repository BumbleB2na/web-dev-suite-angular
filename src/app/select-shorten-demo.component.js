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
        template: "\n        <article>\n            <header>\n                <h1>CSS/Html problem to solve</h1>\n            </header>\n            <p>\n                Text within &lt;select&gt; children &lt;option&gt; elements may be too long, causing unwanted results in the UI. By default &lt;select&gt; elements are not responsive. This part of the problem is easily solved by setting <i>max-width:100%;</i> css on the &lt;select&gt; element.\n            </p>\n            <div style=\"max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;\">\n                <p>\n                    <i>Try it out:</i>\n                </p>\n                <p>\n                    <button *ngIf=\"!maxWidthPerc\" (click)=\"changeMaxWidthPerc(100)\" title=\"Set max-width to 100%\">Set max-width:100%</button>\n                    <button *ngIf=\"maxWidthPerc\" (click)=\"changeMaxWidthPerc()\" title=\"Remove max-width style\">Remove max-width</button>\n                    <br /><br />\n                    <select [style.max-width.%]=\"maxWidthPerc\">\n                        <option title=\"Item with text that is too long to fit inside a select option\" value=\"1\">Item with text that is too long to fit inside a select option</option>\n                        <option title=\"Item 2\" value=\"2\">Item 2</option>\n                        <option title=\"Item 3\" value=\"3\">Item 3</option>\n                        <option title=\"Item 4\" value=\"4\">Item 4</option>\n                        <option title=\"Item 5\" value=\"5\">Item 5</option>\n                    </select>\n                    <span *ngIf=\"maxWidthPerc\" [style.max-width.%]=\"maxWidthPerc\"><br />&lt;select&gt; max-width at: {{maxWidthPerc}}%</span>\n                </p>\n            </div>\n            <p>\n                However, making the &lt;select&gt; responsive did not solve all of our problems. We still have these issues to deal with:\n            </p>\n            <ul>\n                <li>When option text that is too long is the selected value it is not easily readable.</li>\n                <li>The drop down list of the select element is as wide as the longest option text.</li>\n            </ul>\n            <p>\n                We could solve this by truncating the option text that is too long. If we were writing a pure Javascript solution we check if the length of text in any option goes beyond a number of characters then, truncate. But, we're after an Angular solution here.\n            </p>\n        </article>\n        <article>\n            <header>\n                <h1>Angular pipe solution:</h1>\n            </header>\n            <p>\n                Shorten any string using custom angular pipe, 'shortenText' to restrict it to a maximum number of characters. If text is shortened, it is truncated and an ellipsis, '...' will be prepended to the beginning. Optionally the truncation can be reversed to the end with a config setting.\n            </p>\n            <div style=\"max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;\">\n                <p>\n                    <i>&lt;option&gt; text shortened with pipe:</i>\n                </p>\n                <p>\n                    <select style=\"max-width:100%;\" class=\"select-pipe-demo\">\n                        <option title=\"Item with text that is too long to fit inside a select option\" value=\"1\">{{ \"Item with text that is too long to fit inside a select option\" | shortenText:35 }}</option>\n                        <option title=\"Item 2\" value=\"2\">{{ \"Item 2\" | shortenText:35 }}</option>\n                        <option title=\"Item 3\" value=\"3\">{{ \"Item 3\" | shortenText:35 }}</option>\n                        <option title=\"Item 4\" value=\"4\">{{ \"Item 4\" | shortenText:35 }}</option>\n                        <option title=\"Item 5\" value=\"5\">{{ \"Item 5\" | shortenText:35 }}</option>\n                    </select>\n                </p>\n            </div>\n            <p>\n                <b>Note:</b> Hovering your mouse over any shortened option text will reveal the complete option text in a tooltip (on browsers that support the 'title' attribute).\n            </p>\n        </article>\n\n        <article>\n            <header>\n                <h1>angular component solution:</h1>\n            </header>\n            <p>\n                Use custom angular component, SelectShortenComponent. How this works is that when a css <i>max-width</i> is set on a &lt;select&gt; element it calculates what the maximum number of characters should be - the catch is that the <i>max-width</i> css must be in pixels and not percent so, the width of its container in pixels must be known - e.g. <i>max-width: 260px</i>. Each child &lt;option&gt; element text can be restricted to a calculated number of characters determined by a <i>maxWidth</i> attribute on custom &lt;select-shorten&gt; element. When text is shortened by the component it is truncated and ellipsis, '...' is prepended to the beginning. Optionally the truncation can be reversed to the end with a <i>reverseEllipsis</i> attribute.\n            </p>\n            <div style=\"max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;\">\n                <p>\n                    <i>Try the &lt;select-shorten&gt; component:</i>\n                </p>\n                <p>\n                    <button *ngIf=\"!maxWidth\" (click)=\"changeMaxWidth(260)\" title=\"Set max-width to 260px\">Set max-width:260px</button>\n                    <button *ngIf=\"maxWidth\" (click)=\"changeMaxWidth()\" title=\"Remove max-width style\">Remove max-width</button>\n                    <br /><br />\n                    <select-shorten [maxWidth]=\"maxWidth\"></select-shorten>\n                    <span *ngIf=\"maxWidth\" [style.max-width.px]=\"maxWidth\"><br />&lt;select&gt; max-width at: {{maxWidth}}px</span>\n                </p>\n            </div>\n            <p>\n                <b>Note:</b> Hovering your mouse over any shortened option text will reveal the complete option text in a tooltip (on browsers that support the 'title' attribute).\n            </p>\n        </article>\n    ",
    })
], SelectShortenDemoComponent);
exports.SelectShortenDemoComponent = SelectShortenDemoComponent;
//# sourceMappingURL=select-shorten-demo.component.js.map