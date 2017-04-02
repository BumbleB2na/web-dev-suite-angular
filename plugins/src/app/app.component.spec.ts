import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

// Making this a "shallow component test" with NO_ERRORS_SCHEMA and "component stubbing"
// This prevents compiler errors with <select-shorten-demo>
import { NO_ERRORS_SCHEMA }          from '@angular/core';
@Component({
  selector: 'select-shorten-demo',
  template: 'NOTE: Stubbed out SelectShortenDemoComponent for testing to prevent compiler errors'
})
export class SelectShortenDemoStubComponent { }


describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, SelectShortenDemoStubComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(comp).toBeDefined();
  });

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
