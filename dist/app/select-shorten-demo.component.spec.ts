import { SelectShortenDemoComponent } from './select-shorten-demo.component';
import { SelectShortenPipe } from "./select-shorten.pipe";
import { SelectShortenComponent } from "./select-shorten.component";

import { async, TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';


describe('SelectShortenDemoComponent', function () {
  let comp: SelectShortenDemoComponent;
  let fixture: ComponentFixture<SelectShortenDemoComponent>;

  //Angular components that use templateUrl or styleUrls have to be compiled and this is asynchronous. We return a promise to simplify our tests by running them all within "then". Some solutions online suggest async or compiling the component within each test. I could not get async to compile in time for tests. Also, I was not happy with the alternate solution of compiling a component within each test because it reduces readability of the spec.
  let compPromise: Promise<any>;

  let de: DebugElement;
  let el: HTMLElement;
  
  let de2: DebugElement;
  let el2: HTMLElement;

  let de3: DebugElement;
  let el3: HTMLElement;

  beforeEach(async() => {
    compPromise = new Promise((resolve, reject) => {
      TestBed.configureTestingModule({
        declarations: [ SelectShortenDemoComponent, SelectShortenPipe, SelectShortenComponent ],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }  //is this needed?
        ]
      });
      TestBed.compileComponents().then(() => {
          resolve('Angular component template and css has been compiled');
      }).catch((error) => {
          reject(Error(error));
      });
    });
  });

  describe('when SelectShortenDemo and other components are compiled', () => {
    
    beforeEach(() => {
      compPromise.then(() => {
        fixture = TestBed.createComponent(SelectShortenDemoComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('select.select-pipe-demo'));
        el = de.nativeElement;
        
        de2 = fixture.debugElement.query(By.css('select-shorten'));
        el2 = de2.nativeElement;
      });
    });


    it('should create component', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        expect(comp).toBeDefined();
      });
    });


    // PIPE SOLUTION TESTS - SECOND SELECT ELEMENT IN DOM:
    
    it('should not shorten second option text', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        const secondOption = el.getElementsByTagName('option')[1];
        expect(secondOption.innerText).toMatch(/Item 2/i,
          'second <option> should have text: "Item 2"');
      });
    });
    
    it('should shorten first option text', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        const firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should NOT have text: "Item with text that is too long to fit inside a select option"');
      });
    });
    
    it('should prepend ellipsis to first option text', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        const firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.innerText.substr(0, 3)).toMatch(/\.\.\./i,
          'first <option> should have ellipsis, "..." prepended to the start of text');
      });
    });

    it('should display complete, non-shorted option text in first option title attribute', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        const firstOption = el.getElementsByTagName('option')[0];
        expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
      });
    });


    // COMPONENT SOLUTION TESTS - THIRD SELECT ELEMENT IN DOM:

    it('should not yet have expected <select> css style', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        expect(el2.style['max-width']).not.toMatch(/260px/i,
          '<select> should not yet have css style: "max-width:260px;"');
      });
    });

    it('should not yet shorten first option text', () => {
      compPromise.then(() => {
        fixture.detectChanges();
        const firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
      });
    });
    
    it('should shorten first option text when max-width changed', () => {
      compPromise.then(() => {
        //de2.componentInstance.changeMaxWidth(260);  //method used to live inside SelectShortenComponent
        comp.changeMaxWidth(260);  //run method on SelectShortenDemoComponent
        fixture.detectChanges();
        const select = el2.getElementsByTagName('select')[0];
        expect(select.style.maxWidth).toMatch(/260px/i,
          '<select> should have css style: "max-width:260px;"');
        const firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).not.toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should no longer contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
        expect(firstOption.getAttribute('title')).toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
      });
    });
    
    it('should revert back first option text when max-width removed', () => {
      compPromise.then(() => {
        //de2.componentInstance.changeMaxWidth();  //method used to live inside SelectShortenComponent
        comp.changeMaxWidth();  //run method on SelectShortenDemoComponent
        fixture.detectChanges();
        const select = el2.getElementsByTagName('select')[0];
        expect(select.style.maxWidth).not.toMatch(/260px/i,
          '<select> should no longer have a "max-width" css style');
        const firstOption = el2.getElementsByTagName('option')[0];
        expect(firstOption.innerText).toMatch(/Item with text that is too long to fit inside a select option/i,
          'first <option> should contain this value in its title attribute: "Item with text that is too long to fit inside a select option"');
      });
    });

  });

});
