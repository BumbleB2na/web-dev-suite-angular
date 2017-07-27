"use strict";
var select_shorten_demo_component_1 = require("./select-shorten-demo.component");
var select_shorten_pipe_1 = require("./select-shorten.pipe");
var select_shorten_component_1 = require("./select-shorten.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('SelectShortenDemoComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var de2;
    var el2;
    var de3;
    var el3;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [select_shorten_demo_component_1.SelectShortenDemoComponent, select_shorten_pipe_1.SelectShortenPipe, select_shorten_component_1.SelectShortenComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(select_shorten_demo_component_1.SelectShortenDemoComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('select.select-pipe-demo'));
        el = de.nativeElement;
        de2 = fixture.debugElement.query(platform_browser_1.By.css('select-shorten'));
        el2 = de2.nativeElement;
    });
    it('should create component', function () {
        fixture.detectChanges();
        expect(comp).toBeDefined();
    });
    // PIPE SOLUTION TESTS - FIRST SELECT ELEMENT IN DOM:
    it('should not shorten second option text', function () {
        fixture.detectChanges();
        var secondOption = el.getElementsByTagName('option')[1];
        expect(secondOption.innerText).toMatch(/Item 2/i, 'second <option> should have text: "Item 2"');
    });
    it('should shorten first option text', function () {
        fixture.detectChanges();
        var firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should NOT have text: "Item with text that is too long to fit inside a select option"');
    });
    it('should prepend ellipsis to first option text', function () {
        fixture.detectChanges();
        var firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.innerText.substr(0, 3)).toMatch(/\.\.\./i, 'first <option> should have ellipsis, "..." prepended to the start of text');
    });
    it('should display complete, non-shorted option text in first option title attribute', function () {
        fixture.detectChanges();
        var firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
    });
    // COMPONENT SOLUTION TESTS - FIRST SELECT ELEMENT IN DOM:
    it('should not yet have expected <select> css style', function () {
        fixture.detectChanges();
        expect(el2.style['max-width']).not.toMatch(/260px/i, '<select> should not yet have css style: "max-width:260px;"');
    });
    it('should not yet shorten first option text', function () {
        fixture.detectChanges();
        var firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
    });
    it('should shorten first option text when max-width changed', function () {
        //de2.componentInstance.changeMaxWidth(260);  //method used to live inside SelectShortenComponent
        comp.changeMaxWidth(260); //run method on SelectShortenDemoComponent
        fixture.detectChanges();
        var select = el2.getElementsByTagName('select')[0];
        expect(select.style.maxWidth).toMatch(/260px/i, '<select> should have css style: "max-width:260px;"');
        var firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should no longer contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
        expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
    });
    it('should revert back first option text when max-width removed', function () {
        //de2.componentInstance.changeMaxWidth();  //method used to live inside SelectShortenComponent
        comp.changeMaxWidth(); //run method on SelectShortenDemoComponent
        fixture.detectChanges();
        var select = el2.getElementsByTagName('select')[0];
        expect(select.style.maxWidth).not.toMatch(/260px/i, '<select> should no longer have a "max-width" css style');
        var firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i, 'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
    });
});
//# sourceMappingURL=select-shorten-demo.component.spec.js.map