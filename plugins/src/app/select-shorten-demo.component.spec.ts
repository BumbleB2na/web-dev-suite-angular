import { SelectShortenDemoComponent } from './select-shorten-demo.component';
import { ShortenSelectPipe } from "./select-shorten.pipe";

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';


describe('SelectShortenDemoComponent', function () {
  let de: DebugElement;
  let el: HTMLElement;
  let comp: SelectShortenDemoComponent;
  let fixture: ComponentFixture<SelectShortenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShortenDemoComponent, ShortenSelectPipe ],
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShortenDemoComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('select'));
    el = de.nativeElement;
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(comp).toBeDefined();
  });

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
});
