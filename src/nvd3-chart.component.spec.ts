
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Nvd3ChartComponent } from './nvd3-chart.component';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('nvd3ChartComponent', () => {

  let comp: Nvd3ChartComponent;
  let fixture: ComponentFixture<Nvd3ChartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Nvd3ChartComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3ChartComponent);
    comp = fixture.componentInstance; // to access properties and methods
    de = fixture.debugElement; // test helper
    el = fixture.nativeElement; // to access DOM element
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('should have <svg></svg> template', () => {
    expect(el.querySelector('svg')).not.toBe(null);
  });

});
