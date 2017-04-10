import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Inject,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';
import * as d3 from 'd3';
import * as nv from 'nvd3';

import template from './nvd3-chart.component.html';

@Component({
  selector: 'nvd3-chart',
  template: `
    <svg></svg>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Nvd3ChartComponent implements AfterViewInit {
  private el: any;
  @Input() options: any;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.el = elementRef.nativeElement;

    return this;
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
