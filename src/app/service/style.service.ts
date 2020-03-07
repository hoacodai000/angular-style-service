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
