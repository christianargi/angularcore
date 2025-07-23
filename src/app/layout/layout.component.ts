import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    HeaderComponent,
    SidebarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
  standalone: true,
})
export class DefaultLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isExpanded: boolean = true;
  isMobile: boolean = false;
  isSidebarOpen: boolean = false;
  isShowing: boolean = false;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;

  ngOnInit(): void {
    this.updateSidebarState(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidebarState(event.target.innerWidth);
  }

  updateSidebarState(width: number) {
    if (width < 768) {
      this.isMobile = true;
      this.isExpanded = false;
    } else if (width >= 768 && width < 1280) {
      this.isMobile = false;
      this.isExpanded = false;
    } else {
      this.isMobile = false;
      this.isExpanded = true;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
