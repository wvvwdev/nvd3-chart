import { Component, AfterViewInit, ViewEncapsulation, Input, ElementRef, OnChanges, Inject } from '@angular/core';
import * as d3 from 'd3';
import * as nv from 'nvd3';
@Component({
  selector: 'nvd3-chart',
  template: require('./nvd3-chart.component.html'),
  styles: [
    //require('./nvd3-chart.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class nvd3ChartComponent implements AfterViewInit {
  private el: any;
  @Input() options;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnChanges(): void {
    this.updateData();
  }

  ngAfterViewInit(): void {
    nv.addGraph({
      generate: () => {
        d3.select(this.el).select('svg').datum(this.options.datum).transition().call(this.options.models);
        nv.utils.windowResize(this.options.models.update);
        return this.options.models;
      }
    });
  }

  updateData(): void {
    d3.select(this.el).select('svg').datum(this.options.datum).transition().call(this.options.models);
    nv.utils.windowResize(this.options.models.update);
  }
} 