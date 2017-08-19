# Angular UI Helpers
  
A collection of components, directives and pipes for solving Html forms/UI problems. This is a rewrite of my old [jQuery plugins project](https://github.com/BumbleB2na/web-dev-suite).  
  
[View project demo](https://mobilewebsmart.com/_sites/WebDevSuiteAngular/index.html)  
  
Currently developed:
- Pipe and component options to solve problem with Html select input elements that have long option elements: 
  - Shortens long text using a custom pipe
  - Shortens select element options using a custom select-shorten component
  - See select-shorted-demo.component.spec.ts for tests
  
Tests written in Jasmine using Karma.
- `npm test' - compiles, runs and watches the karma unit tests
  
This project is built on top of [Angular 2 QuickStart seed project](https://github.com/angular/quickstart) and uses gulp for distribution. I have created a separate [basic QuickStart + gulp project](https://github.com/BumbleB2na/Angular-2-Quickstart-Gulp) that explains how to integrate gulp in to the Angular 2 QuickStart seed project in order to generate a dist folder.  
