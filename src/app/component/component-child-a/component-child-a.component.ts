import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { StyleService } from '../../service/style.service';

@Component({
  selector: 'app-component-child-a',
  templateUrl: './component-child-a.component.html',
  styleUrls: ['./component-child-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentChildAComponent implements OnInit, OnDestroy {

  constructor(private styleService: StyleService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.styleService.removeStyle('THEME_A');
  }

  onSwitchThemeA(): void {
    this.styleService.addStyle('THEME_A', `
      .main {
        background: red !important;
        color: white;
      }
    `);
  }

}
