"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var select_shorten_demo_component_1 = require("./select-shorten-demo.component");
var select_shorten_pipe_1 = require("./select-shorten.pipe");
var select_shorten_component_1 = require("./select-shorten.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('SelectShortenDemoComponent', function () {
    var _this = this;
    var comp;
    var fixture;
    //Angular components that use templateUrl or styleUrls have to be compiled and this is asynchronous. We return a promise to simplify our tests by running them all within "then". Some solutions online suggest async or compiling the component within each test. I could not get async to compile in time for tests. Also, I was not happy with the alternate solution of compiling a component within each test because it reduces readability of the spec.
    var compPromise;
    var de;
    var el;
    var de2;
    var el2;
    var de3;
    var el3;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            compPromise = new Promise(function (resolve, reject) {
                testing_1.TestBed.configureTestingModule({
                    declarations: [select_shorten_demo_component_1.SelectShortenDemoComponent, select_shorten_pipe_1.SelectShortenPipe, select_shorten_component_1.SelectShortenComponent],
                    providers: [
                        { provide: testing_1.ComponentFixtureAutoDetect, useValue: true } //is this needed?
                    ]
                });
                testing_1.TestBed.compileComponents().then(function () {
                    resolve('Angular component template and css has been compiled');
                }).catch(function (error) {
                    reject(Error(error));
                });
            });
            return [2 /*return*/];
        });
    }); });
    describe('when SelectShortenDemo and other components are compiled', function () {
        beforeEach(function () {
            compPromise.then(function () {
                fixture = testing_1.TestBed.createComponent(select_shorten_demo_component_1.SelectShortenDemoComponent);
                comp = fixture.componentInstance;
                de = fixture.debugElement.query(platform_browser_1.By.css('select.select-pipe-demo'));
                el = de.nativeElement;
                de2 = fixture.debugElement.query(platform_browser_1.By.css('select-shorten'));
                el2 = de2.nativeElement;
            });
        });
        it('should create component', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                expect(comp).toBeDefined();
            });
        });
        // PIPE SOLUTION TESTS - SECOND SELECT ELEMENT IN DOM:
        it('should not shorten second option text', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                var secondOption = el.getElementsByTagName('option')[1];
                expect(secondOption.innerText).toMatch(/Item 2/i, 'second <option> should have text: "Item 2"');
            });
        });
        it('should shorten first option text', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                var firstOption = el.getElementsByTagName('option')[0];
                expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should NOT have text: "Item with text that is too long to fit inside a select option"');
            });
        });
        it('should prepend ellipsis to first option text', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                var firstOption = el.getElementsByTagName('option')[0];
                expect(firstOption.innerText.substr(0, 3)).toMatch(/\.\.\./i, 'first <option> should have ellipsis, "..." prepended to the start of text');
            });
        });
        it('should display complete, non-shorted option text in first option title attribute', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                var firstOption = el.getElementsByTagName('option')[0];
                expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
            });
        });
        // COMPONENT SOLUTION TESTS - THIRD SELECT ELEMENT IN DOM:
        it('should not yet have expected <select> css style', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                expect(el2.style['max-width']).not.toMatch(/260px/i, '<select> should not yet have css style: "max-width:260px;"');
            });
        });
        it('should not yet shorten first option text', function () {
            compPromise.then(function () {
                fixture.detectChanges();
                var firstOption = el2.getElementsByTagName('option')[0];
                expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
            });
        });
        it('should shorten first option text when max-width changed', function () {
            compPromise.then(function () {
                //de2.componentInstance.changeMaxWidth(260);  //method used to live inside SelectShortenComponent
                comp.changeMaxWidth(260); //run method on SelectShortenDemoComponent
                fixture.detectChanges();
                var select = el2.getElementsByTagName('select')[0];
                expect(select.style.maxWidth).toMatch(/260px/i, '<select> should have css style: "max-width:260px;"');
                var firstOption = el2.getElementsByTagName('option')[0];
                expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should no longer contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
                expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
            });
        });
        it('should revert back first option text when max-width removed', function () {
            compPromise.then(function () {
                //de2.componentInstance.changeMaxWidth();  //method used to live inside SelectShortenComponent
                comp.changeMaxWidth(); //run method on SelectShortenDemoComponent
                fixture.detectChanges();
                var select = el2.getElementsByTagName('select')[0];
                expect(select.style.maxWidth).not.toMatch(/260px/i, '<select> should no longer have a "max-width" css style');
                var firstOption = el2.getElementsByTagName('option')[0];
                expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
            });
        });
    });
});
//# sourceMappingURL=select-shorten-demo.component.spec.js.map