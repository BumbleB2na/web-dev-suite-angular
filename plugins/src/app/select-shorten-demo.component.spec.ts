import { SelectShortenDemoComponent } from './select-shorten-demo.component';
import { SelectShortenPipe } from "./select-shorten.pipe";
import { SelectShortenComponent } from "./select-shorten.component";

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';


describe('SelectShortenDemoComponent', function () {
  let comp: SelectShortenDemoComponent;
  let fixture: ComponentFixture<SelectShortenDemoComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  
  let de2: DebugElement;
  let el2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShortenDemoComponent, SelectShortenPipe, SelectShortenComponent ],
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShortenDemoComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('select'));
    el = de.nativeElement;
    
    de2 = fixture.debugElement.query(By.css('select-shorten'));
    el2 = de2.nativeElement;
  });


  it('should create component', () => {
    fixture.detectChanges();
    expect(comp).toBeDefined();
  });


  // FIRST SELECT ELEMENT TESTS:

  it('should have expected <select> css style', () => {
    fixture.detectChanges();
    expect(el.style['max-width']).toMatch(/350px/i,
      '<select> should have css style: "max-width:350px;"');
  });

  it('should not shorten first option text', () => {
    fixture.detectChanges();
    const firstOption = el.getElementsByTagName('option')[1];
    expect(firstOption.innerText).toMatch(/Short item text/i,
      'first <option> should have text: "Short item text"');
  });

  it('should shorten second option text', () => {
    fixture.detectChanges();
    const secondOption = el.getElementsByTagName('option')[2];
    expect(secondOption.innerText).not.toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should NOT have text: "Long item text that is too long to fit inside a select option"');
  });

  it('should prepend ellipsis to second option text', () => {
    fixture.detectChanges();
    const secondOption = el.getElementsByTagName('option')[2];
    expect(secondOption.innerText.substr(0, 3)).toMatch(/\.\.\./i,
      'second <option> should have ellipsis, "..." prepended to the start of text');
  });

  it('should display complete, non-shorted option text in second option title attribute', () => {
    fixture.detectChanges();
    const secondOption = el.getElementsByTagName('option')[2];
    expect(secondOption.getAttribute('title')).toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should contain this value in its title attribute: "Long item text that is too long to fit inside a select option"');
  });


  // SECOND SELECT ELEMENT TESTS:

  it('should not yet have expected <select> css style', () => {
    fixture.detectChanges();
    expect(el2.style['max-width']).not.toMatch(/260px/i,
      '<select> should not yet have css style: "max-width:260px;"');
  });

  it('should not yet shorten second option text', () => {
    fixture.detectChanges();
    const secondOption = el2.getElementsByTagName('option')[2];
    expect(secondOption.innerText).toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should contain this value in its title attribute: "Long item text that is too long to fit inside a select option"');
  });
  
  it('should shorten second option text when max-width changed', () => {
    de2.componentInstance.changeMaxWidth(260);
    fixture.detectChanges();
    const select = el2.getElementsByTagName('select')[0];
    expect(select.style.maxWidth).toMatch(/260px/i,
      '<select> should have css style: "max-width: 260px;"');
    const secondOption = el2.getElementsByTagName('option')[2];
    expect(secondOption.innerText).not.toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should no longer contain this value in its title attribute: "Long item text that is too long to fit inside a select option"');
    expect(secondOption.getAttribute('title')).toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should contain this value in its title attribute: "Long item text that is too long to fit inside a select option"');
  });
  
  it('should revert back second option text when max-width removed', () => {
    de2.componentInstance.changeMaxWidth();
    fixture.detectChanges();
    const select = el2.getElementsByTagName('select')[0];
    expect(select.style.maxWidth).not.toMatch(/260px/i,
      '<select> should no longer have a "max-width" css style');
    const secondOption = el2.getElementsByTagName('option')[2];
    expect(secondOption.innerText).toMatch(/Long item text that is too long to fit inside a select option/i,
      'second <option> should contain this value in its title attribute: "Long item text that is too long to fit inside a select option"');
  });

});
