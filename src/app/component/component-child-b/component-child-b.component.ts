import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { StyleService } from '../../service/style.service';

@Component({
  selector: 'app-component-child-b',
  templateUrl: './component-child-b.component.html',
  styleUrls: ['./component-child-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentChildBComponent implements OnInit, OnDestroy {

  constructor(private styleService: StyleService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.styleService.removeStyle('THEME_B');
  }

  onSwitchThemeB(): void {
    this.styleService.addStyle('THEME_B', `
      .main {
        background: green !important;
        color: white;
      }
    `);
  }
}
