import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>sidebar-main works!</p>`,
  styleUrl: './sidebar-main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMainComponent { }
