# nvd3-chart
nvd3-chart angular2 component

[![GitHub version](https://badge.fury.io/gh/wwwdevio%2Fnvd3-chart.svg)](https://badge.fury.io/gh/wwwdevio%2Fnvd3-chart)
[![GitHub issues](https://img.shields.io/github/issues/wwwdevio/nvd3-chart.svg)](https://github.com/wwwdevio/nvd3-chart/issues)
[![GitHub forks](https://img.shields.io/github/forks/wwwdevio/nvd3-chart.svg)](https://github.com/wwwdevio/nvd3-chart/network)
[![GitHub stars](https://img.shields.io/github/stars/wwwdevio/nvd3-chart.svg)](https://github.com/wwwdevio/nvd3-chart/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wwwdevio/nvd3-chart/master/LICENSE)

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Versioning](#versioning)
* [Git commit](#git-commit)
* [License](#license)


## Installation

To install this library, run:

```bash
$ npm install nvd3 nvd3-chart --save
```

## Usage

In your any Angular 2 module:

```typescript
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';

// Import nvd3-chart library
import Nvd3ChartComponent from 'nvd3-chart';

@NgModule({
  declarations: [
    ChartComponent,
    // Specify Nvd3ChartComponent library in declarations
    Nvd3ChartComponent
  ],
  imports: [],
  providers: []
})
export class ChartModule { }
```

In your any component, in this example ./chart.component.ts

```typescript
import { Component } from '@angular/core';
import Nvd3ChartComponent from 'nvd3-chart';
import * as nv from 'nvd3';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})
export class ChartComponent {
  chart = {
    scatter: {
      options: {
        models: nv.models.scatter().margin({top: 20, right: 20, bottom: 20, left: 20}).pointSize(function(d) { return d.z }).useVoronoi(false),
        datum: this. randomData()
      }
    },
    sparkline: { 
      options: {
        models: nv.models.sparkline(),
        datum: this.sin()
      }
    },
    discrete: {
      options: {
        models: nv.models.discreteBarChart().x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .staggerLabels(true)
              //.staggerLabels(historicalBarChart[0].values.length > 8)
              .showValues(true)
            .duration(250),
        datum: [
          {
            key: "Cumulative Return",
            values: [
              {
                "label" : "A" ,
                "value" : 29.765957771107
              } ,
              {
                "label" : "B" ,
                "value" : 0
              } ,
              {
                "label" : "C" ,
                "value" : 32.807804682612
              } ,
              {
                "label" : "D" ,
                "value" : 196.45946739256
              } ,
              {
                "label" : "E" ,
                "value" : 0.19434030906893
              } ,
              {
                "label" : "F" ,
                "value" : 98.079782601442
              } ,
              {
                "label" : "G" ,
                "value" : 13.925743130903
              } ,
              {
                "label" : "H" ,
                "value" : 5.1387322875705
              }
            ]
          }
        ]
      }
    }
  };

  constructor() {
  }

  randomData() {
    var data = [];
    for (var i = 0; i < 2; i++) {
      data.push({
        key: 'Group ' + i,
        values: []
      });
      for (var j = 0; j < 100; j++) {
        data[i].values.push({x: Math.random(), y: Math.random(), z: Math.random()});
      }
    }
    return data;
  }

  sin() {
    return () => {
      var sin = [];
      for (var i = 0; i < 100; i++) {
          sin.push({x: i, y: Math.sin(i/10)});
      }
      return sin;
    };
  }
}
```

and in ./chart.component.html


```xml
<!-- You can now use your library component in chart.component.html -->
<div>
  ChartComponent
</div>
<div>
  <h4>
    Chart discrete bar
  </h4>
  <nvd3-chart [options]="chart.discrete.options"></nvd3-chart>
</div>

<div>
  <h4>
    Chart scatter
  </h4>
  <nvd3-chart [options]="chart.scatter.options"></nvd3-chart>
</div>

<div>
  <h4>
    Chart sparkline
  </h4>
  <nvd3-chart [options]="chart.sparkline.options"></nvd3-chart>
</div>
```

## Versioning
Semantic Versioning 2.0.0 http://semver.org/

**Given a version number MAJOR.MINOR.PATCH, increment the:**   
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**   
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## GIT commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

## License

MIT © [wwwdev.io](https://raw.githubusercontent.com/wwwdevio/nvd3-chart/master/LICENSE)
