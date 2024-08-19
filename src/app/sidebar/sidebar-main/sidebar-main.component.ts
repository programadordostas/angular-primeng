import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrl: './sidebar-main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMainComponent { }
