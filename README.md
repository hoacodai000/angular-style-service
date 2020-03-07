# Add
```
this.styleService.addStyle('THEME_A', `
    .main {
      background: red !important;
      color: white;
    }
`);
```

# Remove
```
this.styleService.removeStyle('THEME_A');
```

# Service
```
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private stylesMap: Map<any, Node> = new Map();
  private host: Node;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.host = this.document.head;
  }

  private createStyleNode(content: string): Node {
    const styleEl: HTMLStyleElement = this.document.createElement('style');
    styleEl.textContent = content;
    return styleEl;
  }

  addStyle(key: string, style: string): void {
    const styleEl: Node = this.createStyleNode(style);
    this.stylesMap.set(key, styleEl);
    this.host.appendChild(styleEl);
  }

  removeStyle(key: string): void {
    const styleEl: Node = this.stylesMap.get(key);
    if (styleEl) {
      this.stylesMap.delete(key);
      this.host.removeChild(styleEl);
    }
  }
}

```


# AngularStyleService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
